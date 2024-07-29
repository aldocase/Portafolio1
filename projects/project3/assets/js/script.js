$(document).ready(function () {
  $(".card-grande").hide();


  $(".ver-mas-btn").click(function () {

          let targetId = $(this).data("target"); 
      $(".card-grande").hide();

      $(targetId).show();
  });

 
  $(".btn-close").click(function () { 
     
      $(this).closest(".card-grande").hide();
  });
});