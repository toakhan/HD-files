// T12 - Compulsory-Task-1

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

//Above four lines of code replaces the following
//many lines of code for the same task.

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

let guestNames=[];//defining array
//e.g.  guestNames[0]="John";
//      guestNames[1]="Tom"; etc.

let x=prompt("Please enter number of invited guests:");
        console.log(parseInt("guests invited."));

//Input
for (let i=0; i<=x; i++){
    guestNames[x]=prompt("Please enter name of each guest: ");
        console.log(`Name of each guest is: ${guestNames[x]}`);
       
}

let arrayLength=guestNames.length;
console.log(`guestNames is an array with ${arrayLength} , guests names in it.`);

console.log(arrayLength);
console.log(arrayLength[0]);
console.log(arrayLength[4]);

