const button = document.getElementsByClassName("custom-button")[0];

const colorArray = [
  "#f44336", // red
  "#e91e63", // pink
  "#9c27b0", // purple
  "#673ab7", // deep purple
  "#3f51b5", // indigo
  "#2196f3", // blue
  "#009688", // teal
  "#4caf50", // green
  "#8bc34a", // light green
  "#ff9800", // orange
  "#ff5722", // deep orange
  "#795548", // brown
  "#9e9e9e", // grey
  "#607d8b", // blue grey
];

let index = 0;

function updateButtonColor() {
  index = index + 1;

  if (index >= colorArray.length) index = 0;

  button.style.backgroundColor = colorArray[index];
}

button.addEventListener("click", () => updateButtonColor());
