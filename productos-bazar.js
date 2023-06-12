$(document).ready(function(){
    $('.menu-icon-oculto').on('click',function(){
        $('nav').slideToggle();
    })
  })

  
// Obtener el botón de cierre del modal
var closeButton = document.querySelector('.close');

// Obtener todos los enlaces con atributo data-target
var links = document.querySelectorAll('a[data-target]');

// Recorrer los enlaces y agregar evento de clic
links.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    var target = this.getAttribute('data-target');
    var modal = document.getElementById(target);
    modal.style.display = "block";
  });
});

// Agregar evento de clic al botón de cierre para cerrar el modal
closeButton.addEventListener('click', function () {
  var modal = this.closest('.modal');
  modal.style.display = "none";
});


function cambiarImagen(urlImagen) {
    var imagenPrincipal = document.getElementById('imagen-principal');
    imagenPrincipal.src = urlImagen;
  }