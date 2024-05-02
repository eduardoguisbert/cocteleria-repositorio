
/* const media = matchMedia('(min-width: 1024px)'); */

//Botones
var btnShow = document.querySelector("#btn-show");
var btnShowToggle = document.querySelector("#btn-show-toggle");

//Contenedores
var recipePreparation = document.querySelector(".recipe-preparation");
var backDrop = document.querySelector("#backdrop");

//EventListener
btnShow.addEventListener("click", show);
btnShowToggle.addEventListener("click", showToggle);


//Funciones

function show(){
  recipePreparation.style.display = "block";
  btnShow.style.display = "none";
  backDrop.classList.add('backdrop-filter-on');
  btnShowToggle.textContent = "Ver Imagen";

}

function showToggle(){

    backDrop.classList.remove('backdrop-filter-off');
    backDrop.classList.toggle('backdrop-filter-on');

   if(backDrop.classList.contains('backdrop-filter-on')){
     btnShowToggle.textContent = "Ver Imagen";
   } else {
    backDrop.classList.add('backdrop-filter-off')
    btnShowToggle.textContent = "Ver Preparación";
    
   }
}

function showPopPup(pagina)
{

 var elemento = document.getElementById('PopUp');
 
 elemento.style.visibility='visible';
FetchPage(pagina);
 
}
function closePopUp()
{
 var elemento = document.getElementById('PopUp');
 
 elemento.style.visibility='hidden';

}
function FetchPage(pagina) //Funcion que lee la página y la devuelve su contenido
{
  
  var data = fetch(pagina)
  .then(response => {
   
    return response.text()
    
  })
  .then(data => {
    var elemento2 = document.getElementById('Mensaje');
    elemento2.innerHTML=data;
  });
 
}

function showMensajeBr()
{
 alert("Te voy a llenar la casilla de spam, quita ese tilde de NewsLetter ya!");
 return;
}
function revisarPol()
{
  var chkpol = document.getElementById("aceptPol");
  if(chkpol.checked==false)
  {
  alert("Debe aceptar las políticas de privacidad para registrarse");
  return;
  }
  ch=document.getElementById("cknews");
if(ch.checked==true)
{
  //este mensaje es solo para demostrar el filtro
  showMensajeBr();
  return;
}
  location.href="/registro/doReg.html";

}

// media.addEventListener('change', ({media, matches}) => {

//   if(matches === true) {

//   }else {

//   }

// })








