const canvas = document.getElementById("canvas");

// 2. 그리기객체 취득
const ctx = canvas.getContext("2d");

const animateButton = document.getElementById("animateButton");

// 3. 애니메이션 시작점 좌표 설정
let rx = 200;
let ry = 260;
let rsizeX = 200;
let rsizeY = 200;

let bx = 360;
let by = 260;
let bsizeX = 40;
let bsizeY = 40;

ctx.fillStyle = "red";
ctx.fillRect(rx, ry, rsizeX, rsizeY);

ctx.fillStyle = "blue";
for (i = 0; i < 3; i++) {
    ctx.fillRect(bx, by + (80 * i), bsizeX, bsizeY);
}

let attempts = 0;
// 4. 애니메이션 함수 선언
function startAnimate() {
    bx = 360;
    by = 260;
    attempts++;
    if (attempts > 1) {
        cancelAnimationFrame(req);
    }
    animate();
}

function animate() {
    // 1) 함수가 실행될 때마다 화면 초기화(canvas의 너비와 높이 만큼 지움)
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2) 사각형 그리기
    ctx.fillStyle = "red";
    ctx.fillRect(rx, ry, rsizeX, rsizeY);

    ctx.fillStyle = "blue";
    for (i = 0; i < 3; i++) {
        ctx.fillRect(bx, by + (80 * i), bsizeX, bsizeY);
    }

    // 3) 사각형이 그려질 x좌표 증가
    //   => 함수가 실행될때마다 x좌표가 1씩 증가한 상태로 사각형이 그려진다.
    bx = bx + 10;

    // 4) *** requestAnimationFrame 함수를 재귀적으로 호출한다.
    req = requestAnimationFrame(animate);
}

// 5. *** requestAnimationFrame로 애니메이션 구현: 재귀적으로 호출된다.
animateButton.onclick = () => startAnimate();
