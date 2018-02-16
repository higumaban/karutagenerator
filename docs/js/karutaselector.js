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

  var temp_accordion = "";

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

  $('.yomifuda').on('click',function(){
    var add_illust_selector = function(that){
      var illust_selector =  $("<div></div>", {
        "class": "card_column illust_selector"
      });
      illust_selector.append($("<img></img>", {
        "class": "card efuda",
        "value": $(that).attr("value"),
        "src": "./img/resized/" + $(that).attr("value") + "_sentence.jpg"
      }));
      illust_selector.append($("<img></img>", {
        "class": "card efuda",
        "value": "ri",
        "src": "./img/resized/mi_00.jpg"
      }));
      illust_selector.append($("<img></img>", {
        "class": "card efuda",
        "value": "ru",
        "src": "./img/resized/mi_01.jpg"
      }));
      illust_selector.append($("<img></img>", {
        "class": "card efuda",
        "value": "re",
        "src": "./img/resized/mi_02.jpg"
      }));
      illust_selector.append($("<img></img>", {
        "class": "card efuda",
        "value": "ro",
        "src": "./img/resized/mi_03.jpg"
      }));
      illust_selector.slick({
        arrows: true,
        speed: 200,
        draggable: false,
        swipe: false,
        nextArrow: '<img src="./img/resized/arrow_w.png" class="slide-arrow prev-arrow">',
        slidesToShow: 3,
        slidesToScroll: 3
      });
      $(that).parent().parent().parent().after(illust_selector);
    }

    if(temp_accordion == ""){
      add_illust_selector(this);
      temp_accordion = $(this).attr("value");
    }else{
      $(".illust_selector").remove();
      if($(this).attr("value") != temp_accordion){
        add_illust_selector(this);
        temp_accordion = $(this).attr("value");
      }else{
        temp_accordion = "";
      }
    }

  });
});