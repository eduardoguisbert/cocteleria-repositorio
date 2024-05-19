// Datos en Array de Objetos

var cocteles = [
    {
        nombre: "Bombay",
        ingredientes: ["1/4 de vermut blanco seco", "1/4 de vermut rojo", "1/4 de vermut rojo", "2 golpes de Curaçao (naranja a ser posible)"],
        preparacion: "Se echan en vaso mezclador con unos cubitos de hielo. Remover y servir en vaso bajo y ancho(old fashioned), agregando uno odos cubitos de hielo",
        imagen:"../img/bombay.jpg"
    },

    {
        nombre: "Daikiri",
        ingredientes: ["1 puñado de frutillas frescas (6 o 7 u)", "Una cucharada panzona de azúcar", "2 cdas de jugo del lima o limón", "1/2 taza de ron blanco o dorado", "Hielo"],
        preparacion: "Colocar todos los ingredientes en el vaso de la licuadora. Licuar hasta que quede una mezcla cremosa. Si se desea, decorar el borde del vaso con azúcar. Servir",
        imagen:"../img/daikiri.jpg"
    },

]

//Botones
var btnSearchIng = document.querySelector("#btn-search-ing");
var btnNewSearch = document.querySelector("#new-search");

// Contenedores
var searchForNameForm = document.querySelector("#search-for-name");
var recipeContainerMajor = document.querySelector(".recipe-container-major");
var coctelName = document.querySelector("#coctel-name");
var recipeTitle = document.querySelector("#recipe-title");
var listRecipeIngredients = document.querySelector("#list-recipe-ingredients");
var recipePreparation = document.querySelector('.recipe-preparation');
var recipePrep = document.querySelector("#recipe-prep");
var recipeTitle = document.querySelector("#recipe-title");
var recipeImage = document.querySelector("#recipe-img");
var listRecipeIngredients = document.querySelector("#list-recipe-ingredients");
var recipePrep = document.querySelector("#recipe-prep");
var formGroupCheck = document.querySelector(".form-group-check");
var informativeMessage = document.querySelector(".mje-informativo");
var recipeContainerMajor = document.querySelector(".recipe-container-major");
var listGroupContainerMajor = document.querySelector(".list-group-container-major");
var notFoundContainer = document.querySelector(".not-found-container");
var results = document.querySelector(".results");
var validationFeedback = document.querySelector(".validation-feedback");

//Event Listener

formGroupCheck.addEventListener("click", showMessage);
btnSearchIng.addEventListener("click", process);


//Funciones
function process(e) {
    e.preventDefault();
    coctelValue = coctelName.value;

    if (coctelValue === "") {
        validationFeedback.style.display = "block";
        recipeContainerMajor.style.display = "none";
        notFoundContainer.style.display = "none";
    } else {
        validationFeedback.style.display = "none";
        searchForName(coctelValue);
    }
}

function searchForName(coctelValue) {
    recipeContainerMajor.style.display = "none";
    cocteles.every(coctel => {
        if (coctel.nombre.toLowerCase() == coctelValue.toLowerCase()) {
            notFoundContainer.style.display = "none";
            embedElements(coctel.nombre, coctel.ingredientes, coctel.preparacion, coctel.imagen);
            return false;
        } else {
            notFoundContainer.style.display = "block";
            recipeContainerMajor.style.display = "none";
            return true;
        }
    });
}

function embedElements(coctelName, coctelIngredients, coctelPreparation, coctelImage) {
    recipeTitle.textContent = coctelName;
    recipePrep.textContent = coctelPreparation;
    recipePreparation.style.backgroundImage =`url(${coctelImage})`;
    recipeImage.setAttribute("src",coctelImage);
    listIngredientes(coctelIngredients);
    recipeContainerMajor.style.display = "block";
    
}



function listIngredientes(coctelIngredientes) {
    listRecipeIngredients.innerHTML = "";
    for (let i = 0; i < coctelIngredientes.length; i++) {
        var li = document.createElement("li");
        var liContent = document.createTextNode(coctelIngredientes[i]);
        li.appendChild(liContent);
        listRecipeIngredients.appendChild(li);
    }
}

function showMessage() {
    informativeMessage.classList.remove('d-none');
}


function BusquedaCoctel(idBusq, idNobusq, chkNoBusq) {
    var idBusqueda = document.getElementById(idBusq);
    var idEsconde = document.getElementById(idNobusq);
    var checkNoSel = document.getElementById(chkNoBusq);
    idEsconde.style.display = "none";
    idBusqueda.style.display = "block";
    checkNoSel.checked = false;

    if (idBusq == 'search-for-name') {
        listGroupContainerMajor.style.display = "none";
    } else {
        listGroupContainerMajor.style.display = "block";
    }

}
