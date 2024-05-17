
/* const media = matchMedia('(min-width: 1024px)'); */



// Menu desplegable
/*
var btnMenu = document.querySelector("#btn-menu");
btnMenu.addEventListener("click", function showMenu() {
  nav.classList.toggle("activo");
})
*/
//Botones
var nav = document.querySelector("#nav");
var btnShow = document.querySelector("#btn-show");
var btnShowToggle = document.querySelector("#btn-show-toggle");
var btnShow2 = document.querySelector("#btn-show2");
var btnShowToggle2 = document.querySelector("#btn-show-toggle2");


//Contenedores
var recipePreparation = document.querySelector(".recipe-preparation");
var backDrop = document.querySelector("#backdrop");
var recipePreparation2 = document.querySelector(".recipe-preparation2");
var backDrop2 = document.querySelector("#backdrop2");


//EventListener
btnShow.addEventListener("click", show);
btnShowToggle.addEventListener("click", showToggle);
btnShow2.addEventListener("click", show2);
btnShowToggle2.addEventListener("click", showToggle2);

//Funciones

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
function show2() {
  recipePreparation2.style.display = "block";
  btnShow2.style.display = "none";
  backDrop2.classList.add('backdrop-filter-on');
  btnShowToggle2.textContent = "Ver Imagen";

}

function showToggle2() {

  backDrop2.classList.remove('backdrop-filter-off');
  backDrop2.classList.toggle('backdrop-filter-on');

  if (backDrop2.classList.contains('backdrop-filter-on')) {
    btnShowToggle2.textContent = "Ver Imagen";
  } else {
    backDrop2.classList.add('backdrop-filter-off')
    btnShowToggle2.textContent = "Ver Preparación";

  }
}

function showPopPup(pagina) {

  var elemento = document.getElementById('PopUp');

  elemento.style.visibility = 'visible';
  var id = 'Mensaje';

  FetchPage(pagina, id);

}
function closePopUp() {
  var elemento = document.getElementById('PopUp');

  elemento.style.visibility = 'hidden';

}
function FetchPage(pagina, destino) //Funcion que lee la página y la devuelve su contenido
{

  var data = fetch(pagina)
    .then(response => {

      return response.text()

    })
    .then(data => {

      var elemento2 = document.getElementById(destino);
      elemento2.innerHTML = data;
    });

}

function showMensajeBr() {

  return;
}

function BusquedaCoctel(idBusq, idNobusq, chkNoBusq) {
  var idBusqueda = document.getElementById(idBusq);
  var idEsconde = document.getElementById(idNobusq);
  var checkNoSel = document.getElementById(chkNoBusq);
  idEsconde.style.display = "none";
  idBusqueda.style.display = "block";
  checkNoSel.checked = false;

}

function getResult(resultado) {
  alert(resultado);
  switch (resultado) {
    case 'Bombay':
      FetchPage('../Resultados/r_Bombay.html', 'resultados');
      break;
    case 'Daikiri':
      FetchPage('../Resultados/r_daikiri.html', 'resultados');
      break;
  }
  var ocultar = document.getElementById('ResList');
  ocultar.style.visibility = 'hidden';
}
function MostrarResultado(idVisible, idInvisible) {

  var Tipo = document.getElementById("Resultados");
  Tipo.style.animation = "Entrada 0.9s 1 forwards";

  Tipo = document.getElementById(idVisible);
  Tipo.style.animation = "Entrada 0.9s 1 forwards";
  Tipo = document.getElementById(idInvisible);
  Tipo.style.animation = "Salida 0.9s 1 forwards";
}
function OcultarResultados() {
  var Tipo = document.getElementById("Resultados");
  //Tipo.style.visibility="hidden";
  Tipo.style.animation = "Salida 0.9s 1 forwards";
  Tipo = document.getElementById("Seleccion1");
  Tipo.style.animation = "Salida 0.9s 1 forwards";
  Tipo = document.getElementById("Seleccion2");
  Tipo.style.animation = "Salida 0.9s 1 forwards";

}
function BuscarIngred() {

  var Tipo = document.getElementById("ingredientePr");
  var Valor = Tipo.value;
  var Tipo2 = document.getElementById("TipoPrep");
  var Valor2 = Tipo2.value;

  switch (Valor) {
    case "brandy":
      switch (Valor2) {
        case "directos":
          MostrarResultado("Seleccion1", "Seleccion2")
          break;
        default:
          OcultarResultados();
      }

      break;

    case "ron":
      switch (Valor2) {
        case "licuad":
          MostrarResultado("Seleccion2", "Seleccion1")
          break;
        default:
          OcultarResultados();
      }
      break;

    default:
      OcultarResultados();
  }

}
