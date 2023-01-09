// This example program is meant to demonstrate errors.
 
// There are some errors in this program.
// Now look at the error messages and find and fix the errors.


console.log ("Welcome to the error program");//syntax error - round brackets missing.
    console.log \n; // syntax error - capital C in console replaced with small c. new line \n without quotes.

    let ageStr = "24 years old"; //== should be = to assign variable
    age = parseInt(ageStr) // parseInt is used instead of Integer.
    console.log("I'm"+age+"years old.");
    
    
    //let three = 3;// number 3 should be a number without "". Indented.

    let answerYears = (age + 3);// added () 

console.log "The total number of years:" + answerYears;//removed "" from answerYears variable.
answerMonths = (answerYears*12);//changed answer to answerYears. Logical error.
console.log ("In 3 years and 6 months, I'll be " + answerMonths + " months old"); //placed () brackets

//HINT, 330 months is the correct answer




