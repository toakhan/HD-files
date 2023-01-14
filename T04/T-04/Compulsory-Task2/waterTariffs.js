//T04 - Compulsory Task 2



let waterUsed = parseInt (prompt("Enter the volume of water used in litres : "));
console.log("Water used in litres : " + waterUsed);

value=0;
waterUsed=parseInt(waterUsed);
waterUsed=waterUsed/1000;

if (waterUsed <= 6) {
    console.log ("Your water bill in Rands is : " + waterUsed*15.73);
}

else if (waterUsed > 6 && waterUsed<= 10.5){
value=6*15.73
waterUsed=parseInt(waterUsed);

    console.log ("Your water bill in Rands is : ") +(waterUsed-6)*22.38 + value;
}

else if (waterUsed > 10.5 && waterUsed<= 35){
    value=6*15.73
    waterUsed=parseInt(waterUsed);
    waterUsed=waterUsed/1000;
    console.log("Your water bill in Rands is : ") + (waterUsed-6)*31.77 +value;
}
else if (waterUsed > 35){
    value=6*15.73
    waterUsed=parseInt(waterUsed);
    waterUsed=waterUsed/1000;
    console.log("Your water bill in Rands is : ") + ((waterUsed-6)*69.76)+value; 
}
else {
    console.log ("Thank You for your custom.");
}



