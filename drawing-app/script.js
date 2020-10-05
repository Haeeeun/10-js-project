const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");
const ctx = canvas.getContext("2d");

let size = 30;
let isPressed = false;
let color = "black";
let x = undefined;
let y = undefined;

canvas.addEventListener("mousedown", (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        // drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});

function drawCircle(x, y) {
    ctx.beginPath(); //경로를 그리기 시작
    ctx.arc(x, y, size, 0, Math.PI * 2); //동그라미 그리기
    ctx.fillStyle = color;
    ctx.fill(); // 동그라미 채우기
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath(); //경로를 그리기 시작
    ctx.moveTo(x1, y1); //좌표로 경로를 그리지 않고 이동
    ctx.lineTo(x2, y2); //경로를 그리며 좌표로 이동
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke(); //경로에 색을 그음
}

increaseBtn.addEventListener("click", () => {
    size += 5;

    if (size > 50) {
        size = 50;
    }

    updateSizeOnScreen();
});

decreaseBtn.addEventListener("click", () => {
    size -= 5;

    if (size < 5) {
        size = 5;
    }

    updateSizeOnScreen();
});

function updateSizeOnScreen() {
    sizeEl.innerText = size;
}

colorEl.addEventListener("change", (e) => {
    color = e.target.value;
});

clearEl.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});