$(document).ready(function(){
  document.documentElement.addEventListener('touchstart', function (e) {
    if (e.touches.length >= 2) {e.preventDefault();}
  }, false);
  var t = 0;
  document.documentElement.addEventListener('touchend', function (e) {
    var now = new Date().getTime();
    if ((now - t) < 500){
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


  var temp_accordion = "";
  var can_accordion_move = true;

  $('.yomifuda').on('click',function(){
    var add_illust_selector = function(that){
      var illust_selector =  $("<div></div>", {
        "class": "card_column illust_selector",
        "style": "display: none;"
      });
      illust_selector.append($("<img></img>", {
        "class": "card efuda",
        "value": $(that).attr("value"),
        "src": "./img/resized/" + $(that).attr("value") + "_sentence.jpg"
      }));
      illust_selector.append($("<img></img>", {
        "class": "card efuda",
        "value": $(that).attr("value"),
        "src": "./img/resized/mi_00.jpg"
      }));
      illust_selector.append($("<img></img>", {
        "class": "card efuda",
        "value": $(that).attr("value"),
        "src": "./img/resized/mi_01.jpg"
      }));
      illust_selector.append($("<img></img>", {
        "class": "card efuda",
        "value": $(that).attr("value"),
        "src": "./img/resized/mi_02.jpg"
      }));
      illust_selector.append($("<img></img>", {
        "class": "card efuda",
        "value": $(that).attr("value"),
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

    if(!can_accordion_move){
      return
    }

    can_accordion_move = false;
    if(temp_accordion == ""){
      add_illust_selector(this);
      temp_accordion = $(this).attr("value");
      $(".illust_selector").slideToggle(200, function(){
        can_accordion_move = true;
      });
    }else{
      $(".illust_selector").slideToggle(200, function(){
        $(".illust_selector").remove();
        if($(this).attr("value") != temp_accordion){
          add_illust_selector(this);
          temp_accordion = $(this).attr("value");
          $(".illust_selector").slideToggle(200, function(){
            can_accordion_move = true;
          });
        }else{
          temp_accordion = "";
          can_accordion_move = true;
        }
      }.bind(this));
    }
  });

  $('.efuda').live('click', function(){
    if(!can_accordion_move){
      return
    }

    $("."+$(this).attr("value")+".yomifuda").attr("src", $(this).attr("src"));
    $(".illust_selector").slideToggle(200, function(){
      $(".illust_selector").remove();
      temp_accordion = "";
      can_accordion_move = true;
    });
    // $(".yomifuda").attr("src", $(this).attr("src"));
  });
});