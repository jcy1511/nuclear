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
    ctx.arc(
      bx,
      initial_by + (bx - initial_bx) * (0.3 - 0.3 * i),
      bsizeX,
      0,
      Math.PI * 2
    );
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }
  ctx.drawImage(img, rx+20, ry + 80, rsizeX-45, rsizeY-45);
  ctx.drawImage(img, rx+20, ry - 60, rsizeX-45, rsizeY-45);
  ctx.drawImage(energyImg, 550, 570, 500, 200);
  ctx.drawImage(energy2Img, 550, 80, 500, 200);
}

var energyImg = new Image();
energyImg.onload = function() {
  console.log("loaded");
}
energyImg.src = "/img/energy.png";

var energy2Img = new Image();
energy2Img.onload = function() {
  console.log("loaded");
}
energy2Img.src = "/img/energy2.png";

var img = new Image();
img.onload = function () {
  ctx.fillStyle = "blue";
  for (i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.arc(bx, by, bsizeX, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }
  ctx.drawImage(img, rx, ry, rsizeX, rsizeY);
};
img.src = "/img/nuclear.png";
let attempts = 0;
let attempts0 = 0;

async function startAnimate() {
  bx = 860;
  by = 370;
  attempts++;
  if (attempts > 1) {
    cancelAnimationFrame(req);
    if (attempts0 > 1) {
      clearTimeout(timer);
    }
  }
  startAnimate0();
  timer = setTimeout(() => animate(), 1000);
}

function animate() {
  console.log("animate");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  draw();

  bx += 15;
  by += 5;

  if (bx >= 2800) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "blue";
    for (i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.arc(initial_bx, initial_by, bsizeX, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fill();
      ctx.closePath();
    }
    ctx.drawImage(img, rx, ry, rsizeX, rsizeY);
  } else {
    req = requestAnimationFrame(animate);
  }
}

function startAnimate0() {
  console.log("startAnimate0");
  bx = 0;
  by = 370;
  attempts0++;
  if (attempts0 > 1) {
    cancelAnimationFrame(req0);
  }
  ctx.beginPath();
  ctx.arc(0, initial_by, bsizeX, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
  ctx.drawImage(img, rx, ry, rsizeX, rsizeY);

  animate0();
}

function animate0() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  bx += 15;

  ctx.beginPath();
  ctx.arc(bx, initial_by, bsizeX, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
  ctx.drawImage(img, rx, ry, rsizeX, rsizeY);

  if (bx >= 800) {
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(initial_bx, initial_by, bsizeX, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    ctx.drawImage(img, rx, ry, rsizeX, rsizeY);
  } else {
    req0 = requestAnimationFrame(animate0);
  }
}

animateButton.onclick = () => {
  startAnimate();
  calculatedText.innerText = input.value;
};

const input = document.getElementById("input");
const calculatedText = document.getElementById("calculatedText");
