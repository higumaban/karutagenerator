onload = function() {
  draw();
};
function draw() {
  var canvas = document.getElementById('canvas_1');
  if ( ! canvas || ! canvas.getContext ) { return false; }
  var ctx = canvas.getContext('2d');
  /* Imageオブジェクトを生成 */

  var bg_img = new Image();
  bg_img.src = "img/min1.png";
  /* 画像を描画 */
  bg_img.onload = function(){
    ctx.drawImage(bg_img, 0, 0);
  }

  var frame_img = new Image();
  frame_img.src = "img/waku.png";
  /* 画像を描画 */
  frame_img.onload = function(){
    ctx.drawImage(frame_img, 0, 0);
  }
}