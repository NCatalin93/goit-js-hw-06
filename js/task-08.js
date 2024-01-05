const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const fieldValue = {},
    forms = event.target;
  for (const form of forms.elements) {
    if (form.type == "submit") continue;
    if (form.value == "") {
      alert("All fields must be filled");
      return;
    }
    fieldValue[form.name] = form.value;
  }
  console.table(fieldValue);
  forms.reset();
}
