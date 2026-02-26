let time = 0;
let timer = null;

let display = document.getElementById("timerDisplay");
let startButton = document.getElementById("startTimer");
let stopButton = document.getElementById("stopTimer");
let resetButton = document.getElementById("resetTimer");

function updateTimer() {
    display.innerHTML = time;
}

startButton.onclick = function() {

    if (timer === null) {

        timer = setInterval(function() {
            time = time + 1;
            updateTimer();
        }, 1000);

    }

};

stopButton.onclick = function() {

    clearInterval(timer);
    timer = null;

};

resetButton.onclick = function() {

    clearInterval(timer);
    timer = null;
    time = 0;
    updateTimer();

};