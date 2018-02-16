var bg_type = "washi";
const width = 723;
const height = 1023;

const name2pos = {
  "a": {"coord": [width*0, height*0], "layer": 0},
  "i": {"coord": [width*1, height*0], "layer": 0},
  "u": {"coord": [width*2, height*0], "layer": 0},
  "e": {"coord": [width*3, height*0], "layer": 0},
  "o": {"coord": [width*4, height*0], "layer": 0},
  "ka": {"coord": [width*5, height*0], "layer": 0},
  "ki": {"coord": [width*6, height*0], "layer": 0},
  "ku": {"coord": [width*7, height*0], "layer": 0},

  "ke": {"coord": [width*0, height*1], "layer": 0},
  "ko": {"coord": [width*1, height*1], "layer": 0},
  "sa": {"coord": [width*2, height*1], "layer": 0},
  "si": {"coord": [width*3, height*1], "layer": 0},
  "su": {"coord": [width*4, height*1], "layer": 0},
  "se": {"coord": [width*5, height*1], "layer": 0},
  "so": {"coord": [width*6, height*1], "layer": 0},
  "ta": {"coord": [width*7, height*1], "layer": 0},

  "ti": {"coord": [width*0, height*2], "layer": 0},
  "tu": {"coord": [width*1, height*2], "layer": 0},
  "te": {"coord": [width*2, height*2], "layer": 0},
  "to": {"coord": [width*3, height*2], "layer": 0},
  "na": {"coord": [width*4, height*2], "layer": 0},
  "ni": {"coord": [width*5, height*2], "layer": 0},
  "nu": {"coord": [width*6, height*2], "layer": 0},
  "ne": {"coord": [width*7, height*2], "layer": 0},

  "no": {"coord": [width*0, height*3], "layer": 0},
  "ha": {"coord": [width*1, height*3], "layer": 0},
  "hi": {"coord": [width*2, height*3], "layer": 0},
  "hu": {"coord": [width*3, height*3], "layer": 0},
  "he": {"coord": [width*4, height*3], "layer": 0},
  "ho": {"coord": [width*5, height*3], "layer": 0},
  "ma": {"coord": [width*6, height*3], "layer": 0},
  "mi": {"coord": [width*7, height*3], "layer": 0},

  "mu": {"coord": [width*0, height*0], "layer": 1},
  "me": {"coord": [width*1, height*0], "layer": 1},
  "mo": {"coord": [width*2, height*0], "layer": 1},
  "ya": {"coord": [width*3, height*0], "layer": 1},
  "yu": {"coord": [width*4, height*0], "layer": 1},
  "yo": {"coord": [width*5, height*0], "layer": 1},
  "ra": {"coord": [width*6, height*0], "layer": 1},
  "ri": {"coord": [width*7, height*0], "layer": 1},

  "ru": {"coord": [width*0, height*1], "layer": 1},
  "re": {"coord": [width*1, height*1], "layer": 1},
  "ro": {"coord": [width*2, height*1], "layer": 1},
  "wa": {"coord": [width*3, height*1], "layer": 1},
  "wo": {"coord": [width*4, height*1], "layer": 1},
  "nn": {"coord": [width*5, height*1], "layer": 1},
}

onload = function() {
  setChangeEventListener();
  drawInit();
};

function srcWrap(name){
  return "../img/raw/" + name + ".png";
}

function onImgSelectorChange(target) {
  draw("efuda", target.name, target.value);
}

function setChangeEventListener(){
  document.addEventListener("change", (e) => {
    if (e.target.classList.contains("img_selector")) {
      onImgSelectorChange(e.target);
    }
  });
}

function drawInit(){
  draw("efuda", "a", "sentence");
  draw("efuda", "i", "sentence");
  draw("efuda", "u", "sentence");
  draw("efuda", "e", "sentence");
  draw("efuda", "o", "sentence");

  draw("efuda", "ka", "sentence");
  draw("efuda", "ki", "sentence");
  draw("efuda", "ku", "sentence");
  draw("efuda", "ke", "sentence");
  draw("efuda", "ko", "sentence");

  draw("efuda", "sa", "sentence");
  draw("efuda", "si", "sentence");
  draw("efuda", "su", "sentence");
  draw("efuda", "se", "sentence");
  draw("efuda", "so", "sentence");

  draw("efuda", "ta", "sentence");
  draw("efuda", "ti", "sentence");
  draw("efuda", "tu", "sentence");
  draw("efuda", "te", "sentence");
  draw("efuda", "to", "sentence");

  draw("efuda", "na", "sentence");
  draw("efuda", "ni", "sentence");
  draw("efuda", "nu", "sentence");
  draw("efuda", "ne", "sentence");
  draw("efuda", "no", "sentence");

  draw("efuda", "ha", "sentence");
  draw("efuda", "hi", "sentence");
  draw("efuda", "hu", "sentence");
  draw("efuda", "he", "sentence");
  draw("efuda", "ho", "sentence");

  draw("efuda", "ma", "sentence");
  draw("efuda", "mi", "sentence");
  draw("efuda", "mu", "sentence");
  draw("efuda", "me", "sentence");
  draw("efuda", "mo", "sentence");

  draw("efuda", "ya", "sentence");
  draw("efuda", "yu", "sentence");
  draw("efuda", "yo", "sentence");

  draw("efuda", "ra", "sentence");
  draw("efuda", "ri", "sentence");
  draw("efuda", "ru", "sentence");
  draw("efuda", "re", "sentence");
  draw("efuda", "ro", "sentence");

  draw("efuda", "wa", "sentence");
  draw("efuda", "wo", "sentence");
  draw("efuda", "nn", "sentence");
}

function draw(canvas_name, frame_name, bg_name) {
  var bg_dir_name = (bg_name != "sentence") ? "illust/" : "sentence/"; 
  var bg_src = srcWrap(bg_dir_name + frame_name + "_" + bg_name);
  var frame_src = srcWrap("frame/"+frame_name);
  var pos = name2pos[frame_name];
  console.log(frame_name + bg_name);
  console.log(pos);
  var canvas = document.getElementById(canvas_name + "_canvas_" + pos.layer.toString());
  
  if ( ! canvas || ! canvas.getContext ) { return false; }
    var ctx = canvas.getContext('2d');

    var srcs = [
      bg_src,
      frame_src
    ];

    if(bg_name=="sentence"){
      srcs.unshift(srcWrap("bg/"+bg_type));
    }

    var images = [];
    for (var i in srcs) {
        images[i] = new Image();
        images[i].src = srcs[i];
    }

    var loadedCount = 0;
    for (var i in images) {
        images[i].addEventListener('load', function() {
            if (loadedCount == images.length-1) {
              for (var j in images) {
                ctx.drawImage(images[j], pos.coord[0], pos.coord[1]);
              }
            }
            loadedCount++;
        }, false);
    }
}