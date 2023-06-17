$(document).ready(function(){
    $('.menu-icon-oculto').on('click',function(){
        $('nav').slideToggle();
    })
  })

  
// Obtener el botón de cierre del modal
var closeButton = document.querySelector('.close');

// Obtener las imágenes y los enlaces
var imageModal = document.querySelector('.img-modal');
var linkModal = document.querySelector('.objeto a[data-target]');

// Función para abrir el modal
function openModal(event) {
  event.preventDefault();
  var target = this.getAttribute('data-target');
  var modal = document.getElementById(target);
  modal.style.display = "block";
}

// Agregar evento de clic a la imagen y al enlace
imageModal.addEventListener('click', openModal);
linkModal.addEventListener('click', openModal);

// Agregar evento de clic al botón de cierre para cerrar el modal
closeButton.addEventListener('click', function () {
  var modal = this.closest('.modal');
  modal.style.display = "none";
});


function cambiarImagen(urlImagen) {
    var imagenPrincipal = document.getElementById('imagen-principal');
    imagenPrincipal.src = urlImagen;
  }
  /* funcion para que cambie de color cuando pasa el muose por encima */
  const enlaces = document.querySelectorAll('.a-nav-dos');

  enlaces.forEach((enlace) => {
    enlace.addEventListener('mouseover', () => {
      enlace.style.color = '#FFA726'; /* Cambia el color al pasar el mouse por encima */
    });
  
    enlace.addEventListener('mouseout', () => {
      enlace.style.color = '#000000'; /* Restablece el color al quitar el mouse */
    });
  });  