console.log("Cześć");

let changeColorButton = document.querySelector(".changeBackground");
let container = document.querySelector(".container");

changeColorButton.addEventListener("click", () => {
  container.classList.toggle("whiteBackground");
});
