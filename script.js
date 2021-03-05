// Creat List
const revList = [
    {
        name : "Mike Snow",
        img : "https://eudgwass.sirv.com/images/13.jpg",
        job : "Graphic designer ",
        review : "Resized two rings for me and gave one a really good clean, came back looking just like new, couldn't believe how it sparkles! Really impressed guys "
    },
    {
        name : "Mike Snow",
        img : "https://eudgwass.sirv.com/images/John-Doe.jpg",
        job : "software engineer",
        review : "Great help from this service"
    },
    {
        name : "Sara ",
        img : "https://eudgwass.sirv.com/images/speaker-1-v2.jpg",
        job : "Full stuck developer ",
        review : "Product was comfy and well fitted"
    }
] 

// Declar the variables
 // Get Buttons 
 const NextBtn = document.querySelector(".carousel-contol.next");
 const PrevBtn = document.querySelector(".carousel-contol.prev");

 // Get Customor info 
 const CstImg = document.querySelector(".image");
 const CstName = document.querySelector(".custom-name");
 const CstJob = document.querySelector(".custom-job");
 const CstRev = document.querySelector(".review-content");

 let bublles = document.querySelectorAll(".carousel-index .index");

 // Current carousel index 
 let currentIndex = 0;

 // initialize the information 

 // Set Animation 

 window.onload = ()=> {
    document.querySelector('.container').animate([{opacity : '0.5'} , {opacity : '1'}] , {duration: 1500})
    // Review animation
    CstRev.animate([{opacity : '0.5'} , {opacity : '1'}] , {duration: 2000});
    CstRev.innerHTML = `“ ${revList[currentIndex].review} ”`;
    // image animation
    CstImg.animate([{opacity : '0.5'} , {opacity : '1'} ] , {duration: 2000});
    CstImg.setAttribute("src" , `${revList[currentIndex].img}`);
    // Custom Name animation
    CstName.animate([{opacity : '0.5'} , {opacity : '1'}] , {duration: 2000});
    CstName.innerHTML = revList[currentIndex].name;
    // Custom Job Animation
    CstJob.innerHTML = revList[currentIndex].job;
    CstJob.animate([{opacity : '0.5'} , {opacity : '1'}] , {duration: 2000});
 }

 // Change the info 
 const changeInfo = (currentIndex)=> {
    
    // Review animation
    CstRev.animate([{opacity : '0.5'} , {opacity : '1'}] , {duration: 2000});
    CstRev.innerHTML = `“ ${revList[currentIndex].review} ”`;
    // image animation
    CstImg.animate([{opacity : '0.5'} , {opacity : '1'}] , {duration: 2000});
    CstImg.setAttribute("src" , `${revList[currentIndex].img}`);
    // Custom Name animation
    CstName.animate([{opacity : '0.5'} , {opacity : '1'}] , {duration: 2000});
    CstName.innerHTML = revList[currentIndex].name;
    // Custom Job Animation
    CstJob.innerHTML = revList[currentIndex].job;
    CstJob.animate([{opacity : '0.5'} , {opacity : '1'}] , {duration: 2000});

    console.log(currentIndex);
 }

 // Check the current index 
 const checkCurrentIndex = (current)=> {
    if (currentIndex == - 1) {
        currentIndex = revList.length - 1;
    }else if(currentIndex == revList.length - 1 ){
        currentIndex = -1 ;
    }
 }

 console.log(currentIndex);
 // Check the active class 
 const checkActiveClass = (elm) => {
    if (elm.classList.contains("active") == true) {

        elm.classList.remove("active")
    }
 }

 let setBublles = ()=> {
    bublles.forEach(bbl => {
        if (bbl.classList.contains("active")) {
            bbl.classList.remove("active");
        }
    });
 } 

 // Add Class To the active bublle
 const ActiveClass = (element) => element.classList.add("active");

 // Get the active bublles
 const getActiveBublles = (event)=> {
    
    // Get bubble element 
    bublleAction = event.target;
    // Get bubble data-index
    getBublleData = bublleAction.dataset.index;
    console.log(getBublleData);
 }

 // Set Bubbles

 bublles.forEach(bublle => {
    bublle.addEventListener("click" , (event) => {

       setBublles();

       getActiveBublles(event);
       currentIndex = getBublleData;
       
       changeInfo(currentIndex);

       ActiveClass(bublle);

    });
});

 // Handle Change 
 NextBtn.addEventListener("click" , ()=> {
     // Callback the chicker
    checkCurrentIndex(currentIndex);
    currentIndex ++;
    changeInfo (currentIndex);

    bublles.forEach(bublle => {
        checkActiveClass(bublle)

        if (bublle.dataset.index == currentIndex.toString()) {
            bublle.classList.add("active")
        }
    });
 });

 PrevBtn.addEventListener("click" , ()=> {
     // Callback the chicker
     currentIndex --;
     checkCurrentIndex(currentIndex);

     changeInfo (currentIndex);
 
     bublles.forEach(bublle => {
         checkActiveClass(bublle)
 
         if (bublle.dataset.index == currentIndex.toString()) {
             bublle.classList.add("active")
         }
     });

 });

 
