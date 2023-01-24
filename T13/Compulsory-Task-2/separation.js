   // Place your code here

separationString = (myString) => {
 
    myString.split(/\s/); //.join('<br>');

    return myString;

    }

/*example
    string to array function: str.split();
    array to string: arr.join();

    let sentence = "Hello my name is Ronny";
    let words = sentence.split(" ").sort();
        console.log(words);
    let chars = sentence.split ("name");
        console.log(chars);
    let chars1 = sentence.split ("");
        console.log(chars1);
*/


// DO NOT EDIT BELOW THIS LINE
let testStrings = [
    "Hello World",
    "Hello",
    "HELLO",
    "Software Engineering is Fun",
    "I like Javascript",
    "Line1 Line2 Line3 Line4 Line5 Line6 Line7 Line8 Line9"
];

console.log("------------------------------------------------")

testStrings.forEach((sentence) => {
    let sep = separationString(sentence);
    console.log(sep);
    console.log("------------------------------------------------")

});
