$(document).ready(function() {
  $(".burger-nav").on("click", function() {
    $("nav ul").toggle();
  });

  $("nav ul li a").on("click", function() {
    $("nav ul").toggle();
  });
});
