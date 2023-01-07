        //T08 - Compulsory-Task 3

/*let correctAns = "c"; 
let a = "a";
let b = "b";
let c = "c";
let d = "d";
let count = 0;
*/


let userInput = ""

do {
   userInput= prompt("What color is the Sky? \na: Purple \nb: Pink \nc: Blue \nd: Yellow. Enter a, b, c or d : ");
   if (userInput=="c") {
    console.log("That's correct!.")
    
   }else{

    userInput= prompt("Sorry, your answer is incorrect. Would you like to try again? Enter y for yes and n for no:  ");

   }

}
 while (userInput=="y"){
  //  If the user types y for yes, the while loop will go back to line 15 above, to ask question again.
 }
  if (userInput == "n"){
  console.log ("Thank you for taking the quiz.");
  }






 /*if (userInput=="c") {
  console.log("That's correct!.")
  
 }else{

  userInput= prompt("Sorry, your answer is incorrect. Would you like to try again? Enter y for yes and n for no:  ");

 }
   // console.log("That's incorrect!.")
   
  //  let retry = alert("Try again? y/n")

*/


/*let inputCol=prompt("What color is the Sky? \na: Purple \nb: Pink \nc: Blue \nd: Yellow. Enter a, b, c or d : ");
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
