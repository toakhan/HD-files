// T12 - Compulsory-Task-1

let nums = new Array();
    let N = prompt("How many numbers would you like to enter? ");
    N = parseInt(N);
    let i = 0, s = 0;
    for(i = 0; i <= N - 1; i++)
    {
        nums[i] = parseInt(prompt("Enter your numbers: "));
        s += nums[i];
        console.log("Number you chose: " + nums[i] + "<br />");
    }
    let ave = s / N;
    console.log("Average: " + ave + "<br />");



/*
let numbers=[]
for (i=0;i<10;i++){
    userInput =Number(prompt("Please enter 10 numbers: "));
        numbers.push(userInput)
    
}
console.log(numbers);
   
var count = 0;
var input;
var sum = 0;

        count++;
        input = prompt("Enter a number");
        sum += input;
        sum = parseInt(sum);
    
        average = (sum/count);
alert("Average number is " + average);

*/



/*Find the total of all the numbers and log the result to the console.
function hello() {
    var arr = [];

    for (var i = 0; i < 10; i++) {
        arr.push(prompt('Enter number' + (i+1)));
    }        

    var total = 0;

    for(i=0; i<arr.length; i++) {
        var number = parseInt(arr[i], 10);
        total += number;
    }

    console.log(total);
}

*/

//Find the index of the maximum and log the result to the console.
let max=0
//pseudo
//if array[i]>max;
//then we run for loop



//Find the index of the minimum and log the result to the console.




//Calculate the average of the numbers and round off to 2 decimal places.
//log the result to the console.
//for loop



//Find the median number and log the result
//to the console.


/*
let name1 = "Nkosi";
let age1 = 25;
alert("Hello World! I'm " + name1 + " I am " + age1 + " years old.");
console.log("Hello World! I'm " + name1 + " I am " + age1 + " years old.");


const name2 = "Bethany";
const yearOfBirth2 = 1994;
const thisYear2 = new Date().getFullYear();
const age2 = thisYear2 - yearOfBirth2;
alert("Hello World! I'm " + name2 + " I am " + age2 + " years old.");
console.log("Hello World! I'm " + name2 + " I am " + age2 + " years old.");


function calculateAge(birthYear) {
    const thisYear = new Date().getFullYear();
    const age = thisYear - birthYear;
    return age;
}

function displayMessage(name, age){
    alert("Hello World! I'm " + name + " I am " + age + " years old.");
    console.log("Hello World! I'm " + name + " I am " + age + " years old.");
}

displayMessage("Bethany", calculateAge(1994));
displayMessage("Timothy", calculateAge(2000));
displayMessage("Jack", calculateAge(1986));
displayMessage("Eric", calculateAge(1991));

Above four lines of code replaces the following
many lines of code for the same task.
*/
/*
let name3 = "Bethany";
let yearOfBirth3 = 1994;
const thisYear3 = new Date().getFullYear();
let age3 = thisYear3 - yearOfBirth3;
alert("Hello World! I'm " + name3 + " I am " + age3 + " years old.");
console.log("Hello World! I'm " + name3 + " I am " + age3 + " years old.");

name3 = "Timothy";
yearOfBirth3 = 2000;
age3 = thisYear3 - yearOfBirth3;
alert("Hello World! I'm " + name3 + " I am " + age3 + " years old.");
console.log("Hello World! I'm " + name3 + " I am " + age3 + " years old.");

name3 = "Jack";
yearOfBirth3 = 1986;
age3 = thisYear3 - yearOfBirth3;
alert("Hello World! I'm " + name3 + " I am " + age3 + " years old.");
console.log("Hello World! I'm " + name3 + " I am " + age3 + " years old.");

name3 = "Eric";
yearOfBirth3 = 1991;
age3 = thisYear3 - yearOfBirth3;
alert("Hello World! I'm " + name3 + " I am " + age3 + " years old.");
console.log("Hello World! I'm " + name3 + " I am " + age3 + " years old.");

*/



