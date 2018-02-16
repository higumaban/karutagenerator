$(document).ready(function(){
  document.documentElement.addEventListener('touchstart', function (e) {
    if (e.touches.length >= 2) {e.preventDefault();}
  }, false);

  var t = 0;
  document.documentElement.addEventListener('touchend', function (e) {
    var now = new Date().getTime();
    if ((now - t) < 350){
      e.preventDefault();
    }
    t = now;
  }, false);

  $('.card_column').slick({
    // dots: true,
    arrows: true,
    speed: 200,
    draggable: false,
    swipe: false,
    nextArrow: '<img src="./img/resized/arrow.png" class="slide-arrow prev-arrow">',
    slidesToShow: 3,
    slidesToScroll: 3
  });
});