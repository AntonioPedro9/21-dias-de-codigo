const emojis_container = document.getElementById("emojis_container");

function show_emojis() {
  for (let i in emojis_array) {
    emojis_container.innerHTML += `<div class="emoji">${emojis_array[i].char}</div>`;
  }
}

window.onload = show_emojis();

const emojis = document.getElementsByClassName("emoji");

for (let i in emojis) {
  emojis[i].addEventListener("click", copy_emoji);
}

function copy_emoji() {
  navigator.clipboard.writeText(this.innerText);
}
