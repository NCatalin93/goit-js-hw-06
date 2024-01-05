document
  .getElementById("validation-input")
  .addEventListener("blur", updateInput);

function updateInput() {
  const inputName = this;
  const lengthName = parseInt(inputName.getAttribute("data-length"), 10);
  const inputValue = inputName.value.trim();
  const inputValididation = inputValue.length === lengthName;

  if (inputValididation) {
    inputName.style.borderColor = "#4caf50";
  } else {
    inputName.style.borderColor = "#f44336";
  }
}
