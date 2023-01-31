

//let time = parseInt(distance/speed);
//let speed = parseInt(distance/time);
//let distance = parseInt(speed*time);

let distance = 0;
let time = 0;
let speed = 0;

let choice = prompt("Please choose, either distance, time or speed to calculate ?");
console.log(choice)

try{
if (choice=="distance"){
    distance = prompt("Please enter distance in miles: ");
    distance = parseInt(distance);
    console.log(`distance = (${speed*time})`)

}else if
    (choice=="time"){
        time = prompt("Please enter time in hours: ");
        time = parseInt(time);
        console.log(`time = (${distance/speed})`) 

}else if (choice=="speed"){

        speed = prompt("Please enter speed in mph: ");
        speed = parseInt(speed);
        console.log(`speed = (${distance/time})`)
}
} catch(err){

    console.log(err)

}


/*
function main() {
    let distance = parseInt(readLine(), 10);
    //your code goes here
    let speed = 40;
    let time = distance/speed*60;
    console.log(time)
   return time;
} 
main();


let speed = function main() {
    let distance = parseInt(readLine(), 10);
    //your code goes here
    let speed = 40;
    let time = distance/speed*60;
    console.log(time)
   return time;
} 

main();
var rate = prompt('how fast plan to drive (in mph)');
rate = parseInt(rate);
var time = prompt('how much time do you plan to drive? (in minutes)');
time = parseInt(time);


var distance = function(rate, time) {
    return rate * time;
}

var rate = prompt('how fast plan to drive (in mph)');
rate = parseInt(rate);
var time = prompt('how much time do you plan to drive? (in minutes)');
time = parseInt(time);
d = distance(rate, time);
alert("You traveled "+d+" miles");
*/


/*
if (condition) {
      block of code to be executed if the condition is true
  } else {
      block of code to be executed if the condition is false
  }
*/
