// $(document).ready(function() {
//   $(".clickable").click(function() {
//     $(".initially-showing").slideToggle();
//     $(".initially-hidden").slideToggle();
//   });
// });

$(function () {
  $("button#fade-in").click(function () {
    $(".initially-showing").fadeIn();
    $(".initially-hidden").fadeOut();
  });
  $("button#fade-out").click(function () {
    $(".initially-hidden").fadeIn();
    $(".initially-showing").fadeOut();
  });
});
