// T12 - Compulsory-Task-2

/* Write a program that starts by asking the user
to input a word.
The program should log the following manipulations
to the console:
- The word where every second character is
replaced with a "!".
- The word reversed.
- The word where every 6th letter is uppercase.
- An array of the ascii values for each character in the word.
*/

//- The word where every second character is
//replaced with a "!":

let userInput= prompt("Please enter a word, for every second letter conversion to ! : ");
let str = userInput.split('');
let nth = 2; // the nth character to replace
let replaceWith = "!" // the character to replace the nth value
for (let i = 1; i < str.length; i+=2) {
    str[i] = replaceWith
}
alert( str.join("") );
console.log(str);

//- The word reversed:
let word = prompt("Please enter a word to be reversed: ");
let wordLen = word.length;
let revWord = "";
//console.log(word);
//console.log(word[wordLen-1]);

for (let i= wordLen-1; i>=0; i--) {
    console.log(word[i]);
    revWord += word[i];
}
console.log(`Reverse of ${word} is : ${revWord}`);


// The word where every 6th letter is uppercase:
let word1 = prompt("Please enter a word, for every sixth letter conversion to uppercase: ");
 console.log(word1);
let string = ""
let sixth = word1.charAt(5);
for (let i=0; i<=word1.length; i++){
    if (i%6===0){
        string+=word1.charAt(i).toUpperCase()
    }
    else{
        string+=word1.charAt(i).toLowerCase()
    }
}
    console.log (`Every sixth character is uppercase: ${string}`);   


/*
//example
const str1="welcome to everything prog pro"

function customToUpperCase (str){
    return str.split ("").map(value)=> value.slice(0,6).toUpperCase()+value.slice(1).join(" ")

}
console.log(customToUpperCase(str1))


//let rem = string.slice(6)
    //console.log(rem);
//let caps = sixth.toUpperCase() + rem;
    //console.log(`Final ${caps}`);
    
*/
/*
let word = prompt("Enter a word:");
for (let i=5; i < word.length; i+=6) {
let x = word.charAt(i).toUpperCase();
console.log(word);
}
*/

//- An array of the ascii values for each character in the word.

let charCodeArr = [];
let s = prompt("Please enter a word to convert to ASCII code: ");
for(let i = 0; i < s.length; i++){
    let code = s.charCodeAt(i);
    charCodeArr.push(code);
}
//return charCodeArr;
console.log(`The ASCII code for word '${s}' is [${charCodeArr}]`);


