const imageElement = document.getElementById("imageElement");
const image1Button = document.getElementById("changeToImage1");
const image2Button = document.getElementById("changeToImage2");

image1Button.addEventListener("click", () => {
  imageElement.src = "image1.jpg";
});

image2Button.addEventListener("click", () => {
  imageElement.src = "image2.jpg";
});
