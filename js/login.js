//******VARIABLES*******
//Datos LogIn
var usuario = document.getElementById('usuario');
var passwordLogIn = document.getElementById('password-login');
// Datos de registro Usuario
var nombreUsuario = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var correo = document.getElementById('correo');
var password = document.getElementById('password-registro');

//***BOTONES******
var btn-login = document.getElementById('btn-login');
var btn-registro = document.getElementById('btn-registrarse');


//*******FUNCIONES*********
function enviarRegistroUsuario() {
	console.log('DATOS USUARIO');
}
//***********EVENTOS*********
btn-registrarse.addEventListener('click', enviarRegistroUsuario);







// Carga de modal
$(document).ready(function(){
   $('.modal').modal();
 });
