let counter = 0;
const value = document.getElementById("value");
const increase = document.querySelector(`[data-action="increment"]`);
const decrease = document.querySelector(`[data-action="decrement"]`);
increase.addEventListener("click", (event) => {
  value.textContent = counter += 1;
});
decrease.addEventListener("click", (event) => {
  value.textContent = counter -= 1;
});
