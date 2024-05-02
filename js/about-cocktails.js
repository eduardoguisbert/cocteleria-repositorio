
var btnUp = document.querySelectorAll(".btn-up");
var btnDown = document.querySelectorAll(".btn-down");
var btnAngles = document.querySelectorAll('.btn-angles');
var cocktailBodyParagraph = document.querySelectorAll(".cocktail-body p");



var btnNext = document.querySelector("#btn-next");
var btnPrev = document.querySelector("#btn-prev");
var scrollContainer = document.querySelector('.utensils-container');
var utensilContainer = document.querySelectorAll('.utensil-container')
var uContainerWidth = utensilContainer.scrollWidth;

for(let i=0; i<btnAngles.length; i++){
    btnAngles[i].addEventListener("click", function show(){
        btnAngles[i].parentNode.classList.toggle('bd-filter');
        cocktailBodyParagraph[i].classList.toggle('p-hidden');
        cocktailBodyParagraph[i].classList.toggle('p-visible');
        btnDown[i].classList.toggle('d-none');
        btnUp[i].classList.toggle('d-none');
    })
}

btnNext.addEventListener("click", () =>{
     scrollContainer.scrollLeft += utensilContainer[0].scrollWidth;
})

btnPrev.addEventListener("click", function prev(){
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= utensilContainer[0].scrollWidth;
})

