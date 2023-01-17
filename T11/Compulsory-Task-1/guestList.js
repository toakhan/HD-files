// T11 - Compulsory Task 1

let guestNames=[];//defining array
//e.g.  guestNames[0]="John";
//      guestNames[1]="Tom"; etc.

for (let i=0; i<10; i++){
   let guest=prompt("Please enter name of each guest: ");
        guestNames.push(guest)    
}

console.log(guestNames);


//if another guest name is added, the program should
//say, you have already invited 10 guests and 
//give the list of 10 names.


