// Materialize carousel
// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.carousel');
//   var instance = M.Carousel.init(elems, options);
//   var options = {
//     // duration: 400,
//     fullWidth: true,
//     indicators: true
//   };
// });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, options);
    var options = {
      duration: 400
    };
  });



