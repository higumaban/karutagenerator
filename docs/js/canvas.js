onload = function() {
  draw();
};
function draw() {
  var canvas = document.getElementById('canvas_1');
  if ( ! canvas || ! canvas.getContext ) { return false; }
  var ctx = canvas.getContext('2d');
  /* Imageオブジェクトを生成 */
  var img = new Image();
  img.src = "img/waku.png";
  /* 画像を描画 */
  img.onload = function(){
    ctx.drawImage(img, 0, 0);
  }
}