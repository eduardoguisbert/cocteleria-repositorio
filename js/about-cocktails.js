
var btnUp = document.querySelector("#btn-up");
var btnDown = document.querySelector("#btn-down");


var btnAngles = document.getElementById('btn-angles');

btnAngles.addEventListener("click", function evento(e){
    console.log(e.target);
});

btnUp.addEventListener("click", show);
btnDown.addEventListener("click", hidden);



function show(){
    btnUp.classList.add('d-none');
    btnDown.classList.remove('d-none');
}

function hidden(){
    btnDown.classList.add('d-none');
    btnUp.classList.remove('d-none');
}