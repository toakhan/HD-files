async function fetchCatGif() {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const apiUrl = 'http://thecatapi.com/api/images/get?format=src&type=gif';
  
  try {
    const response = await fetch(proxyUrl + apiUrl);
    const gifUrl = response.url.replace(proxyUrl, '');
    console.log(gifUrl);
  } catch (error) {
    console.error(error);
  }
}

fetchCatGif();
