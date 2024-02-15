function iniciarSesion() {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    document.getElementById("mensaje").innerText = "Inicio de sesión exitoso: " + usuario;
}

function registrarse() {
    var usuario = document.getElementById("usuario").value;

    document.getElementById("mensaje").innerText = "Registro exitoso: " + usuario;
}