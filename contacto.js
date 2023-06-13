$(document).ready(function() {
    initMap();
    initMenuToggle();
  });

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
  
  function initMenuToggle() {
    $('.menu-icon-oculto').on('click', function() {
      $('nav').slideToggle();
    });
  }