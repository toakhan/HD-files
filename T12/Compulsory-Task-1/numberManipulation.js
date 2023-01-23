// T12 - Compulsory-Task-1


let nums = [];
    let N = 10;
  
    let i = 0, s = 0;
    for(i = 0; i <= N - 1; i++)
    {
        nums[i] = parseInt(prompt("Enter your numbers: "));
        s += nums[i];
        console.log("Number you chose: " + nums[i] + "<br />");
    }

    console.log("Total: " + s)
    let ave = s / N;
    console.log("Average: " + ave + "<br />");
    

    let max=nums[0];

    for(let i=0; i<nums.length; i++){
        if (nums[i]>=max){
            max=nums[i];
            console.log("Setting max to: " + max);
        }
    }
    console.log("Maximum value: " + max);

    let min=nums[0];

    for(let i=0; i<nums.length; i++){
        if (nums[i]<=min){
            min=nums[i];
            console.log("Setting min to: " + min);
        }
    }
    console.log("Minimum value: " + min);


    nums.sort(function(a, b){return a-b});
    console.log(nums)

    let median=(nums[4]+nums[5])/2
    console.log("Median: " + median);


//e.g. simmy sigma ut:

//To find the maximum value in an array:
/*
let nums= [70,65,3,21,58,93,12,82,15,34,73,2,120];

let max=nums[0]; 
//Initiaally, i=0 is set to nums index [0] 
//value of 70 at first loop.
//At second loop i=1, 70 is then compared 
//to second index 65, 70 is > 65 (true), so
//the loop goes third time at i=2 to third 
//element 3 and the condition is true again
//i.e. 70 is > than 3. At i=4, 5th loop, 70!>93 
//condition becomes false, so value of max 
//becomes 93. The subsequent each loop checks
//condition for each subsequent number and if 
//a higher number than 93 is encountered then 
//that new value is recordrd in max.

for(let i=0; i<nums.length; i++){
    if (nums[i]>max){
        max=nums[i];
        console.log("Setting max to: " + max);
    }
}
console.log(max);


//To find the min value, copy & paste the above
//code and change max to min and > to <.
*/