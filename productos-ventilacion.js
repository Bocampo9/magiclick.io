$(document).ready(function(){
    $('.menu-icon-oculto').on('click',function(){
        $('nav').slideToggle();
    })
  })

  
// Obtener el botón de cierre del modal
var closeButtons = document.querySelectorAll('.close');

// Obtener las imágenes y los enlaces
var imageModals = document.querySelectorAll('.img-modal');
var linkModals = document.querySelectorAll('.objeto a[data-target]');

// Función para abrir el modal con información específica
function openModal(event, objeto) {
  event.preventDefault();
  var target = objeto.getAttribute('data-target');
  var modal = document.getElementById(target);
  modal.style.display = "block";
}

// Agregar evento de clic a cada imagen y enlace
imageModals.forEach(function(imageModal) {
  imageModal.addEventListener('click', function(event) {
    openModal(event, imageModal);
  });
});

linkModals.forEach(function(linkModal) {
  linkModal.addEventListener('click', function(event) {
    openModal(event, linkModal);
  });
});

// Agregar evento de clic a cada botón de cierre para cerrar el modal correspondiente
closeButtons.forEach(function(closeButton) {
  closeButton.addEventListener('click', function() {
    var modal = this.closest('.modal');
    modal.style.display = "none";
  });
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

  /* funcion para que los iconos se muevas constantemente */

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}