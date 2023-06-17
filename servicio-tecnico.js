$(document).ready(function() {
    initMap();
    initMenuToggle();
  });
  const locations = [
    { lat: -34.601, lng: -58.371, icon: 'fa-solid fa-wrench', color: '#800080' },
    { lat: -34.645, lng: -58.457, icon: 'fa-solid fa-wrench' },
    { lat: -34.633, lng: -58.402, icon: 'fa-solid fa-wrench' }
  ];

  function initMap() {
    const mapOptions = {
      zoom: 15,
      center: { lat: -34.632, lng: -58.408, icon: 'fa-solid fa-wrench', color: '#800080' },
      scrollwheel: true
    };
  
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
    locations.forEach(location => {
      const marker = new google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: map,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: location.color,
          fillOpacity: 1,
          strokeWeight: 2,
          strokeColor: '#fff'
        },
        label: {
          text: '\wrench', // Código del icono de Font Awesome (llave inglesa)
          fontFamily: 'Font Awesome 5 Free',
          fontSize: '16px',
          fontWeight: '900',
          color: '#fff'
        }
      });
    });
}
  
  function initMenuToggle() {
    $('.menu-icon-oculto').on('click', function() {
      $('nav').slideToggle();
    });
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