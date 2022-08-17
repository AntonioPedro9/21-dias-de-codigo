const hello_world = document.getElementById("hello-world");

let state = "pink";

function changeThemeToGreen() {
  hello_world.className = "green-neon";
  document.body.className = "green-background";
  state = "green";
}

function changeThemeToPink() {
  hello_world.className = "pink-neon";
  document.body.className = "pink-background";
  state = "pink";
}

hello_world.onclick = () => {
  state === "pink" ? changeThemeToGreen() : changeThemeToPink();
};
