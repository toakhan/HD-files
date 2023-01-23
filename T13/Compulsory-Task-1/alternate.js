
alternativeString = (myString) => {
    // Place your code here
   
    let chars = myString.split("");
       
    for(let i=0; i<chars.length; i++){
      
        chars[i]=chars[i].toLowerCase();
    }   
    for(let i=0; i<chars.length; i=i+2){

        chars[i]=chars[i].toUpperCase();
      
    }
    return chars.join("");
}


/*
alternativeString = (myString) => {
    let string = "";
    for (let i=0; i<myString.length; i++){
        if(i%2===0){
            string+=myString[i].toUppercase();
        }else{
            string+=myString[i].toLowercase();
        }
    } //return string
}
*/

// DO NOT EDIT BELOW THIS LINE
let testStrings = [
    "Hello World",
    "Hello",
    "HELLO",
    "Software Engineering is Fun",
    "I like Javascript",
    "clown case"
]

let correctStrings = [
    "HeLlO WoRlD",
    "HeLlO",
    "HeLlO",
    "SoFtWaRe eNgInEeRiNg iS FuN",
    "I LiKe jAvAsCrIpT",
    "ClOwN CaSe"
]

for (let strIdx = 0; strIdx < testStrings.length; strIdx++) {
    let test = testStrings[strIdx];
    let correct = correctStrings[strIdx];

    let got = alternativeString(test);

    if (got == correct) {
        console.log(`${strIdx + 1}: Testing ${test}: Correct!`);
    } else {
        console.log(`${strIdx + 1}: Testing ${test}: Wrong, got ${got}, expected ${correct}`);
    }
}
