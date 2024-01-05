const fontSize = document.getElementById("font-size-control");
const textContent = document.getElementById("text");

fontSize.addEventListener("input", updateSize);

function updateSize() {
  const fontSizeValue = fontSize.value;
  textContent.style.fontSize = `${fontSizeValue}px`;
}
