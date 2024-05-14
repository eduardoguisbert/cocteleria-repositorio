// Datos en Array de Objetos

var cocteles = [
    {
        nombre: "Bombay",
        ingredientes: ["1/4 de vermut blanco seco", "1/4 de vermut rojo", "1/4 de vermut rojo", "2 golpes de Curaçao (naranja a ser posible)"],
        preparacion: "Se echan en vaso mezclador con unos cubitos de hielo. Remover y servir en vaso bajo y ancho(old fashioned), agregando uno odos cubitos de hielo"
    },

    {
        nombre: "Daikiri",
        ingredientes: ["1 puñado de frutillas frescas (6 o 7 u)", "Una cucharada panzona de azúcar", "2 cdas de jugo del lima o limón", "1/2 taza de ron blanco o dorado", "Hielo"],
        preparacion: "Colocar todos los ingredientes en el vaso de la licuadora. Licuar hasta que quede una mezcla cremosa. Si se desea, decorar el borde del vaso con azúcar. Servir"
    },
]

//Botones
var btnSearchIng = document.querySelector("#btn-search-ing");

// Contenedores
var searchForNameForm = document.querySelector("#search-for-name");
var recipeContainerMajor = document.querySelector(".recipe-container-major");
var coctelName = document.querySelector("#coctel-name");
var recipeTitle = document.querySelector("#recipe-title");
var listRecipeIngredients = document.querySelector("#list-recipe-ingredients");
var recipePrep = document.querySelector("#recipe-prep");
var recipeTitle = document.querySelector("#recipe-title");
var listRecipeIngredients = document.querySelector("#list-recipe-ingredients");
var recipePrep = document.querySelector("#recipe-prep");
var formGroupCheck = document.querySelector(".form-group-check");
var informativeMessage = document.querySelector(".mje-informativo");

//Event Listener

formGroupCheck.addEventListener("click", showMessage);
btnSearchIng.addEventListener("click", procesar);

//Funciones
function procesar(e){
    e.preventDefault();
    var coctelValue = coctelName.value;
    searchForName(coctelValue);
    recipeContainerMajor.style.display = "block";
}

function searchForName(coctelValue){
    cocteles.forEach(coctel=> {
        if(coctelValue.toLowerCase() == coctel.nombre.toLowerCase()){
            embedElements(coctel.nombre, coctel.ingredientes, coctel.preparacion);
        }
    });
}

function embedElements(coctelName, coctelIngredients,coctelPreparation){
    recipeTitle.textContent= coctelName;
    recipePrep.textContent= coctelPreparation;
    listIngredientes(coctelIngredients);
}

function listIngredientes(coctelIngredientes){
    listRecipeIngredients.innerHTML = "";
    for( let i=0; i<coctelIngredientes.length; i++){
        var li = document.createElement("li");
        var liContent = document.createTextNode(coctelIngredientes[i]);
        li.appendChild(liContent);
        listRecipeIngredients.appendChild(li);
    }
}

function showMessage (){
    informativeMessage.classList.remove('d-none');
}
