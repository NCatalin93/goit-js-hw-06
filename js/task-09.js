function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorCode = document.querySelector(".color");
const bodyColor = document.body.style;

const backgroundColor = document.querySelector(".change-color");

backgroundColor.addEventListener("click", (event) => {
  const randomColor = getRandomHexColor();
  colorCode.textContent = randomColor;
  bodyColor.backgroundColor = randomColor;
});
