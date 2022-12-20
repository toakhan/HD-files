//T03 - Compulsory Task 2: Fortune Teller

let motherFirstName=prompt("What is your mother's first name?");
console.log(motherFirstName);
let streetName= prompt("Please tell the name of the street you grew up on?");
console.log(streetName);
let favColor=prompt("What is your favorite color?");
console.log(favColor);
let currentAge=prompt("What is your current age?");
console.log(currentAge);
let aNumber=prompt("Please choose a number between 1 and 10?");
console.log(aNumber);

let text = `In ${aNumber} years, you are going to
to meet your best friend named ${motherFirstName + streetName}.

You will get married in ${currentAge/aNumber} years and
have ${currentAge%aNumber} children.

In ${currentAge-aNumber} years you are going to
dye your hair ${favColor}.`

console.log (text);