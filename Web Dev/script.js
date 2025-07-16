const bongoCat = document.getElementById("bongoCat");

// Image paths
const idle = "assets/idle.png";
const hitLeft = "assets/hit_left.gif";
const hitRight = "assets/hit_right.gif";

// Sound files
const soundLeft = new Audio("assets/hit_left.mp3");
const soundRight = new Audio("assets/hit_left.mp3");

document.addEventListener("keydown", (e) => {
  if (e.code === "KeyA") {
    bongoCat.src = hitLeft;
    soundLeft.currentTime = 0; // rewind
    soundLeft.play();
  } else if (e.code === "KeyD") {
    bongoCat.src = hitRight;
    soundRight.currentTime = 0;
    soundRight.play();
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "KeyA" || e.code === "KeyD") {
    bongoCat.src = idle;
  }
});
