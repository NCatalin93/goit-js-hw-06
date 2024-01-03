const outputName = document.getElementById("name-output");
document.getElementById("name-input").addEventListener("input", (event) => {
  outputName.textContent = event.target.value || "Anonymous";
});
