let raf;
let Mouse_Click_Pos = (event) => {
let cX = event.clientX;
let cY = event.clientY;
document.getElementById("Header1").innerHTML = ("ClientX: " + cX + " AND CleintY: " + cY)
} 

// "borrowed" code to draw a ball
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

const ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: "blue",
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

function draw() {
  ctx.fillStyle = "rgb(255 255 255 / 30%)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  let iMoveSpeedMultiplier = 0.5;
  ball.x += ball.vx;
  ball.y += ball.vy;

  // Friction logic
  if (iMoveSpeedMultiplier != 1) {
    ball.vy *= 0.99;
    ball.vx *= 0.99;
  } else {
    ball.vy *= iMoveSpeedMultiplier;
    ball.vx *= iMoveSpeedMultiplier; 
  }

  //Clasifies when ball is not moving
  const iMoveClasefier = 0.001
  if ((ball.vx < iMoveClasefier) & (ball.vx > (-iMoveClasefier)) ){
    ball.vx = 0;
  } 
  if ((ball.vy < iMoveClasefier) & (ball.vy > (-iMoveClasefier)) ){
    ball.vy = 0;
  } 


  if (ball.x > (canvas.width-ball.radius)) {
    ball.vx *= -1;
    ball.x = (canvas.width-ball.radius);
  }else if ((ball.x - ball.radius) <= 0) {
    ball.vx *= -1;
    ball.x = ball.radius;
  }

  if ((ball.y - ball.radius) <= 0) {
    ball.vy *= -1;
    ball.y = ball.radius;
  } else if (ball.y >= (canvas.height-ball.radius)) {
    ball.vy *= -1;
    ball.y = (canvas.height-ball.radius);
  } 
  
  raf = window.requestAnimationFrame(draw);
  }
  
//Controll ball movement logic
/*
addEventListener("keydown", (eventKeyDown) => {
  if (eventKeyDown.keyCode === 229) {
    return;
  }
});
onkeydown = (eventKeyDown) => {
  if (eventKeyDown.keyCode === 38) {
    x+=1
  }
37 left arrow
38 up arrow
39 right arrow
40 down arrow
};
*/



canvas.addEventListener("mouseover", (e) => {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener("mouseout", (e) => {
  window.cancelAnimationFrame(raf);
});

document.getElementById("GravButton").addEventListener("click", function () {
if (draw.iMoveSpeedMultiplier = 0) {
  draw.iMoveSpeedMultiplier = 1;
} 
if (draw.iMoveSpeedMultiplier = 1) {
  draw.iMoveSpeedMultiplier = 0;
}

console.log(ball.vy);
console.log(ball.vx);  
});