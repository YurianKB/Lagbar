// var nombreProducto = document.getElementById("nombre-producto");
//
// nombreProducto.addEventListener("keypress", cuentaNombre);

// function cuentaNombre(){
//   var nombreProducto
// }


// Se obtiene ubicacion ingresada del usuario
var crearSubasta = document.getElementById("crearSubasta");

crearSubasta.addEventListener("click", ubicacion);

function ubicacion (){
  var ubicacion = document.getElementById("ubicacion");

  var direccionIngresada = ubicacion.value

  if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("lastname", direccionIngresada);
    // Retrieve
    var lala = localStorage.getItem("lastname");
  }
}
