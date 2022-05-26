let nombre = document.getElementById('nombre').value;
let empresa = document.getElementById('empresa').value;
let telefono = document.getElementById('telefono').value;
let email = document.getElementById('email').value;
let ubicacion = document.getElementById('ubicacion').value;
let fecha = document.getElementById('fecha').value;
let url = document.getElementById('url').value;
let linkedin = document.getElementById('linkedin').value;
let btnform = document.getElementById('submitBtn');

function validacion () {


  if (nombre == "") {
    alert("Por favor, escribe tu nombre");
    usuario.focus();
    return false;
  }


  if (empresa == "") {
    alert("Por favor, escribe tu empresa");
    usuario.focus();
    return false;
  }

  if (telefono == "") {
    alert("Por favor, escribe tu telefono");
    usuario.focus();
    return false;
  }
    
  if (email == "") {
    alert("Por favor, escribe tu correo electrónico");
    email.focus();
    return false;
  }

  if (ubicacion == "") {
    alert("Por favor, escribe tu correo ubicacion");
    ubicacion.focus();
    return false;
  }

  if (fecha == "") {
    alert("Por favor, ingresa la fecha");
    fecha.focus();
    return false;
  }

  if (url == "") {
    alert("Por favor, escribe tu url");
    url.focus();
    return false;
  }

  if (linkedin == "") {
    alert("Por favor, escribe tu linkedin");
    linkedin.focus();
    return false;
  }
  
  
  return true;
}


btnform.onclick(validacion);
