const button = document.getElementById("countBtn");
const clickCountElement = document.getElementById("clickCount");

let clickCount = 0;

button.addEventListener("click", () => {
  clickCount++;
  clickCountElement.textContent = clickCount;
});
