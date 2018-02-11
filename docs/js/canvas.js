var name2pos = {
  "mi": {"coord": [0, 0], "layer": 0},
  "mu": {"coord": [723, 0], "layer": 0},
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
  draw("efuda", "mi", "00");
  draw("efuda", "mu", "00");
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