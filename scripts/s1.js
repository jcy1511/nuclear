const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

const animateButton = document.getElementById("animateButton");

let rx = 700;
let ry = 330;
let rsizeX = 200;
let rsizeY = 200;

let initial_bx = 840;
let initial_by = 420;
let bx = 840;
let by = 420;
let bsizeX = 20;
let bsizeY = 40;

function draw() {
  ctx.fillStyle = "blue";
  for (i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.arc(bx, initial_by+(bx-initial_bx)*(0.3-0.3*i), bsizeX, 0, Math.PI*2);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }
  ctx.drawImage(img, rx, ry, rsizeX, rsizeY);
}

var img = new Image();
img.onload = function () {
  ctx.fillStyle = "blue";
  for (i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.arc(bx, by, bsizeX, 0, Math.PI*2);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }
  ctx.drawImage(img, rx, ry, rsizeX, rsizeY);
};
img.src = "/img/nuclear.jpeg";
let attempts = 0;

function startAnimate() {
  bx = 860;
  by = 370;
  attempts++;
  if (attempts > 1) {
    cancelAnimationFrame(req);
  }
  animate();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  draw();

  bx += 15;
  by += 5;
  

  if (bx >= 2000) {
    ctx.fillStyle = "blue";
    for (i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.arc(initial_bx, initial_by, bsizeX, 0, Math.PI*2);
      ctx.stroke();
      ctx.fill();
      ctx.closePath();
    }
    ctx.drawImage(img, rx, ry, rsizeX, rsizeY);
  } else {
    req = requestAnimationFrame(animate);
  }
}

animateButton.onclick = () => {
  startAnimate();
  calculatedText.innerText = input.value;
};

const input = document.getElementById("input");
const calculatedText = document.getElementById("calculatedText");
