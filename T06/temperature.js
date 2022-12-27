//Compulsory Task 06 - Capstone project 1 - Temperature Conversion

//Had problems with the data input/output and 
//resolved lots of syntax errors

let C="C";
let F="F";
let K="K";

let convFrom=prompt("In which metric is the temperature, you are converting? Input C for Celsius, F for Fahrenheit or K for Kelvin. Please ensure to use an uppercase letter: " );
console.log("You would like to convert temperature from : " + convFrom);

let inputNum= prompt("Please enter the temperature in degrees : ");
//console.log(`You would like to convert: ${inputNum}${convFrom}`);
console.log("You would like to convert: " + inputNum + convFrom );

let convTo= prompt("To which metric would you like to convert the temperature? Input C for Celsius, F for Fahrenheit or K for Kelvin. Please ensure to use an uppercase letter: ");
console.log(`You would like temperature conversion from: ${inputNum}${convFrom} to ${convTo}`)

let toCfromF = (F-32)*5/9;
let toCfromK = K-273.15;
let toFfromC = C*9/5+32;
let toFfromK = K*9/5-459.67;
let toKfromC = C+273.5;
let toKfromF = (F+459.67)*5/9;

if ((convFrom==C)&&(convTo==F)) {
   console.log(`The temperature conversion is (${parseFloat(inputNum) * 9/5 + 32}) °F`)
}
else if ((convFrom==F)&&(convTo==C)) {
   console.log(`The temperature conversion is (${parseFloat(inputNum) -32*5/9}) °C`)
}
else if ((convFrom==K)&&(convTo==C)) {
   console.log(`The temperature conversion is (${parseFloat(inputNum) -273.15}) °C`)
}
else if ((convFrom==K)&&(convTo==F)) {
   console.log(`The temperature conversion is (${parseFloat(inputNum) *9/5-459.67}) °F`)
}
else if ((convFrom==C)&&(convTo==K)) {
   console.log(`The temperature conversion is (${parseFloat(inputNum) +273.5}) °K`)
}
else if ((convFrom==F)&&(convTo==K)) {
   console.log(`The temperature conversion is (${parseFloat(inputNum)+459.67*5/9 }) °K`)
}
else {
   console.log(`Thank you for using the temperature converter`)
}