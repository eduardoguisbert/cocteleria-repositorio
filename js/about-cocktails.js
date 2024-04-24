
var btnUp = document.querySelectorAll(".btn-up");
var btnDown = document.querySelectorAll(".btn-down");
var btnAngles = document.querySelectorAll('.btn-angles');
var cocktailBodyParagraph = document.querySelectorAll(".cocktail-body p");

for(let i=0; i<btnAngles.length; i++){
    btnAngles[i].addEventListener("click", function show(){
        btnAngles[i].parentNode.classList.toggle('bd-filter');
        cocktailBodyParagraph[i].classList.toggle('p-hidden');
        cocktailBodyParagraph[i].classList.toggle('p-visible');
        btnDown[i].classList.toggle('d-none');
        btnUp[i].classList.toggle('d-none');
    })
}

