const initial_list = [
  "a", "i", "u", "e", "o",
  "ka", "ki", "ku", "ke", "ko", 
  "sa", "si", "su", "se", "so", 
  "ta", "ti", "tu", "te", "to", 
  "na", "ni", "nu", "ne", "no", 
  "ha", "hi", "hu", "he", "ho", 
  "ma", "mi", "mu", "me", "mo", 
  "ya", "yu", "yo", 
  "ra", "ri", "ru", "re", "ro", 
  "wa", "wo", "nn" 
] 

$(document).ready(function(){
  $('.card_column').slick({
    // dots: true,
    arrows: true,
    speed: 200,
    draggable: false,
    swipe: false,
    nextArrow: '<img src="/karutagenerator/img/resized/arrow.png" class="slide-arrow prev-arrow">',
    slidesToShow: 3,
    slidesToScroll: 3
  });
  $("#main").fadeIn(300);
  

  var illust_dict = null;

  $.ajax({
    type: "get",
    url: '/karutagenerator/img/config/illusts_dict.json',
    success: function(res) {
      illusts_dict = res;
    }
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
        "src": "/karutagenerator/img/resized/" + $(that).attr("value") + "_sentence.jpg"
      }));

      var name = $(that).attr("value");
      var num_list = [];
      if(name in illusts_dict){
        num_list = illusts_dict[name];
      }

      for(var i in num_list){
        illust_selector.append($("<img></img>", {
          "class": "card efuda",
          "value": name,
          "src": "/karutagenerator/img/resized/" + name + "_" + num_list[i] + ".jpg"
        }));
      }

      illust_selector.slick({
        arrows: true,
        speed: 200,
        draggable: false,
        swipe: false,
        nextArrow: '<img src="/karutagenerator/img/resized/arrow_w.png" class="slide-arrow prev-arrow">',
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
    $("."+$(this).attr("value")+".yomifuda").attr("src", $(this).attr("src"));
    $(".illust_selector").slideToggle(200, function(){
      $(".illust_selector").remove();
      temp_accordion = "";
      can_accordion_move = true;
    });
    // $(".yomifuda").attr("src", $(this).attr("src"));
  });
});