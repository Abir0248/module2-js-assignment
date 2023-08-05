const button = document.getElementById("changeContentBtn");
const contentDiv = document.getElementById("contentDiv");

button.addEventListener("click", () => {
  contentDiv.textContent = "New message or image displayed!";
});
