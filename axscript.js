const dataContainer = document.getElementById("dataContainer");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      dataContainer.innerHTML += `<p>Title: ${item.title}</p><p>Desc: ${item.body}</p><hr>`;
      console.log(item);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
