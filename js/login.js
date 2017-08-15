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
var btnLogin = document.getElementById('btn-login');
var btnRegistro = document.getElementById('btn-registrarse');


//*******FUNCIONES*********

function validarUsuario() {
	console.log(usuario.value);
	console.log(passwordLogIn.value);
}

function enviarRegistroUsuario() {
	console.log(nombreUsuario.value);
	console.log(apellido.value);
	console.log(correo.value);
	console.log(password.value);
}

//***********EVENTOS*********
btnLogin.addEventListener('click', validarUsuario);
btnRegistro.addEventListener('click', enviarRegistroUsuario);







// Carga de modal
$(document).ready(function(){
   $('.modal').modal();
 });
