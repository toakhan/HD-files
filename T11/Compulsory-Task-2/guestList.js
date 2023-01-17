//T11 - Compulsory-Task-2

let guestNames=[];//defining array
//e.g.  guestNames[0]="John";
//      guestNames[1]="Tom"; etc.

for (let i=0; i<10; i++){
   let guest=prompt("Please enter name of each guest: ");
        guestNames.push(guest)    
}

console.log(guestNames);

let choice=prompt("We have invited 10 guests, would you like to replace one guest? y/n ");
if (choice == "y"){
    let replace= prompt ("Current guests are " + guestNames + "who do you want to replace?");
    let index=guestNames.indexOf(replace);
    let newGuest=prompt("Please enter the name of new guest: " );
    guestNames[index]=newGuest


}