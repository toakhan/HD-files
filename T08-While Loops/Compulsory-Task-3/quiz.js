// T-08 - Compulsory Task 3

/*let correctAns = "c";
let a = "a";
let b = "b";
let c = "c";
let d = "d";
let count = 0;

do {
    prompt("What color is the Sky? \na: Purple \nb: Pink \nc: Blue \nd: Yellow. Enter a, b, c or d : ");
    
    count= count+1;
 while (correctAns != "c");
    console.log("That's incorrect!.")}
   
    let retry = alert("Try again? y/n")

if (retry == y) {
    count ++;
}
else if (retry == n) {
    break [label];
}
else (answer === c) {
    console.log("That's correct !");
}




let inputCol=prompt("What color is the Sky? \na: Purple \nb: Pink \nc: Blue \nd: Yellow. Enter a, b, c or d : ");
console.log(`You have entered ${inputCol}.`);

let c = "c"
let y = Boolean (true);
let n = Boolean (false);

if (inputCol !== c){
console.log ("Answer is incorrect. Try again?");
let yesNo = prompt("To try again, enter 'y' for yes or 'n' for no : ");
}else if (yesNo == y){
//let reTry = prompt("What color is the Sky? \na: Purple \nb: Pink \nc: Blue \nd: Yellow. Enter a, b, c or d : ");

}else if (yesNo == n){
    console.log ("Thank you for taking the quiz.");

}else
console.log ("Answer is correct.");

*/
//from example(3).js to run
/*let i = 0;
while (i < 10) {
    console.log("The number is " + i);
    if (i < 9) {
        console.log("The value for i is now: " + i);
        console.log("The condition (i < 10) is, therefore, still TRUE so this loop will run again!");
    } else {
        console.log("The value for i is now: " + i);
        console.log("The condition (i < 10) will be FALSE with the next test so this loop will now terminate!!");
        console.log("GOODBYE");
    }
    i++;
}
console.log();
*/
// ============ Example 2 ============
console.log("Example of a do while loop:");
let j = 0;

do {
    console.log("The number is " + j);
    j++;
} while (j < 10);
console.log();
// ============ For loop ============
// This loop will keep repeating for a predetermined number of times. 

// ============ Example 3 ============
/*
console.log("Example of a for loop 'for (l = 0; l < 5; l++)':");
for (let l = 0; l < 5; l++) {
    console.log("The number is " + l);
}
console.log();
//=============Nested Loop =====================
/*The following code will output a rectangle of *s.
The dimensions of the rectangle are determined by the variables
numRows (which stores the number of rows that will be printed) and 
numColumns (which stores the number of columns that will be printed) */

// ============ Example 4 ============
let numRows = 5;
let numColumns = 10;
let strRowOutput = "";

for (let row = 1; row <= numRows; row++) {
    for (let column = 1; column <= numColumns; column++) {
        strRowOutput += "*";
    }
    console.log(strRowOutput);
    strRowOutput = "";
}
console.log();

/*The following code will output a rectangle of *s similar to the one created above
BUT instead of having a solid pattern printed, we want to only print the border of the 
rectangle. E.g. output should be 
**********
*        *
*        *
*        *
********** 

instead of 

**********
**********
**********
**********
**********

*/
/*
for (let row = 1; row <= numRows; row++) {
    for (let column = 1; column <= numColumns; column++) {
        if (
            row === 1 ||
            row === numRows ||
            column === 1 ||
            column === numColumns
            ) {
            //Notice how we make use of the OR logical operator here.
            strRowOutput += "*";
        } 
        else {
            strRowOutput += " ";
        }
    }
    console.log(strRowOutput);
    strRowOutput = "";
}

*/
// ****************** END OF EXAMPLE CODE ********************* 



    







