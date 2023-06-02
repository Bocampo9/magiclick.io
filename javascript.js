$(document).ready(function(){
  $('.carousel-dos').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Cambia de imagen cada 3 segundos (ajusta el valor según tus preferencias)
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});
$(document).ready(function(){

  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
  });
});

/* funcion para que cuando elija una seccion se subraye */

const elementos = document.querySelectorAll('#lista-uno');

elementos.forEach((elemento) => {
  elemento.addEventListener('click', () => {
    // Elimina la clase "selected" de todos los elementos
    elementos.forEach((e) => {
      e.classList.remove('selected');
    });

    // Agrega la clase "selected" al elemento seleccionado
    elemento.classList.add('selected');
  });
});


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
  