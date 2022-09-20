const slider = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");
const generateButton = document.getElementById("generate-button");
const copyButton = document.getElementById("copy-button");

slider.defaultValue = 8;
slider.min = 4;
slider.max = 20;

generateButton.addEventListener("click", () => {
  passwordOutput.value = generatePassword(slider.value);
});

copyButton.addEventListener("click", () => {
  copyToClipBoard();
});

function generatePassword(length) {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const symbols = ["!", "@", "#", "$", "%", "&"];
  const lowerCase = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
  const upperCase = [...Array(26)].map((_, i) => String.fromCharCode(i + 65));
  const charArray = [...numbers, ...symbols, ...lowerCase, ...upperCase];

  let password = "";

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charArray.length);
    password += charArray[randomIndex];
  }

  return password;
}

function copyToClipBoard() {
  let password = document.getElementById("password-output");

  password.select();
  password.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(password.value);
}
