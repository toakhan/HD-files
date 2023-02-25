// Define an array of subjects
const subjects = ["Mathematics", "Ethics", "History", "Physics", "Computer Science", "Psychology", "Biology", "Health", "Design", "Economics"];
// Define a variable for subject word length
const wordLength = 6;

// Call the myFilterFunction with subjects and CallBack as arguments and assign the result to a new variable newSubjects
const newSubjects = myFilterFunction(subjects, ChcekLength);

function myFilterFunction(str, checkLength) {
  // Initialize an empty array newSubjects
  const newSubjects = [];
  for (let x = 0; x < str.length; x++) {
    if (checkLength(str[x])) {
      // If the callback function returns true, push the current element of the array into the newSubjects array
      newSubjects.push(str[x]);
    }
  }
  // Return the newSubjects array
  return newSubjects;
}

function ChcekLength(word) {
  // Return true if the length of the subject name is exactly 6 characters long
  return word.length === wordLength;
}

// Log the new subjects to the console in table format
console.table(newSubjects);
