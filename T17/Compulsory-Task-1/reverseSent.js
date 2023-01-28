
/*
Reverse a String With Recursion.
For this solution, we will use two methods: 
the String.prototype.substr() method and 
the String.prototype.charAt() method.

The substr() method returns the characters 
in a string beginning at the specified 
location through the specified number 
of characters.

"hello".substr(1); // "ello"

The charAt() method returns the specified 
character from a string.
"hello".charAt(0); // "h"
The depth of the recursion is equal to the 
length of the String. This solution is not 
the best one and will be really slow if 
the String is very long and the stack size 
is of major concern.
*/

function reverseString(str) {
    if (str === "") // This is the terminal case that will end the recursion
      return "";
    
    else
      return reverseString(str.substr(1)) + str.charAt(0);
}
reverseString("hello");

 /*    
  First Part of the recursion method
  You need to remember that you won’t have 
  just one call, you’ll have several 
  nested calls
  
  Each call: str === "?"        	                
  reverseString(str.subst(1)) + str.charAt(0)
  1st call – reverseString("Hello")   
  will return   reverseString("ello") + "h"
  2nd call – reverseString("ello")    
  will return   reverseString("llo")  + "e"
  3rd call – reverseString("llo")     
  will return   reverseString("lo")   + "l"
  4th call – reverseString("lo")      
  will return   reverseString("o")    + "l"
  5th call – reverseString("o")       
  will return   reverseString("")     + "o"
  
  Second part of the recursion method
  The method hits the if condition and 
  the most highly nested call returns 
  immediately
  
  5th call will return reverseString("") + "o" = "o"
  4th call will return reverseString("o") + "l" = "o" + "l"
  3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
  2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
  1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 
  */
  
  //Without comments:
/*
  function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }
  reverseString("hello");

*/
//Conditional (Ternary) Operator:
/*
function reverseString(str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
reverseString("hello");
*/
/*
1. Reverse a String With Built-In Functions
The split() method splits a String object 
into an array of string by separating the 
string into sub strings.
The reverse() method reverses an array 
in place. ...
The join() method joins all elements of 
an array into a string.
*/
/*
Algorithm Challenge
Reverse the provided string.
You may need to turn the string into an 
array before you can reverse it.
Your result must be a string.


function reverseString(str) {
    return str;
}
reverseString("hello");
*/
/*
1. Reverse a String With Built-In Functions
For this solution, we will use three methods: 
the String.prototype.split() method, 
the Array.prototype.reverse() method 
and the Array.prototype.join() method.

The split() method splits a String object 
into an array of string by separating 
the string into sub strings.
The reverse() method reverses an array 
in place. The first array element becomes 
the last and the last becomes the first.
The join() method joins all elements of 
an array into a string.
*/
/*
function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
 
reverseString("hello");

//Chaining the three methods together:
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");

//2. Reverse a String With a Decrementing 
//For Loop

function reverseString(str) {
    // Step 1. Create an empty string that 
    //will host the new created string
    var newString = "";
 
    // Step 2. Create the FOR loop
    */
    /* The starting point of the loop will be 
    (str.length - 1) which corresponds to the 
       last character of the string, "o"
       As long as i is greater than or equals 0, 
       the loop will go on
       We decrement i after each iteration */
  //  for (var i = str.length - 1; i >= 0; i--) { 
   //     newString += str[i]; // or newString = 
        //newString + str[i];
    
    /*
    /* Here hello's length equals 5
        For each iteration: i = str.length - 1 
        and newString = newString + str[i]
        
        First iteration:    i = 5 - 1 = 4,         
        newString = "" + "o" = "o"
        Second iteration:   i = 4 - 1 = 3,         
        newString = "o" + "l" = "ol"
        Third iteration:    i = 3 - 1 = 2,         
        newString = "ol" + "l" = "oll"
        Fourth iteration:   i = 2 - 1 = 1,         
        newString = "oll" + "e" = "olle"
        Fifth iteration:    i = 1 - 1 = 0,         
        newString = "olle" + "h" = "olleh"
        End of the FOR Loop*/
 
    // Step 3. Return the reversed string
    //return newString; // "olleh"

 /*
reverseString('hello');

//Without comments:
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');

*/
/* Notes:

function recurse() {
    // function code
    recurse();
    // function code
}

recurse();


function recurse() {
    if(condition) {
        recurse();
    }
    else {
        // stop calling recurse()
    }
}

recurse();


// program to count down numbers to 1
function countDown(number) {

    // display the number
    console.log(number);

    // decrease the number value
    const newNumber = number - 1;

    // base case
    if (newNumber > 0) {
        countDown(newNumber);
    }
}

countDown(4);


// program to find the factorial of a number
function factorial(x) {

    // if number is 0
    if (x === 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}

const num = 3;

// calling factorial() if num is non-negative
if (num > 0) {
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}

//explanation:
factorial(3) returns 3 * factorial(2)
factorial(2) returns 3 * 2 * factorial(1)
factorial(1) returns 3 * 2 * 1 * factorial(0)
factorial(0) returns 3 * 2 * 1 * 1


function countDownFrom(number) {
	for (let i = number; i > 0; i--) {
		console.log(i);
	}	
}

/*
This one contains both algorithmic steps.

✅ Take one parameter called number.
✅ Log everything from number to 0.


//Recursive approach:
function countDownFrom(number) {
	if (number === 0) {
		return;
	}

    console.log(number);    
    countDownFrom(number - 1);
}


This one also passes.

✅ Take one parameter called number.
✅ Log everything from number to 0.

So conceptually the two approaches are the 
same. However, they get the job done in 
different ways.
*/

