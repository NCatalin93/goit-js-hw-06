const categories = document.getElementById("categories");
const items = categories.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);
console.log("");

items.forEach((item) => {
  const headers = item.querySelector("h2").textContent;
  const elements = item.querySelectorAll("ul li").length;
  console.log(`Category: ${headers}`);
  console.log(`Elements: ${elements}`);
  console.log("");
});
