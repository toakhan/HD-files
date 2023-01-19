// T12 - Compulsory-Task-2

/* Write a program that starts by asking the user
to input a word.
The program should log the following manipulations
to the console:
- The word where every second character is
replaced with a "!".
- The word reversed.
- The word where every 6th letter is uppercase.
- An array of the ascii values for eachcharacter in the word.
*/

//let userInput= prompt("Please enter a word: ");

let str = "abcdefoihewfojias".split('');
let nth = 2; // the nth character to replace
let replaceWith = "!" // the character to replace the nth value
for (let i = nth-1; i < str.length-1; i+=nth) {
    str[i] = replaceWith;
}
alert( str.join("") );