const quote = document.getElementById("quote");
const author = document.getElementById("author");

function quotes() {
  fetch("https://api.quotable.io/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      quote.innerHTML = data.content;
      author.innerHTML = data.author;
    });
}

quotes();
setInterval(quotes, 10000);
