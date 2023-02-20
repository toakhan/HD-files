// Define the higher-order function myFilterFunction with 2 parameters: an array of strings and a callback function
function myFilterFunction(arr, callback) {
    // Create an empty array to hold the filtered words
    let filteredArr = [];
    
    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
      // Check if the current element has 6 letters by invoking the callback function
      if (callback(arr[i])) {
        // If the current element has 6 letters, push it to the filtered array
        filteredArr.push(arr[i]);
      }
    }
  
    // Return the filtered array
    return filteredArr;
  }
  // Define the array of strings to be filtered
  let words = ['apple', 'banana', 'cherry', 'grape', 'kiwi', 'lemon', 'mango', 'orange', 'peach', 'pear'];
  
  // Define the callback function that returns a boolean based on whether a word has 6 letters or not
  function hasSixLetters(word) {
    return word.length === 6;
  }
  
  // Invoke the myFilterFunction with the words array and the hasSixLetters callback function
  let filteredWords = myFilterFunction(words, hasSixLetters);
  
  // Log the filtered words to the console
  console.log(filteredWords);
  