const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

const animateButton = document.getElementById("animateButton");

let rx = 700;
let ry = 330;
let rsizeX = 200;
let rsizeY = 200;

let bx = 860;
let by = 330;
let bsizeX = 40;
let bsizeY = 40;

function draw() {
  ctx.drawImage(img, rx, ry, rsizeX, rsizeY);
  ctx.fillStyle = "blue";
  for (i = 0; i < 3; i++) {
    ctx.fillRect(bx, by + 80 * i, bsizeX, bsizeY);
  }
}
var img = new Image();
img.onload = function () {
  ctx.drawImage(img, rx, ry, rsizeX, rsizeY);
  ctx.fillStyle = "blue";
  for (i = 0; i < 3; i++) {
    ctx.fillRect(bx, by + 80 * i, bsizeX, bsizeY);
  }
};
img.src = "/img/nuclear.jpeg";
let attempts = 0;

function startAnimate() {
  bx = 860;
  by = 330;
  attempts++;
  if (attempts > 1) {
    cancelAnimationFrame(req);
  }
  animate();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  draw();

  bx += 10;

  req = requestAnimationFrame(animate);

  if (bx >= 2000) {
    ctx.drawImage(img, 700, 330, rsizeX, rsizeY);
    ctx.fillStyle = "blue";
    for (i = 0; i < 3; i++) {
      ctx.fillRect(860, 330 + 80 * i, bsizeX, bsizeY);
    }
  }
}

animateButton.onclick = () => {
  startAnimate();
  calculatedText.innerText = input.value;
};

const input = document.getElementById("input");
const calculatedText = document.getElementById("calculatedText");
