let printValuesOf = (jsObject, keys) => {
  for (let i = 0; i <= keys.length; i++) {
    let key = keys[i];
    console.log(jsObject[key]);//changed k to key
  }
}

let simpsonsCatchphrases = {
  lisa: 'BAAAAAART!',
  bart: 'Eat My Shorts!',
  marge: 'Mmm~mmmmm',
  homer: 'd\'oh!', //added \ to include single quote inside the string
  maggie: '(Pacifier Suck)',
};

printValuesOf(simpsonsCatchphrases, ['lisa', 'bart', 'homer']);
//Created an array for all the names as second parameter
// Expected console output:

// BAAAAAART!
// Eat My Shorts!
// d'oh!

// Returns undefined