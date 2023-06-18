const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.getElementById("btn");
const color = document.querySelector(".color");

button.addEventListener("click", function () {
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    randomColor+= colors[getRandomNumber()];
  }
  // console.log(hexColor);

  color.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}