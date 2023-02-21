// Code for Compulsory Task 1:

// setting variables to hold the intervalID
// and also a counter
let intervalID;
let counter = 0;

let startCounter = function() {
  intervalID = setInterval(() => {
    // increment the counter
    counter++;
    // log the counter to the console
    console.log(counter);
  }, 1000);
}

function stopCounter() {
  clearInterval(intervalID);
}

let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');

// add the startCounter function as the callback for the start button click event
startButton.addEventListener("click", startCounter);

// add the stopCounter function as the callback for the stop button click event
stopButton.addEventListener("click", stopCounter);


/*
// setting variables to hold the intervalID
// and also a counter
let intervalID;
let counter = 0;

let startCounter = function() {
    intervalID = setInterval(
        //create the logic needed in the setInterval() function for
        //incrementing the counter and outputting to the console
    );
}

function stopCounter() {
    // add the logic required to stop the counter
    // using clearInterval()
}

let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');

// the event listener is missing a callback function argument
// this button should start the outputting of the counter to the console
startButton.addEventListener("click", );

// the event listener is missing a callback function argument
// this button should the counter from outputting to the console
stopButton.addEventListener("click", );

*/