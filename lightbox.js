//getting all required elements

const gallery = document.querySelectorAll(".image"),//gallery ek array bn gyi

previewBox = document.querySelector("previewbox"),

previewImg = previewBox.querySelector("img"),

closeIcon = previewBox.querySelector("icon"),

currentImg = previewBox.querySelector("current-img"),

totalImg = previewBox.querySelector("total-img"),

shadow = documnet.querySelector(".shadow");



window.onload = ()=>
{
    for(let i = 0; i < gallery.length; i++)
    {
        totalImg.textContent = gallery.length; //gallery ki length i.e 6 totalImg ke content me ajayegi p tag ke andar or passing total img length
        let newIndex = i; //passing i value to newIndex variable
        let clickedImgIndex;    //creating new variable

        gallery[i].onclick = ()=>
        {
            clickedImgIndex = i; //passing clicked img index to created variable

            function preview()
            {
                currentImg.textContent = newIndex + 1; // clk hone pr currentimg ka text content text content + 1 ho jayegi
                let imageURL = gallery[newIndex].querySelector("img").src; // src imageurl ke andar agya
                previewImg.src = imageURL;
            }

            preview();  // calling above function.

            const prevBtn = document.querySelector(".prev"); //new variable jiske andar prev wali class dali
            const nextBtn = document.querySelector(".next"); // new variable jiske andar next wali class dali

            if(newIndex == 0)
            {
                prevBtn.style.display = "none"; // newindex jb 0 hoga to prev button hat jayega
            }

            if(newIndex >= gallery.length -1)
            {
                nextBtn.style.display = "none"; // newindex jb gallery li length ke barabar ya bada hua to next button hat jayega.
            }


            prevBtn.onclick = ()=>
            {
                newIndex--;            //decrement index mtlb prev btn clk krne pr newindex ki value kam ho jayegi
                
                if(newIndex == 0)
                {
                    preview();
                    prevBtn.style.display = "none";
                }
                else
                {
                    preview();
                    nextBtn.style.display = "block";
                }

            }


            nextBtn.onclick = ()=>
            {
                newIndex++;            //increment index mtlb next btn clk krne pr newindex ki value bad jayegi
                
                if(newIndex >= gallery.length - 1)
                {
                    preview();
                    nextBtn.style.display = "none";
                }
                else
                {
                    preview();
                    prevBtn.style.display = "block";
                }

            }
            

            document.querySelector("body").style.overflow = "hidden";  //gallery box ki clk ke time baki ki website pr overflow hidden rhegi or ye nhi lgaya to scroll ajayega.

            previewBox.classList.add("show"); // preview box ke saath show claass add ho jayegi jisse grey color ke box ki opacity 1 ho jayegi.

            shadow.style.display = "block";


            closeIcon.onclick = ()=>
            {
                newIndex = clickedImgIndex; // assigning user first clicked img index to newindex
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "scroll";

            }

        }
    }
}