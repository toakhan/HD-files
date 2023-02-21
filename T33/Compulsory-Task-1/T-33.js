const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = 'https://www.affirmations.dev/';
fetch(proxyUrl + apiUrl)
  .then(response => response.json())
  .then(data => {
    const affirmation = data.affirmation;
    console.log(affirmation);
  })
  .catch(error => console.error(error));
