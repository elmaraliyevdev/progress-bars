let i = 50;
let green = document.getElementById("green");
let red = document.getElementById("red");
let white = document.getElementById("white");
let blue = document.getElementById("blue");
let yellow = document.getElementById("yellow");

function progress() {
  if (i == 50) {
    i = 1;

    let width = 50;
    let id = setInterval(frame, 50);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 50;
      } else {
        width++;
        green.style.width = width + "%";
        green.innerHTML = width + "%";

        red.style.width = width + "%";
        red.innerHTML = width + "%";

        white.style.width = width + "%";
        white.innerHTML = width + "%";

        blue.style.width = width + "%";
        blue.innerHTML = width + "%";

        yellow.style.width = width + "%";
        yellow.innerHTML = width + "%";
      }
    }
  }
}
