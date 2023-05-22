let ok =false;
let ok1 =false;
let ok2 =false;
let ok3 =false;
let ok4 =false;
let ok5 =false;
let ok6 =false;


function validarNombre () {
 const nombre = document.getElementById("nombre");
  if (nombre.value == "" || nombre.value.length< 2   ){ 
       alert('Debe Ingresar su Nombre');
       ok=false;
   }
  else{ 
    ok = true;
  }

}

function validarApellido () {
  
  const apellido = document.getElementById("apellido");
  if ( apellido.value == "" || apellido.value.length < 2  ){ 
      alert('Debe Ingresar su Apellido');
      ok1=false;
  } else{ 
    ok1= true;
  }
}

function validarDNI () { 
   const dni = document.getElementById("dni");
   if(dni.value.length < 5) { 
      alert('Debe ingresar su DNI');
      ok2=false;
    } else {
        ok2= true;
   }
}

function validarCorreo ()  { 
  const correo = document.getElementById("correo");
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;// Validar el formato del correo electrónico

   ok3 = regex.test((correo.value));
  
}


function validarTelefono () { 
  const telefono = document.getElementById("telefono");
  if( telefono.value == ""  ||   telefono.value < 2 ) { 
    alert('Debe ingresar su Telefono');
    ok4=false;
  } else {
    ok4= true;
  }
}


function validarEntradas () { 
   const entradas = document.getElementById("entradas");
  if(entradas.value.length == ""  || entradas.value == 0) { 
     alert('Debe ingresar su Entradas');
     ok5=false;
  } else {
    ok5= true;
  }
}

function validarMetodoDePago() { 
  const pago = document.getElementById("medio");
  if (pago.value === "ninguno") {
    alert('Debe seleccionar uno de los medios de pago');
    ok6=false;
  } else {
    ok6 = true;
  }
}

function verificarTodosOk() {
  return ok && ok1 && ok2 && ok3 && ok4 && ok5 && ok6;
}

const form = document.getElementById("conteiner1");
function validarFormulario ()  {

      validarNombre(ok);
      validarApellido(ok1);
      validarDNI(ok2);
      validarTelefono(ok3);
      validarCorreo(ok4);
      validarMetodoDePago(ok5);
      validarEntradas(ok6);


        if( verificarTodosOk() ) { 
          alert(' Se ha enviado el formulario con exito');
          form.reset();
        } else{ 
          alert('Chequear los campos');
        }

}