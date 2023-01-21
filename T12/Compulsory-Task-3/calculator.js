// T12 - Compulsory-Task-3

/* You are going to create a calculator that
can do a calculation on any two numbers you give it.

You will need to create four functions:
- add - This function will add the two numbers
together.
- subtract - This function will subtract the 
second number from the first number.
- multiply - This function will multiply the
two numbers together.
- divide - This function will divide the first
number by the second number.

- Your calculator should ask the user to 
input the first number, the second number 
and what operation they would like to perform 
on those numbers.

- The program should then log the calculation
and the total to the console.
e.g. if the user inputs 6, 7 and multiply,
the output would be 6 x 7 = 42.
*/


// Program for a simple calculator by
// taking the user input

let number1 = parseFloat(prompt('Please enter first number: '));
let number2 = parseFloat(prompt('Please enter second number: '));

let operator = prompt(" Please enter operator, either add, subtract, multiply or divide : " );

let result;

// using if...else if... else statement
if (operator == 'add') {
    result = number1 + number2;
}
else if (operator == 'subtract') {
    result = number1 - number2;
}
else if (operator == 'multiply') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);

/*
using switch statement/operator
program for a simple calculator
let result;

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
         result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;

    case '-':
         result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;

    case '*':
         result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;

    case '/':
         result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}
*/

/*
let input=prompt("Please enter first number to add: ");
let number1=parseInt(input);
if (isNaN(number1=0)){
    number1=0
}
input=prompt("Please enter second number to add: ");
let number2=parseInt(input);
if (isNaN(number2=0)){
    number2=0
}
//alert(number1+" + "number2) +" = "+(number1+number2) ;
console.log(`The sum of ${number1} and ${number2} is:` + (number1+number2));
*/

/*my first attempt (didn't run):

let num1=prompt("Please enter a number: ");
let num2=prompt("Please enter another number: ");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

let add = (num1+num2);
let subtract = (num1-num2);
let multiply = (num1*num2);
let divide = (num1/num2);

let oper=prompt("Please enter add, subtract, multiply or divide: " );
    console.log(oper);
    if (oper==add) {
        console.log(num1+num2);

      } else if (oper==subtract) {
        console.log(num1-num2);

      } else if (oper==multiply) {
        console.log(num1*num2);
      
    } else (oper==divide) 
        console.log(num1/num2);{

     }
    
*/
