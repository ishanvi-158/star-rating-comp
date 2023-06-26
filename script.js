let starContainer = document.querySelector(".star-container");
let allStars = document.querySelectorAll(".star");
let rating =document.querySelector("h3");
let previousClicked = 0;




starContainer.addEventListener("click",function(e){
    //console.log(e.target.dataset.pos);
     let currentSelected = e.target.dataset.pos;

     for(let i=0;i<previousClicked;i++){
        allStars[i].classList.remove("gold");
     }
     

    for(let i=0;i<currentSelected;i++){
        allStars[i].classList.add("gold");
    }

    rating.innerText = "Rating : " +currentSelected;

     previousClicked = currentSelected;

})


starContainer.addEventListener("mouseover",function(e){
    let currentSelected = e.target.dataset.pos;
    for(let i=0;i<allStars.length;i++){
        if(allStars[i].classList.contains("gold")){
            allStars[i].classList.remove("gold");
        }
    }

    for(let i=0;i<currentSelected;i++){
        allStars[i].classList.add("gold");
    }
   
})


starContainer.addEventListener("mouseleave",function(){
    for(let i=0;i<allStars.length;i++){
        allStars[i].classList.remove("gold");
    }
    
    for(let i=0;i<previousClicked;i++){
        allStars[i].classList.add("gold");
    }
   // console.log(previousClicked);
})