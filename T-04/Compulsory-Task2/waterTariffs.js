T04 - Compulsory Task 2

let waterUsed = prompt (Enter the volume of water used in litres : ");
console.log("Water used in litres : " + waterUsed);

if (waterUsed <= 6000) {
    console.log("Your water bill in Rands is : " + waterUsed*15.73);
}
else if (waterUsed > 6000 <= 10500){
    console.log("Your water bill in Rands is : " + waterUsed*22.38); 
}
else if (waterUsed > 10500 <= 35000){
    console.log("Your water bill in Rands is : " + waterUsed*31.77);
}
else if (waterUsed > 35000){
    console.log("Your water bill in Rands is : " + waterUsed*31.77); 
}
else {
    console.log ("Thank You for your custom.");
}



