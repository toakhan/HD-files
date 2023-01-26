

function rot15(str){ //LBH QVQ VG1

    let solved = "";

    for (let i=0; i<str.length; i++){

    
        let asciiNum = str[i].charCodeAt();
        if (asciiNum>= 65 && asciiNum <= 75||asciiNum>= 97 && asciiNum <=107) {
            solved += String.fromCharCode(asciiNum + 15);

        }else if (asciiNum>= 76 && asciiNum<=90||asciiNum>= 108 && asciiNum<=122){
            solved += String.fromCharCode(asciiNum-11);
        }else{
           solved+=String.fromCharCode(asciiNum)
        }     
    }
        return solved;
  }

rot15("HOPE YOU are keeping well AND HAPPY");



/*function encrypt(msg, key)
{
    let encMsg = "";

    for(let i = 0; i < msg.length; i++)
    {
        let code = msg.charCodeAt(i);

        // Encrypt only letters in 'A' ... 'Z' interval
        if (code >= 65 && code <= 65 + 26 - 1)
        {
            code -= 65;
            code = mod(code + key, 26);
            code += 65;
        }

        encMsg += String.fromCharCode(code);
    }

    return encMsg;
*/

/*
function rot3(str) {
    let regex = /[\W]/g
    return str.split('').map(i => regex.test(i)
  /  ? i
    : String.fromCharCode(i.charCodeAt() + 3 > 90 
/   ? (i.charCodeAt() + 3 - 26) 
      : i.charCodeAt() + 3)
    ).join("")
  }
  
  console.log(rot3("COBB"))

*/
/*
  function rot15(str) {
    let regex = /[\W]/g
    return str.split('').map(i => regex.test(i)
   / ? i
    : String.fromCharCode(i.charCodeAt() + 15 > 90 
   /   ? (i.charCodeAt() + 15 - 26) 
      : i.charCodeAt() + 15)
    ).join("")
  }
  
  console.log(rot15("OANN"))
*/

/*
function
rot13(str) {
    
    let alphabets =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'," ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
    
    let alphabets13 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M', " ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
    
    var resultStr = [];
    for(let i=0; i<str.length; i++){
        for(let j =0; j<alphabets.length; j++){
            if(str[i] === alphabets[j]){
            resultStr.push(alphabets13[j]);
            }
        }
    }
    return resultStr.join("");
  };

  rot13("SERR CVMMN!");
*/
/*
  // Function will implement Cipher to
// encrypt / decrypt the msg by shifting the letters
// of the message acording to the key

    function caesar(str) {

        str = str.split("")
        str = str.map(char => {
                                
            let code = char.charCodeAt(0)
    
            if( (code > 64 && code < 78) || (code > 96 && code < 110) )
                code += 13
    
            else if ( (code > 77 && code < 91) || (code > 109 && code < 123) )
                code -= 13
            
            return String.fromCharCode(code)
        })
    
        return str.join("")
    }

*/

//Different approach
/*
Also - if your text might contain 
some special symbols, i would suggest 
taking the initial value from ASCII table. 
It will cover all the symbols plus differ 
lowercase and uppercase letters. 
And you don't need to store that array.

var value = yourChar.charCodeAt(0);
To get symbol back from the ascii code, 
go var symbol = value.fromCharCode();
*/
/*
function cypher() {    //caesarCipher() {
    let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let shift = 3;
    let outputString = "";
  
    let userString = prompt("Please enter a letter to cipher code: ");
  
    for (let count = 0; count < userString.length; count++) {
      const character = userString[count];
      const letterIndex = letters.indexOf(character);
      const newIndex = (letterIndex + shift) % 26;
      const newCharacter = letters[newIndex];
      outputString = outputString + newCharacter;
    }
  
    console.log (outputString);
  }
*/
/*
  const caesar = function(word, num) {
    let solved = ""
    num = (num%26 + 26) % 26;
    for (let i = 0; i < word.length ; i++) {
      let ascii = word[i].charCodeAt();
      if ((ascii >= 65 && ascii <= 90)) {
        solved += String.fromCharCode((ascii - 'A'.charCodeAt(0) + num)%26 
          + 'A'.charCodeAt(0)) ;
      } else if(ascii >= 97 && ascii <= 122){
          solved += String.fromCharCode((ascii-'a'.charCodeAt(0) + num) % 26 
         + 'a'.charCodeAt(0));
      } else {
          solved += word[i]
      }
   }
   return solved;
  }
  console.log(caesar("abcdefghijklmnopqrstuvwxyzABCDEFGHI", 7));
  */