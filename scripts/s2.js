const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

const animateButton = document.getElementById("animateButton");

var h2Img = new Image();
h2Img.onload = function () {
  ctx.drawImage(h2Img, 200, 150, 200, 200);
};
h2Img.src = "/img/h2.png";

var h3Img = new Image();
h3Img.onload = function () {
  ctx.drawImage(h3Img, 200, 550, 200, 200);
};
h3Img.src = "/img/h3.png";

var heImg = new Image();
heImg.src = "/img/he.png";

var energy2Img = new Image();
energy2Img.src = "/img/energy2.png";

var energyImg = new Image();
energyImg.src = "/img/energy.png";

var nImg = new Image();
nImg.src = "/img/n.png";

let initial_x = 200;
let x = 200;
let attempts = 0;

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

  ctx.drawImage(h2Img, x, 150 + 0.4 * (x - initial_x), 200, 200);
  ctx.drawImage(h3Img, x, 550 - 0.4 * (x - initial_x), 200, 200);

  x += 15;

  if (x >= 750) {
    cancelAnimationFrame(req);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    explode();
  } else {
    req = requestAnimationFrame(animate);
  }
}

function explode() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(nImg, x, 150 + 0.4 * (x - initial_x), 200, 200);
  ctx.drawImage(heImg, 700, 325, 200, 200);

  ctx.drawImage(energyImg, 550, 570, 500, 200);
  ctx.drawImage(energy2Img, 550, 80, 500, 200);

  x += 15;

  if (x >= 1200) {
    cancelAnimationFrame(req);
  } else {
    req = requestAnimationFrame(explode);
  }
}

animateButton.onclick = () => {
  startAnimate();
  let massFloat = parseFloat(input.value);
  calculatedText.innerText =
    "E = " +
    String((massFloat * 299792 * 299792).toLocaleString("en-Us")) +
    " J";
};

const input = document.getElementById("input");
const calculatedText = document.getElementById("calculatedText");
