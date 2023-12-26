const idAdvice = document.querySelector("small");
const textAdvice = document.querySelector("p");
const diceBtn = document.querySelector(".icon-dice-box");

function fetchData() {
  idAdvice.textContent = "...";
  textAdvice.textContent = "Getting some advice...";

  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((result) => {
      const { advice, id } = result.slip;

      idAdvice.textContent = `Advice #${id}`;
      textAdvice.textContent = `"${advice}"`;
    })
    .catch((error) => {
      idAdvice.textContent = "Please try again";
      textAdvice.textContent = error.message;
    });
}

window.addEventListener("load", fetchData);
diceBtn.addEventListener("click", fetchData);
