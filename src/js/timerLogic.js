// (function(){
let progressBar = document.querySelector('.e-c-progress');
// let indicator = document.getElementById('e-indicator');
let pointer = document.getElementById('e-pointer');
let length = Math.PI * 2 * 100;

progressBar.style.strokeDasharray = length;

function update(value, timePercent) {
  const offset = -length - (length * value) / timePercent;
  progressBar.style.strokeDashoffset = -offset;
  pointer.style.transform = `rotate(-${(360 * value) / timePercent}deg)`;
}

//circle ends
let displayOutput = document.querySelector('.display-remain-time');
const setterBtns = document.querySelectorAll('button[data-setter]');

let intervalTimer;
let timeLeft;
let wholeTime = 10; // manage this to set the whole time
let isPaused = false;
let isStarted = false;

update(wholeTime, wholeTime); //refreshes progress bar
displayTimeLeft(wholeTime);

function changeWholeTime(seconds) {
  if (wholeTime + seconds > 0) {
    wholeTime += seconds;
    update(wholeTime, wholeTime);
  }
}


function timer(seconds) {
  //counts time, takes seconds
  let remainTime = Date.now() + seconds * 1000;
  displayTimeLeft(seconds);

  intervalTimer = setInterval(function () {
    timeLeft = Math.round((remainTime - Date.now()) / 1000);

    if (timeLeft < 0) {
      clearInterval(intervalTimer);
      isStarted = false;
      setterBtns.forEach(function (btn) {
        btn.disabled = false;
        btn.style.opacity = 1;
      });
      displayTimeLeft(wholeTime);
      return;
    }
    displayTimeLeft(timeLeft);
  }, 1000);
}

function displayTimeLeft(timeLeft) {
  //displays time on the input
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let displayString = `${minutes < 10 ? '0' : ''}${minutes}:${
    seconds < 10 ? '0' : ''
  }${seconds}`;
  displayOutput.textContent = displayString;
  update(timeLeft, wholeTime);
}

function resetTimer() {
  if (isStarted === false) {
    timeLeft = 10;
    remainTime = 10;
    timer(wholeTime);
    isStarted = true;
    setterBtns.forEach(function (btn) {
      btn.disabled = true;
      btn.style.opacity = 0.5;
    });
  } else if (isPaused) {
    timeLeft = 10;
    remainTime = 10;
    timer(timeLeft);
    isPaused = isPaused ? false : true;
  } else {
    timeLeft = 10;
    remainTime = 10;
    clearInterval(intervalTimer);
    isPaused = isPaused ? false : true;
  }
}
