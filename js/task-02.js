const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const liElem = document.getElementById("ingredients");
ingredients.forEach((ingredient) => {
  const addItem = document.createElement("li");
  addItem.textContent = ingredient;
  addItem.classList.add("item");
  liElem.append(addItem);
});
