//Create a while loop that will display
//a countdown from 20 to 0.

let i = 20;
while (i > 0) {
  console.log(i);
  i = i - 1;
}

let countdown = 20;
while (countdown > 0) {
  console.log(countdown);
  countdown = countdown - 1;
}

//Create a loop (any kind) that will display
//all the even numbers between 1 and 20.

for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

for (let x = 0; x <= 20; x++) {
  if (x === 0) {
    console.log(x + " is even");
  } else if (x % 2 === 0) {
    console.log(x + " is even");
  }
  //  else      console.log(x + "is odd");
  //   }
}

//Create a loop (any kind) that will produce
//the following output:
/*
 *
 **
 ***
 ****
 *****
 */

let x = "*";
for (let i = 1; i <= 5; i++) {
  //will run for i=1 then i=2 till i=5.
  console.log(x);
  x += "*"; //This statement should be in the current position, after console.log(x) and not above it, otherwise got wrong result.

  console.log("<br>");
}
