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
function registrarUsuario() {
	$.ajax({
			type: 'POST',
			url: 'https://laboratoria-hack.herokuapp.com/api/auth/signup',
			contentType: 'application/json',
			data:JSON.stringify({
				"firsName": nombreUsuario.value,
				"lastName": apellido.value,
				"email": correo.value,
				"password": password.value
			}),
			dataType: 'json'
		}).then(function (respuesta) {
		console.log(respuesta);
		swal("¡Listo!", "Usuario registrado", "success");
	}).fail(function (error) {
		console.log(error);
		swal("Lo sentimos", "Datos incorrectos y/o incompletos, inténtalo nuevamente", "error");
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
		swal("Lo sentimos", "Usuario y/o contraseña erroneos, intentalo nuevamente", "error");
	}
}

function loginUsuario() {
	// console.log(nombreUsuario.value);
	// console.log(apellido.value);
	// console.log(correo.value);
	// console.log(password.value);
	// localStorage.setItem('nombreUs', nombreUsuario.value);
	// localStorage.setItem('apellido', apellido.value);
	// localStorage.setItem('correo', correo.value);
	// localStorage.setItem('pass', password.value);
	// localStorage.setItem('id-Us', cont++);
	// console.log('Usuario Registrado');
	$.ajax({
			type: 'POST',
			url: 'https://laboratoria-hack.herokuapp.com/api/auth/login',
			contentType: 'application/json',
			data:JSON.stringify({
				"email": usuario.value,
				"password": passwordLogIn.value
			}),
			dataType: 'json'
		}).then(function (respuesta) {
		console.log(respuesta);
		swal("¡Listo!", "Has iniciado sesión", "success");
	}).fail(function (error) {
		console.log(error);
		swal("Lo sentimos", "Usuario y/o contraseña erróneos, inténtalo nuevamente", "error");
	})
}

//***********EVENTOS*********
btnLogin.addEventListener('click', loginUsuario);
btnRegistro.addEventListener('click', registrarUsuario);

// Carga de modal
$(document).ready(function(){
   $('.modal').modal();
 });
