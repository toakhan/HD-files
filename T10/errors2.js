// This example program is meant to demonstrate errors.
 
// There are some errors in this program, try run the program by pressing F5.
// Now look at the error messages and find and fix the errors.

let animal = "Lion";
let animalType = "cub"; //corrected indentation.
let numberOfTeeth = 16;
let numberOfLegs = 4; //removed "" from 4, which is a number and not a string.

let fullSpec = `This is a ${animal}. It is a ${animalType} and it has ${numberOfTeeth} teeth`
//To variable fullSpec, added let, concatenation, $ {}, after correcting variables spellings and animalType.
//A mix of syntax, logical and runtime errors.
if (numberOfLegs = 4) { // logical error, variable 'numberOfLegs' value changed from 3 to 4.
console.log (fullSpec);
}
