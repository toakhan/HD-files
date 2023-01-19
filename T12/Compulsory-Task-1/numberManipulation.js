// T12 - Compulsory-Task-1

/*
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
    

    var max=nums[0];

    for(let i=0; i<nums.length; i++){
        if (nums[i]>=max){
            max=nums[i];
            console.log("Setting max to: " + max);
        }
    }
    console.log("Maximum value: " + max);

    var min=nums[0];

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
*/





//e.g. simmy sigma ut:

//To find the maximum value in an array:

let nums= [70,65,3,21,58,93,12,82,15,34,73,2,120];

let max=nums[0]; //index 0 value is 70
//i=0 means value is 70, which at first loop i=1
//i=1 is compared to 65, 70 is > 65 (true), so
//loop goes second time at i=2 to third index
//element 3 and the condition is true again
//i.e. 70 is > than 3. At 5th loop, 70!<93 
//condition becomes false, so loop stops.

for(let i=0; i<nums.length; i++){
    if (nums[i]>max){
        max=nums[i];
        console.log("Setting max to: " + max);
    }
}
console.log(max);


//To find the min value, copy & paste the above
//code and change max to min and > to <.
