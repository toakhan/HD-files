//Program to check if an entered word is a Palindrome word.

let string=prompt("Please enter a word:");
console.log(string);

let len = string.length;


//length of string (entered word) is split in half, both parts are then compared.
// First part is iterated through for loop:
for (let i = 0; i < len/2 ; i++) {
console.log(i);
//console.log(string[i]); To check ordered list.

//Second part of the string (entered word), is listed in reverse order:
console.log(string[len-1-i]);

//String (entered word) both parts are compared for equality:
    if(string[i]!=string[len-1-i]){
        msg="It is not a palindrome word.";
}else
        msg="It is a pallindrome word.";
}
console.log(`${string}: ${msg}`);