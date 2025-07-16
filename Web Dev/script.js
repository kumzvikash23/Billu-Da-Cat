const bongoCat = document.getElementById("bongoCat");

// Image paths
const idle = "assets/idle.png";
const hitLeft = "assets/hit_left.gif";
const hitRight = "assets/hit_right.gif";

// Sounds
const soundLeft = new Audio("assets/hit_left.mp3");
const soundRight = new Audio("assets/hit_left.mp3");

// Keyboard support
document.addEventListener("keydown", (e) => {
  if (e.code === "KeyA") {
    hit("left");
  } else if (e.code === "KeyD") {
    hit("right");
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "KeyA" || e.code === "KeyD") {
    reset();
  }
});

// Mobile tap support
document.getElementById("leftBtn").addEventListener("touchstart", () => hit("left"));
document.getElementById("rightBtn").addEventListener("touchstart", () => hit("right"));
document.getElementById("leftBtn").addEventListener("touchend", reset);
document.getElementById("rightBtn").addEventListener("touchend", reset);

// Also support mouse clicks for tablets/laptops without keyboard
document.getElementById("leftBtn").addEventListener("mousedown", () => hit("left"));
document.getElementById("rightBtn").addEventListener("mousedown", () => hit("right"));
document.getElementById("leftBtn").addEventListener("mouseup", reset);
document.getElementById("rightBtn").addEventListener("mouseup", reset);

// Shared logic
function hit(side) {
  if (side === "left") {
    bongoCat.src = hitLeft;
    soundLeft.currentTime = 0;
    soundLeft.play();
  } else if (side === "right") {
    bongoCat.src = hitRight;
    soundRight.currentTime = 0;
    soundRight.play();
  }
}

function reset() {
  bongoCat.src = idle;
}
