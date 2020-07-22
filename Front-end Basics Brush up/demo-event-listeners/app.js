$(document).ready(() => {
  console.log("Ready to load");
  document.addEventListener("keypress", (key) => {
    console.log(String.fromCharCode(key.which || key.keyCode));
    check(String.fromCharCode(key.which || key.keyCode));
  });
});

var array = new Array(
  "images/doggo.jpg",
  "images/joy1.jpg",
  "images/scenery1.jpg",
  "images/smile1.jpg"
);

function show() {
  var text = document.getElementById("text");
  var randomNum = Math.floor(Math.random() * array.length);
  document.getElementById("image").src = array[randomNum];
  text.style.display = "block";
}

function hide() {
  var text = document.getElementById("text");
  text.style.display = "none";
}

var index = 0;

function check(key) {
  if (index === 0 && (key === "s" || key === "S")) {
    index++;
  } else if (index === 1 && (key === "u" || key === "U")) {
    index++;
  } else if (index === 2 && (key === "p" || key === "P")) {
    index = 0;
    show();
    setTimeout(hide, 3000);
  } else {
    index = 0;
  }
}
