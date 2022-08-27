const toggle_button = document.getElementById("toggle-button");

let theme = "light";

function changeToLightTheme() {
  document.body.className = "light-background";
  theme = "light";
}

function changeToDarkTheme() {
  document.body.className = "dark-background";
  theme = "dark";
}

toggle_button.addEventListener("click", () => {
  theme === "light" ? changeToDarkTheme() : changeToLightTheme();
});
