

var cocteles = [
    {
        nombre: "Bombay",
        ingredientes: ["1/4 de vermut blanco seco", "1/4 de vermut rojo", "1/4 de vermut rojo", "2 golpes de Curaçao (naranja a ser posible)"],
        preparacion: "Se echan en vaso mezclador con unos cubitos de hielo. Remover y servir en vaso bajo y ancho(old fashioned), agregando uno odos cubitos de hielo"
    },

    {
        nombre: "Daikiri",
        ingredientes: ["ing1", "ing2"],
        preparacion: "Lorem Daikiri ipsum"
    },
]


var searchForNameForm = document.querySelector("#search-for-name");
var btnSearchIng = document.querySelector("#btn-search-ing");
var coctelName = document.querySelector("#coctel-name");

var recipeTitle = document.querySelector("#recipe-title");
var listRecipeIngredients = document.querySelector("#list-recipe-ingredients");
var recipePrep = document.querySelector("#recipe-prep");
var banner = document.querySelector(".banner");
var bannerHeight= banner.style.height;

console.log(banner.style.height);

btnSearchIng.addEventListener("click", function procesar(e){
    e.preventDefault();
    var coctelValue = coctelName.value;
    searchForName(coctelValue);
})

function searchForName(coctelValue){
    cocteles.forEach(coctel=> {
        if(coctelValue == coctel.nombre){
            embedElements(coctel.nombre, coctel.ingredientes, coctel.preparacion);
        }
        window.scrollBy(0, 7);
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





// for(var i = 0 ; i < coctel.ingredientes.length; i++){
//     console.log(coctel.ingredientes[i]);
// }

