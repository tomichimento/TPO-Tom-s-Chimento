// Formulario

var datos = new Array();
var pronombre;
function enviarFormulario() {
    var nombre = document.getElementById("contacto_nombre").value.trim();
    var mail = document.getElementById("contacto_email").value;
    var cumpleanos = document.getElementById("contacto_cumple").value;
    var telefono = document.getElementById("contacto_telefono").value;
    var consulta = document.getElementById("contacto_consulta").value.trim();
    var suscribirse = document.getElementById("contacto_checkbox").checked;

    var genero = document.querySelector('input[name="genero"]:checked').value;
    var cuerpoConsulta = "";

    // switch genero
    switch (genero) {
        case "el":
            cuerpoConsulta = `Señor ${nombre}, su consulta se envió con éxito!`;
            break;
        case "ella":
            cuerpoConsulta = `Señora ${nombre}, su consulta se envió con éxito!`;
            break;
        default:
            cuerpoConsulta = `${nombre}, su consulta se envió con éxito!`;
            break;
    }
    if (suscribirse) {
        cuerpoConsulta += "\nTe enviaremos las últimas novedades de X!"
    } else {
        cuerpoConsulta += "\nTe invitamos a suscribirte para recibir las últimas novedades de X!"
    }
    datos.push(nombre, mail, cumpleanos, telefono, consulta, pronombre);
    console.log(datos);

    // Mostrar el modal
    setTimeout(() => {
        var myModal = new bootstrap.Modal(document.getElementById('myModal'));
        document.getElementById("cuerpo-consulta").innerText = cuerpoConsulta;
        myModal.show();
    }, 200);
}