const width = 723
const height = 1023

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
  return "img/" + name + ".png";
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
  draw("efuda", "a", "00");
  draw("efuda", "i", "00");
  draw("efuda", "u", "00");
  draw("efuda", "e", "00");
  draw("efuda", "o", "00");

  draw("efuda", "ka", "00");
  draw("efuda", "ki", "00");
  draw("efuda", "ku", "00");
  draw("efuda", "ke", "00");
  draw("efuda", "ko", "00");

  draw("efuda", "sa", "00");
  draw("efuda", "si", "00");
  draw("efuda", "su", "00");
  draw("efuda", "se", "00");
  draw("efuda", "so", "00");

  draw("efuda", "ta", "00");
  draw("efuda", "ti", "00");
  draw("efuda", "tu", "00");
  draw("efuda", "te", "00");
  draw("efuda", "to", "00");

  draw("efuda", "na", "00");
  draw("efuda", "ni", "00");
  draw("efuda", "nu", "00");
  draw("efuda", "ne", "00");
  draw("efuda", "no", "00");

  draw("efuda", "ha", "00");
  draw("efuda", "hi", "00");
  draw("efuda", "hu", "00");
  draw("efuda", "he", "00");
  draw("efuda", "ho", "00");

  draw("efuda", "ma", "00");
  draw("efuda", "mi", "00");
  draw("efuda", "mu", "00");
  draw("efuda", "me", "00");
  draw("efuda", "mo", "00");

  draw("efuda", "ya", "00");
  draw("efuda", "yu", "00");
  draw("efuda", "yo", "00");

  draw("efuda", "ra", "00");
  draw("efuda", "ri", "00");
  draw("efuda", "ru", "00");
  draw("efuda", "re", "00");
  draw("efuda", "ro", "00");

  draw("efuda", "wa", "00");
  draw("efuda", "wo", "00");
  draw("efuda", "nn", "00");
}

function draw(canvas_name, frame_name, bg_name) {
  var bg_src = srcWrap(frame_name+bg_name);
  var frame_src = srcWrap(frame_name);
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

    if(bg_name=="00"){
      srcs.unshift(srcWrap("sample"));
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