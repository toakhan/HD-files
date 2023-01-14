// T11 - Compulsory Task 1

let guestNames=[];//defining array
//e.g.  guestNames[0]="John";
//      guestNames[1]="Tom"; etc.

let x=prompt("Please enter number of invited guests:");
//let guestsList=prompt("Please enter names of ten guests, you would like to invite: ");
//console.log(guestNames);

//Input
for (let i=0; i<=x; i++){
    guestNames[i]=prompt("Please enter name of each guest: ");
        console.log(`Name of each guest is: ${guestNames[i]}`);
}
/*let guestList=["Tom","Sue","Joe","Alice","Jack","Jason","Adam","Ali","David","Amanda"];
console.log(`You have invited ${guestList} to your party`);

let arrayLength=guestList.length;
console.log(`Guests list is an array with ${arrayLength} , guests names in it.`);
*/