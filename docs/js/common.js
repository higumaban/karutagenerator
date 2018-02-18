$(document).ready(function(){
  // $("#header").load("/html/header.html");

  var is_menu_open = false;
  var toggle_menu = function(){
    is_menu_open = !is_menu_open;
    $("#header_menu").slideToggle(200);
  }

  $("#header_menu_button").live('click', function(){
    toggle_menu();
  });

  $("#main").live("click", function(){
    if(is_menu_open){
      toggle_menu();
    }
  })


});