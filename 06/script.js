const card = document.getElementsByClassName("card")[0];
const slider = document.getElementById("slider");

slider.defaultValue = 25;
slider.min = 0;
slider.max = 50;

function controllBlurLevel(number) {
  card.style.backdropFilter = `blur(${number}px)`;
}

slider.addEventListener("input", () => controllBlurLevel(slider.value));
