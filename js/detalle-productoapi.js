var precioinicio =0;


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
          '<a class="carousel-item" href="#one!"><img src="data:image/jpeg;base64,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"></a>'+
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
                            '<div class="collapsible-body fondo-blanco"><span>--detalle--</span></div>'+
                        '</li>'+
                   ' </ul>'+
                '</div>'+
            '</div>'+
    '</div>'+
     '<div class="row center-align fondo-blanco">'+
        '<h3>Precio Actual <span>__basepriced__</span></h3>'+
    '</div>'+
    '<div class="row center-align">'+
        '<div class="col s12">'+
            '<form>'+
               '<div class="file-field ">'+
                    '<div class="btn fondo-gris--oscuro" id="boton">'+
                        '<span>Ofertar</span>'+
                    '</div>'+
                    '<div class="file-path-wrapper">'+
                        '<input class="validate"  id="inputsubasta" type="text" >'+
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
    //console.log(detalle.title);
    plantillaFinal += plantillaproducto.replace("--titulo--",detalle.title)
    .replace("--baseprice--",detalle.basePrice)
    .replace("--detalle--",detalle.description)
    .replace("__basepriced__",detalle.basePrice)
    precioinicio=detalle.basePrice;
     //console.log(precioinicio);
     //return precioinicio;
 
  });
  var preciobase=precioinicio;
  console.log(preciobase);
  $("#producto").html(plantillaFinal);
   var valorinput=document.getElementById("inputsubasta");
   var botonsubasta=document.getElementById("boton");
   console.log(botonsubasta);
   valorinput.value=preciobase+5;
    function agregarsubasta(){
        preciobase=valorinput.value;
        valorinput.value=Number(valorinput.value)+5;
    }
   botonsubasta.addEventListener("click",agregarsubasta);
    console.log(valorinput);
    valorinput.value=preciobase+5;
    $(.carousel).carousel();
   
 

};  peticionApi();

