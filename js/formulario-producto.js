(function () {
  // var contador = 0;
  var letras = 30;

  var cargarPagina = function () {
    // Envío de Tweet
    $("#nombre-producto").keyup(cuentaNombre);
    $("#descripcion-producto").keyup(cuentaDescripcion);
  };

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
