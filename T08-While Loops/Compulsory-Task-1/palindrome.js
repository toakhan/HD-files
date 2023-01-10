//Program to check if an entered word is a Palindrome word.

/*user input for word
first letter == last letter
second letter == second last letter
loop*/

let palindrome = "racecar";
let i = 0
let palindromeCheck=true


while (true){
        firsthalfLetter=palindrome.charAt(i);
        secondhalfLetter=palindrome.charAt(palindrome.length-1-i);
if (firsthalfLetter!=secondhalfLetter) {
        palindromeCheck=false
        break
}

i++
if (i==7){break}
}


palindrome=prompt("Enter a word : ");
      if  (palindromeCheck==false){
        console.log("The entered word is not a palindrome.");
      }else{
        console.log("The entered word is a palindrome.");
      }












/*let userInput = "";
let i = userInput.length;

userInput = prompt("Enter a word : ");
while (i--){
        console.log(userInput[i]);
}

   if (userInput == (userInput[i])){
        console.log("It is a palindrome!.");
   }else{
        console.log("It is not a palindrome!.");  

}



/*
      function isPalindrome(string) {
        let left = 0;
        let right = string.length - 1;
      
        while (left <= right) {
          if (string[left] !== string[right]) return false;
          left++;
          right--;
        }
      
      return true;
      }
*/

/*
let rev = "racecar";

if (rev==num){  //if reverse variable equals to original variable
console.log ("is palindrome");
}else{
console.log("not palindrome");
}
*/

/*
let num = "racecar";
let rev = "";

while (false){
        rev +="";
}

if (rev == num){
console.log ("is palindrome");
}else{
console.log("not palindrome");
}
console.log(num);
*/


//Using 'for' loop to find palindrome word.

/*let string=prompt("Please enter a word:");
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

*/