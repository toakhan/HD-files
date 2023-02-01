

let distance = 0;
let time = 0;
let speed = 0;

let choice = prompt("Please choose, either distance, time or speed to calculate ?");
console.log(choice)
//Using try and catch method statements
//with a throw statement as follows:
try{
    if (choice!=="time"&& choice!=="speed"&& choice!=="distance"){
        throw "Please choose, either distance, time or speed to calculate ?"
    }

//Tried running the program with numbers input,
//instead of strings input and vice versa. 
//Errors were caught and messages thrown. 

if (choice=="distance"){
    time = prompt("Please enter time in hours: ");
    speed = prompt("Please enter speed in mph: ");
    time=parseFloat(time)
    speed=parseFloat(speed)
    distance = parseFloat(time*speed);
    console.log("distance = " + distance + " miles");

}else if
    (choice=="time"){
        distance= prompt("Please enter distance in miles: ");
        speed= prompt("Please enter speed in mph: ");
        distance= parseFloat(distance);
        speed= parseFloat(speed);
        time = parseFloat(distance/speed);
        console.log("time = " + time + " hours");

}else if (choice=="speed"){
        distance = prompt("Please enter distance in miles: ");
        time = prompt("Please enter time in hours: ");
        distance = parseFloat(distance);
        time = parseFloat(time)
        speed = parseFloat(distance/time)
        console.log("speed = " + speed +  " miles per hour");
}
} catch(err){

    console.log(err)

}




