const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

const animateButton = document.getElementById("animateButton");

var heavynuclearImg = new Image();
heavynuclearImg.onload = function () {
  ctx.drawImage(heavynuclearImg, 0, 0, 900, 900);
};
heavynuclearImg.src = "/img/heavynuclear.png";

var heImg = new Image();
heImg.onload = function () {
  ctx.drawImage(heImg, 220, 440, 200, 200);
};
heImg.src = "/img/he.png";

var energy3Img = new Image();
energy3Img.src = "/img/energy3.png";



let initial_x = 220;
x = 220;
attempts = 0;

function startAnimate() {
  attempts++;
  if (attempts > 1) {
    cancelAnimationFrame(req);
  }
  x = initial_x;
  animate();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(heavynuclearImg, 0, 0, 900, 900);
  ctx.drawImage(heImg, x, 440 - (x - initial_x) * 0.5, 200, 200);
  ctx.drawImage(energy3Img, 0, 0, 900, 900);

  x += 15;

  if (x >= 1000) {
    cancelAnimationFrame(req);

  } else {
    req = requestAnimationFrame(animate);
  }
}


let ZFloat, EFloat, exponent;
animateButton.onclick = () => {
  startAnimate();
  ZFloat = parseFloat(input0.value);
  EFloat = parseFloat(input1.value);

  exponent = (1.29 * 0.0000001) - (1.72 * ZFloat * EFloat ** (-0.5)) + 2;

  calculatedText.innerText =
    "T = " +
    String(10 ** exponent) +
    " %";
};

const input0 = document.getElementById("input0");
const input1 = document.getElementById("input1");
const calculatedText = document.getElementById("calculatedText");