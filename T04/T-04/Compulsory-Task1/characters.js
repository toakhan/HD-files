let char=prompt("Enter a character: ");
    console.log("Entered character is: " +char);
    if (char.toLowerCase() != char.toUpperCase()){
        if(char.toUpperCase()===char){
        console.log("char is an uppercase letter: " + char);
        }

        else if (char.toLowerCase()===char){
        console.log ("char is a lowercase letter: " + char);

        }
    }
        else if (!isNaN(char)){
        console.log ("char is a number: " + char);

        }
    
        else {
        console.log("Entered character is not a letter or a number: " + char);
        }  
     
    