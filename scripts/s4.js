const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

const plusAnimateButton = document.getElementById("plusAnimateButton");
const minusAnimateButton = document.getElementById("minusAnimateButton");

var betanuclearImg = new Image();
betanuclearImg.onload = function () {
  ctx.drawImage(betanuclearImg, 0, 0, 900, 900);
};
betanuclearImg.src = "/img/betanuclear.png";

var betanuclear_plusImg = new Image();
betanuclear_plusImg.src = "/img/betanuclear_plus.png";

var betanuclear_minusImg = new Image();
betanuclear_minusImg.src = "/img/betanuclear_minus.png";

var eplusImg = new Image();
eplusImg.src = "/img/eplus.png";

var eminusImg = new Image();
eminusImg.src = "/img/eminus.png";

var veImg = new Image();
veImg.src = "/img/ve.png";

var energy3Img = new Image();
energy3Img.src = "/img/energy3.png";



let initial_x = 220;
x = 220;
attempts = 0;

function startPlusAnimate() {
  attempts++;
  if (attempts > 1) {
    cancelAnimationFrame(req);
  }
  x = initial_x;
  plusAnimate();
}

function plusAnimate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (x > 510) {
    ctx.drawImage(betanuclear_plusImg, 0, 0, 900, 900);
    ctx.drawImage(energy3Img, 0, 0, 940, 880);
  } else {
    ctx.drawImage(betanuclearImg, 0, 0, 900, 900);
  }
  ctx.drawImage(eplusImg, x, 440 - (x - initial_x) * 0.5, 150, 150);
  ctx.drawImage(veImg, x, 440 + (x - initial_x) * 0.1, 150, 150);

  x += 15;

  if (x >= 1000) {
    cancelAnimationFrame(req);

  } else {
    req = requestAnimationFrame(plusAnimate);
  }
}


function startMinusAnimate() {
  attempts++;
  if (attempts > 1) {
    cancelAnimationFrame(req);
  }
  x = initial_x;
  minusAnimate();
}

function minusAnimate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (x > 510) {
    ctx.drawImage(betanuclear_minusImg, 0, 0, 900, 900);
    ctx.drawImage(energy3Img, 0, 0, 940, 880);
  } else {
    ctx.drawImage(betanuclearImg, 0, 0, 900, 900);
  }
  ctx.drawImage(eminusImg, x, 440 - (x - initial_x) * 0.5, 150, 150);
  ctx.drawImage(veImg, x, 440 + (x - initial_x) * 0.1, 150, 150);

  x += 15;

  if (x >= 1000) {
    cancelAnimationFrame(req);

  } else {
    req = requestAnimationFrame(minusAnimate);
  }
}


plusAnimateButton.onclick = () => startPlusAnimate()
minusAnimateButton.onclick = () => startMinusAnimate()

const input0 = document.getElementById("input0");
const input1 = document.getElementById("input1");
const calculatedText = document.getElementById("calculatedText");