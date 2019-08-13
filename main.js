const button__left = document.querySelector(".arrow__left");
const button__right = document.querySelector(".arrow__right");
const frame = document.querySelector(".frame");

function scroll_left() {
  let compStyles = window.getComputedStyle(frame, null);
  let leftie = compStyles.getPropertyValue("left");
  let num_value = parseInt(leftie.substring(0, leftie.length - 2));

  if (num_value > -800) {
    num_value = num_value - 200;
    frame.style.left = num_value + "px";
  } else {
    button__right.style = "visibility: hidden";
  }
  button__left.style = "visibility: visible";
}

function scroll__right() {
  let compStyles = window.getComputedStyle(frame, null);
  let leftie = compStyles.getPropertyValue("left");
  let num_value = parseInt(leftie.substring(0, leftie.length - 2));

  if (num_value < 0) {
    num_value = num_value + 200;
    frame.style.left = num_value + "px";
  } else {
    button__left.style = "visibility: hidden";
  }
  button__right.style = "visibility: visible";
}

button__right.addEventListener("click", scroll_left);
button__left.addEventListener("click", scroll__right);
