let firstname = "Cameron";
let suffix = " Is The Best!";


const ball = document.getElementById("ball");
document.addEventListener('keydown', handleKeyPress);
let x = 0;
let y = 0;

function handleKeyPress(e) {
    if (e.code === 'ArrowUp') {
        y = y - 10;
    }

    if (e.code === 'ArrowDown') {
       y = y + 10;
    }

    if (e.code === "ArrowLeft") {
       x = x - 10;
    }

    if (e.code === "ArrowRight") {
        x = x + 10;
    }

    if (x < 0) {
        x = 0;
    }

    if (y < 0) {
        y = 0;
    }

    left(); //Update the balls position on the x axis
    up(); // Update the balls position on the y axis
}

function left() {
  ball.style.left = x + "px"; // Adds pixels to the x position
}

function up() {
    ball.style.top = y + "px"; //Adds pixels to the y position
}

