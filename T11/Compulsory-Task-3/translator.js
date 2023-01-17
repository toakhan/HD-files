// T11 - Compulsory-Task-3


let translator = new Map();

// We use the .set function to add key-value pairs to the map. 
translator.set("alacrity", "eagerness");
translator.set("stan", "a devoted fan");
translator.set("permaculture", "to combine two words to make a new one");
translator.set("Hellacious", "an awful experience");
translator.set("shero", "a female hero");
translator.set("onboarding", "integrating a new employee in the organization");
translator.set("buka", "a roadside restaurant or a street stall");
translator.set("buzzy", "something that generates excitement");
translator.set("dumpster", "a large rubbish container");
translator.set("eyelessness", "lack of fear or respect for authority");


// We now create a for loop to print the key-value pairs. 
for (let [key,value] of translator) {
    console.log(`The meaning of ${key} is ${value}.`);
}

/*
let key=prompt("Please input a key word to find it's meaning: ");
    console.log(value);

for(let value of translator){
     console.log(value);
} 
*/