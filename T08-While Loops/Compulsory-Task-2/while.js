
let sum = 0;
let inputNum = 0;
let count = 0;
let avg= 0;

while (count < 5) {

    let inputNum=parseInt(prompt("Please enter a number: "));
    console.log (inputNum);

    sum = (sum + inputNum);
    count += 1 //count = count + 1

}
 avg = sum/5;
 console.log (avg);
