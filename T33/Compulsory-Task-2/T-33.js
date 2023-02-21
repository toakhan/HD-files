fetch('https://pokeapi.co/api/v2/pokemon/squirtle')
  .then(response => response.json())
  .then(data => {
    console.log(`Name: ${data.name}`);
    console.log(`Weight: ${data.weight}`);
    console.log('Abilities:');
    console.log(data.abilities);
  })
  .catch(error => console.error(error));

  
