(function () {
  // var contador = 0;
  var letras = 30;

  var cargarPagina = function () {
    // Envío de Tweet
    // $("crearSubasta").submit(agregarProducto);
    // $("#nombre-producto").keypress(validarContenido);
    $("#nombre-producto").keyup(cuentaNombre);
    $("#descripcion-producto").keyup(cuentaDescripcion);
  };


  // var validarContenido = function () {
  //   var addButton = $("#mandar");
  //   // .trim() solo borra los espacios de sobra a los costados (izquierda y derecha)
  //   if($(this).val().trim().length > 0) {
  //     $addButton.removeAttr("disabled");
  //   } else {
  //     $addButton.attr("disabled", true);
  //   }
  // };

  var cuentaNombre = function (){
    var letras = $("#nombre-producto").val().length;

    if(letras >=30){
      $("#nombre-producto").attr("disabled", true);
    }

    if(letras >= 20){
      $("#contador").css("color", "red");
    }

    $("#contador").text(letras);
  };

  var cuentaDescripcion = function (){
    var letras = $("#descripcion-producto").val().length;

    if(letras >=1000){
      $("#descripcion-producto").attr("disabled", true);
    }
  };





  // Cuando carga la página
  $(document).ready(cargarPagina);
})();

// var nombreProducto = document.getElementById("nombre-producto");
//
// nombreProducto.addEventListener("keypress", cuentaNombre);
//
// function cuentaNombre(){
//   var  = nombreProducto.value;
// }
//
//
// // Se obtiene ubicacion ingresada del usuario
// var crearSubasta = document.getElementById("crearSubasta");
//
// crearSubasta.addEventListener("click", ubicacion);
//
// function ubicacion (){
//   var ubicacion = document.getElementById("ubicacion");
//
//   var direccionIngresada = ubicacion.value
//
//   if (typeof(Storage) !== "undefined") {
//     // Store
//     localStorage.setItem("lastname", direccionIngresada);
//     // Retrieve
//     var lala = localStorage.getItem("lastname");
//   }
// }
//
function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
//
// url = "https://maps.googleapis.com/maps/api/geocode/JSON?adress"
