// Puedes agregar aquí cualquier funcionalidad JavaScript adicional si es necesario
console.log('Portafolio cargado');

// Functions

//FadeIn/FadeOut and active content
$(document).ready(function() {
 
    function hideAllSections() {
      $('.content').fadeOut(); 
      $('.btn-nav').removeClass('active-btn'); 
    }

    $('.about').click(function() {
      hideAllSections(); 
      $('#about').fadeIn(); 
      $(this).addClass('active-btn');
    });

    $('.skills').click(function() {
      hideAllSections();
      $('#skills').fadeIn(); 
      $(this).addClass('active-btn');
    });

    $('.works').click(function() {
      hideAllSections();
      $('#works').fadeIn();
      $(this).addClass('active-btn');
    });

    $('.contact').click(function() {
      hideAllSections(); 
      $('#contact').fadeIn(); 
      $(this).addClass('active-btn');
    });

    $('.about').click(); 

    $("#btn-send").click(function(){
      alert("I'll be in touch");
    });

  $('.carousel-item').click(function() {
      var target = $(this).data('target');
      window.location.href = target;
  });

});


