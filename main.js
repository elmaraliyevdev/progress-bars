var i = 50;
var green = document.getElementById("green");
var red = document.getElementById("red");
var white = document.getElementById("white");
var blue = document.getElementById("blue");
var yellow = document.getElementById("yellow");

function progress() {
  if (i == 50) {
    i = 1;

    var width = 50;
    var id = setInterval(frame, 50);
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
