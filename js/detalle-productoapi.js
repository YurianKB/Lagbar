function peticionApi() {
    $.ajax({
            type: 'GET',
            url: 'https://laboratoria-hack.herokuapp.com/api/auction',
            contentType: 'application/json',
            dataType: 'json'
        }).then(function (respuesta) {
        var detalles= respuesta;
        console.log(detalles)
        mostrardetalles(detalles);
        console.log(respuesta[0].title);
        console.log(respuesta[0].description);


        // return respuesta.json();
    }).fail(function (error) {
        console.log(error);
   
    })
};

  var plantillaproducto=
 '<div class="producto">'+
    '<div class="container row fondo-blanco">'+
      '<h1 class="left-align texto-azul"><b>DETALLES</b></h1>'+
        '<h3 class="texto-negro"><b>"--titulo--"</b></h3>'+
        '<h4 class="texto-azul">Precio Actual <span>--baseprice--</span></h4>'+
        '<h4 class="texto-gris--oscuro">Precio Inicio <span>$100</span></h4>'+


            '<div class="carousel">'+
          '<a class="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/2"></a>'+
                        '<a class="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"></a>'+
                        '<a class="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"></a>'+
                        '<a class="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"></a>'+
                        '<a class="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"></a>'+
            '</div>'+
            '<div class="row container">'+
                '<div class="col s12">'+
                    '<ul class="collapsible" data-collapsible="accordion">'+
                        '<li class="">'+
                            '<div class="collapsible-header fondo-azul texto-blanco"><b>D E T A L L E S :</b></div>'+
                            '<div class="collapsible-body fondo-blanco"><span>DESCRIPCIÓNCámara DSLR de la marca Canon, <br>Cuenta con una resolución de 18 MP, <br>Sensor CMOS y un lente 18 - 55 mm. <br>Toma fotos con la calidad que necesitas, puedes tomar fotos aún con poca luz. Tiene conexión inalámbrica por medio de Wi Fi y NFC, con la posibilidad de compartir tus fotos a tus redes sociales. <br>Disponible en color negro.</span></div>'+
                        '</li>'+
                   ' </ul>'+
                '</div>'+
            '</div>'+
    '</div>'+

     '<div class="row center-align fondo-blanco">'+
        '<h3>Precio Actual <span>$100</span></h3>'+
    '</div>'+

    '<div class="row center-align">'+
        '<div class="col s12">'+
            '<form>'+
               '<div class="file-field ">'+
                    '<div class="btn fondo-gris--oscuro">'+
                        '<span>Ofertar</span>'+
                    '</div>'+
                    '<div class="file-path-wrapper">'+
                        '<input class="validate" type="text">'+
                    '</div>'+
                '</div>'+
            '</form>'+
        '</div>'+
    '</div>'+
      '<div class="row center-align">'+
        '<div class="col s12">'+
            '<h3>Ubicación</h3>'+
            '<div id="map"></div>'+
        '</div>'+ 
     '</div>'+
'</div>';

var mostrardetalles =function(detalles) {
  var plantillaFinal="";
  detalles.forEach(function (detalle) {
    plantillaFinal += plantillaproducto.replace("--titulo--",detalle.title)
    .replace("--baseprice--" ,detalle.basePrice)
    //.replace("--nombre--",personaje.name)
    //.replace("__urlpersonaje__",personaje.url)
  });
  $(".producto").html(plantillaFinal);

};  peticionApi();