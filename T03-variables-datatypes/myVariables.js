//T03 - Compulsory Task 1

let myFirstNumber = 7;
let mySecondNumber= 5;
let myFirstString = "Hi there, ";
let mySecondString= "have a good day.";
let myBoolean = (7>5);

let product = (myFirstNumber*mySecondNumber);
console.log(product);

//concatenate two strings
let result = (myFirstString + mySecondString);
console.log (result);

//let result = myFirstString.concat(mySecondString);
//console.log (result);

//Use of template literals in multi line strings
console.log(`My boolean is: ${myBoolean}.`);
console.log(`The first number is: ${myFirstNumber}.`);
console.log(`The second number is: ${mySecondNumber}.`);
console.log(`The product of above two numbers is: ${product}.`);

console.log(`This is my first string: ${myFirstString}.`);
console.log(`This is my second string: ${mySecondString}.`);
console.log(`These two together make: ${result}!`)