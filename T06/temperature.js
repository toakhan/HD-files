




let convFrom=prompt("In which metric is the temperature, you are converting? Input C for Celsius, F for Fahrenheit or K for Kelvin: " );
console.log("You would like to convert temperature from : " + convFrom);

let inputNum= prompt("Please enter the temperature in degrees : ");
//console.log(`You would like to convert: ${inputNum}${convFrom}`);
console.log("You would like to convert: " + inputNum + convFrom );

let convTo= prompt("To which metric would you like to convert the temperature? Input C for Celsius, F for Fahrenheit or K for Kelvin: ");
console.log(`You would like temperature conversion from: ${inputNum}${convFrom} to ${convTo}`)

