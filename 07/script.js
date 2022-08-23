const counterLabel = document.getElementById("counter");

let seconds = 0;
let minutes = 0;

function counter() {
  setInterval(() => {
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes === 60) {
      minutes = 0;
    }

    let formatedTime = `${(0 + minutes.toString()).slice(-2)}:${(0 + seconds.toString()).slice(-2)}`;

    counterLabel.innerHTML = formatedTime;
  }, 1000);
}

function drawRect() {
  rectWidth = map(seconds, 0, 60, 0, width);

  rect(0, 0, rectWidth, height);
  fill(0);
  noStroke();
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  counter();
}

function draw() {
  background(255);
  drawRect();
}
