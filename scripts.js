var numeroAnterior = 0;

function sumar() {
    var campoTXT = document.getElementById("monto-id");
    var nuevoMonto = parseFloat(campoTXT.value);

    var resultado = numeroAnterior + nuevoMonto;

    document.getElementById("cantidad-total").innerText = resultado;
    numeroAnterior = resultado;
}

function crearNuevoRegistro() {
    var campoTXT = document.getElementById("monto-id").value;
    var articuloTXT = document.getElementById("articulo-id").value;

    var nuevoRegistro = document.createElement("div");
    nuevoRegistro.textContent = articuloTXT + "------------" + "Monto: " + campoTXT;

    var contenedor = document.getElementById("ticket-total");
    contenedor.insertBefore(nuevoRegistro, contenedor.firstChild);

    document.getElementById("monto-id").value = "";
    document.getElementById("articulo-id").value = "";
}