// Fetch a random Chuck Norris joke from the API
fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => response.json())
  .then((data) => {
    // Update the joke container with the joke text
    const jokeContainer = document.getElementById("joke-container");
    jokeContainer.innerHTML = `<p>${data.value}</p>`;
  })
  .catch((error) => {
    console.error(error);
    // Update the joke container with an error message
    const jokeContainer = document.getElementById("joke-container");
    jokeContainer.innerHTML = "<p>Failed to fetch joke</p>";
  });
