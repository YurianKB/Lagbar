(function () {
  var letras = 30;

  var cargarPagina = function () {
    $("#nombreProducto").keyup(cuentaNombre);
    $("#descripcionProducto").keyup(cuentaDescripcion);
    // $("#precioInicial").click(agregarImagen);
    $(".subastar").click(peticionApi);
  };

  var cuentaNombre = function (){
    var letras = $("#nombreProducto").val().length;

    if(letras >=30){
      $("#nombreProducto").attr("disabled", true);
    }

    if(letras >= 20){
      $("#contador").css("color", "red");
    }

    $("#contador").text(letras);
  };

  var cuentaDescripcion = function (){
    var letras = $("#descripcionProducto").val().length;

    if(letras >=1000){
      $("#descripcionProducto").attr("disabled", true);
    }
  };

//crea dinamicamente la imagen del signo de pesos
  // function agregarImagen(){
  //   var pesitos = $("#aqui").prepend("<img src='../assets/img/dolar.svg' width='10'/>");
  //
  // }

//API

var peticionApi = function () {

  $.ajax({
    type: 'POST',
    url: 'https://laboratoria-hack.herokuapp.com/api/user/:userId/auction',
    contentType: 'application/json',
    data:JSON.stringify({
      "titulo": nombreProducto.value,
      "descripcion": descripcionProducto.value,
      "precioBase": precioInicial.value,
      "duracion": duracionSubasta.value,
      "tags": tags.value
    }),
    dataType: 'json'
  })
  .then(function (respuesta) {
    console.log(respuesta.data.descripcion);
    // return respuesta.json();
  }).fail(function (error) {
    console.log(error);
  })
}

  // Carga la página
  $(document).ready(cargarPagina);
})();




function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 6
  });
  var infoWindow = new google.maps.InfoWindow({map: map});

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
    }
}
