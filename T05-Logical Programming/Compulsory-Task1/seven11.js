// T05-Compulsory Task 1

let num=prompt("Please enter a number : ");

    if ((num % 7===0) && (num%11===0)) {
        console.log("Number is divisible by both 7 and 11 with remainder 0");

}else{
        console.log("Number is not divisible by both 7 and 11");
}
    
    if (num % 11===0) {
        console.log("Number is divisible by 11");
}else{
    console.log("Number is not divisible by 11");
    }

    if (num % 7===0) {
        console.log("Number is divisible by 7");
}else{
    console.log("Number is not divisible by 7");
    }


    if (!(num % 7===0) && !(num % 11===0)) {
        console.log("Number is neither divisible by 7 nor by 11");

}else{
        console.log("Number is either divisible by 7 or by 11");
}