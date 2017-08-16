//******VARIABLES*******
var cont = 0;
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
function peticionApi() {
	$.post('http://ec2-34-200-214-148.compute-1.amazonaws.com:4000/api/auth/signup',{
		"firsName": nombreUsuario.value,
		"lastName": apellido.value,
		"email": correo.value,
		"password": password.value
	}).then(function (respuesta) {
		console.log(respuesta);
		// return respuesta.json();
	}).fail(function (error) {
		console.log(error);
	})
}

// localStorage.setItem("code", codigoGenerado);
function validarUsuario() {
	// console.log(usuario.value);
	// console.log(passwordLogIn.value);
	localStorage.setItem('usuario', usuario.value);
	localStorage.setItem('passLogin', passwordLogIn.value);
	if (localStorage.getItem('usuario') == localStorage.getItem('nombreUs') && localStorage.getItem('passLogin') == localStorage.getItem('pass')) {
		swal("¡Listo!", "Has iniciado sesión", "success")
	}else{
		swal("Lo sentimos", "Usuaio y/o contraseña erroneos, intentalo nuevamente", "error");
	}
}

function enviarRegistroUsuario() {
	// console.log(nombreUsuario.value);
	// console.log(apellido.value);
	// console.log(correo.value);
	// console.log(password.value);
	// peticionApi();
	localStorage.setItem('nombreUs', nombreUsuario.value);
	localStorage.setItem('apellido', apellido.value);
	localStorage.setItem('correo', correo.value);
	localStorage.setItem('pass', password.value);
	localStorage.setItem('id-Us', cont++);
	console.log('Usuario Registrado');
}

//***********EVENTOS*********
btnLogin.addEventListener('click', validarUsuario);
btnRegistro.addEventListener('click', enviarRegistroUsuario);







// Carga de modal
$(document).ready(function(){
   $('.modal').modal();
 });
