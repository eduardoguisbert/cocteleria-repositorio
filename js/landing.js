
var btnShow = document.querySelector("#btn-show");
var btnShowToggle = document.querySelector("#btn-show-toggle");

var recipePreparation = document.querySelector(".recipe-preparation");
var backDrop = document.querySelector("#backdrop");

btnShow.addEventListener("click", show);
btnShowToggle.addEventListener("click", showToggle);

function show() {
    recipePreparation.style.display = "block";
    btnShow.style.display = "none";
    backDrop.classList.add('backdrop-filter-on');
    btnShowToggle.textContent = "Ver Imagen";
  
  }
  
  function showToggle() {
  
    backDrop.classList.remove('backdrop-filter-off');
    backDrop.classList.toggle('backdrop-filter-on');
  
    if (backDrop.classList.contains('backdrop-filter-on')) {
      btnShowToggle.textContent = "Ver Imagen";
    } else {
      backDrop.classList.add('backdrop-filter-off')
      btnShowToggle.textContent = "Ver Preparación";
  
    }
  }

