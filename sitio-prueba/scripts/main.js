let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'imágenes/mi-imagen.jpg') {
      miImage.setAttribute('src','imágenes/mi-imagen2.jpg');
    } else {
      miImage.setAttribute('src', 'imágenes/mi-imagen2.jpg');
    }
}
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1'); 
function estableceNombreUsuario() {
  let miNombre = prompt('Por favor, introduzca su nombre.');
  if(!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'Bienvenido, ' + miNombre;
  }
}
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Bienvenido, ' + nombreAlmacenado;
} 
miBoton.onclick = function() {
    estableceNombreUsuario();
} 