const countdown = 60; // countdown time in seconds
let timer = countdown; // set timer to countdown time initially
let intervalId;

function startTimer() {
  // update timer every second
  intervalId = setInterval(() => {
    // check if timer has reached 0
   if (timer === 0) {
      clearInterval(intervalId); // stop the timer
     // alert("Time's up!"); // show a message when time's up 
    } else {
      timer--; // decrease timer by 1 second
      document.getElementById("timer").innerHTML = timer; // update timer on the webpage
    }
  }, 1000);
}

startTimer(); // start the timer