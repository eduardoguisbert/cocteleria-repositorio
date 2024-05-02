function doBusqueda()
{
  
  let input = document.getElementById('inBusqueda');
  var valor = input.value;
  Busqueda(valor);
}
function Busqueda(palabra)
{
 
switch(palabra)
{
    case "daikiri":
        {
          
            FetchBusqueda(palabra);

           
        }
}

}
function FetchBusqueda(palabra) //Funcion que lee la página y la devuelve su contenido
{
  var dataTitulo;
  var dataImagen;
  var dataIngredientes;
  var dataPreparacion;
  var ArchivoTitulo = "../Resultados/" + palabra + "_titulo.txt";
  var ArchivoImagen = "../Resultados/" + palabra + "_imagen.txt";
  var ArchivoPreparacion = "../Resultados/" + palabra + "_preparacion.txt";
  var ArchivoIngredientes = "../Resultados/" + palabra + "_ingredientes.txt";

  dataTitulo = fetch(ArchivoTitulo).then(response => {
    return response.text()
  })

  .then(dataTitulo => {
    
    var elemento2 = document.getElementById('TituloBusqueda');
    elemento2.innerHTML=dataTitulo;
  });
 
  dataImagen = fetch(ArchivoImagen).then(response => {
    return response.text()
  })

  .then(dataImagen => {
    var imgc = document.getElementById('ResultadoImagen');
    var imgImagen="<img src='" + dataImagen + "' alt='" + palabra + "-img'>";
    imgc.innerHTML=imgImagen;
    imgc.style.backgroundImage="url('" +dataImagen + "')";
   // alert("url('" +dataImagen + "')");
  
  });
  dataIngredientes = fetch(ArchivoIngredientes).then(response => {
    return response.text()
  })
  
  .then(dataIngredientes => {
    
    var elemento2 = document.getElementById('Ingredientes');
    elemento2.innerHTML=dataIngredientes;
  });
  dataPreparacion = fetch(ArchivoPreparacion).then(response => {
    return response.text()
  })
  
  .then(dataPreparacion => {
    
    var elemento2 = document.getElementById('Preparacion');
    elemento2.innerHTML=dataPreparacion;
  });
}
