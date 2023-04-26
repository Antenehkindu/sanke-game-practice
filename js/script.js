const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
// console.log(ctx);
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

let snake = [];
snake[0] = {
    x: (Math.floor(Math.random()*columns))*scale,
    y: (Math.floor(Math.random()*rows))*scale
}
let d = "right";

let playGame = setInterval(draw, 100);

function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < snake.length; i++){
        ctx.fillstyle = "black";
        ctx.strokeStyle = "red";
        ctx.fillRect(snake[i].x ,snake[i].y, scale, scale);
        ctx.strokeRect(snake[i].x, snake[i].y, scale, scale);
    }

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    // console.log(snakeX);
    if (d == "left") snakeX -= scale;
    if (d == "up") snakeY -= scale;
    if (d == "right") snakeX += scale;
    if (d == "down") snakeY += scale;

    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
}

