window.onload = async () => {
  const characters = await fetch("https://www.breakingbadapi.com/api/characters/")
    .then((response) => response.json())
    .catch((error) => console.log(error));

  for (let i in characters) {
    createCard(characters[i].img, characters[i].name, characters[i].occupation);
  }
};

function createCard(image_source, name, occupation) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundImage = `url(${image_source})`;

  const card_title = document.createElement("h5");
  card_title.classList.add("card-title");
  card_title.innerText = name;

  const card_text = document.createElement("p");
  card_text.classList.add("card-text");
  card_text.innerText = occupation.toString().replace(",", ", ");

  card.appendChild(card_title);
  card.appendChild(card_text);

  document.getElementById("card-container").appendChild(card);
}
