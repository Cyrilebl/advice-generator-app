const adviceId = document.getElementById("number");
const adviceText = document.getElementById("text");
const button = document.querySelector(".dice");

window.onload = generateQuote();

button.addEventListener("click", () => {
  generateQuote();
});

function generateQuote() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => data.slip)
    .then((data) => {
      adviceId.textContent = data.id;
      adviceText.textContent = data.advice;
    });
}
