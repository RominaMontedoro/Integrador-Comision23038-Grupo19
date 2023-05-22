document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('#conteiner1');
    const obtenerDatosBtn = document.querySelector('#obtenerDatos');
  
    obtenerDatosBtn.addEventListener('click', () => {
      obtenerDatosRandom();
    });
  
    function obtenerDatosRandom() {
      fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
          reemplazarValoresFormulario(data);
        })
        .catch(error => {
          console.log('Ocurrió un error:', error);
        });
    }
  
    function reemplazarValoresFormulario(data) {
      const usuario = data.results[0];
      const nombre = usuario.name.first;
      const apellido = usuario.name.last;
      const correo = usuario.email;
      const telefono = usuario.phone;
      const dni = usuario.id.value;
  
      formulario.nombre.value = nombre;
      formulario.apellido.value = apellido;
      formulario.correo.value = correo;
      formulario.telefono.value = telefono;
      formulario.dni.value = dni;
    }
  });   