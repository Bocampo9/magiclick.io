$(document).ready(function() {
  initSlickSlider();
  initMap();
  initMenuToggle();
  initLinkHover();
});

function initSlickSlider() {
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
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
}

function initMap() {
  const myLatLng = {lat: -34.66643065254622, lng: -58.52743963000827};

  const mapOptions = {
    zoom: 15,
    center: myLatLng
  };

  const map = new google.maps.Map(document.getElementById('map'), mapOptions);

  const marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Mi Local'
  });
}

function initLinkHover() {
  const enlaces = document.querySelectorAll('.a-nav-dos');

  enlaces.forEach((enlace) => {
    enlace.addEventListener('mouseover', () => {
      enlace.style.color = '#FFA726';
    });

    enlace.addEventListener('mouseout', () => {
      enlace.style.color = '#000000';
    });
  });
}

function initMenuToggle() {
  $('.menu-icon-oculto').on('click', function() {
    $('nav').slideToggle();
  });
}