let timer = document.querySelector('.timer');
let stopButton = document.getElementById('stopbtn');
let startButton = document.getElementById('startbtn');
let resetButton = document.getElementById('resetbtn');

let miliseconds = 00;
let seconds = 00;
let minutes = 00;

let timerId = null;

startButton.addEventListener('click', function() {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stopButton.addEventListener('click', function() {
    clearInterval(timerId);
});

resetButton.addEventListener('click', function() {
    clearInterval(timerId);
    timer.innerHTML = `00 : 00 : 00`;
    miliseconds = seconds = minutes = 00;
});

function startTimer() {
    miliseconds++;
    if (miliseconds == 100) {
        miliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
    }

    let msecString = miliseconds < 10 ? `0${miliseconds}` : miliseconds;
    let secString = seconds < 10 ? `0${seconds}` : seconds;
    let minString = minutes < 10 ? `0${minutes}` : minutes;

    timer.innerHTML = `${minString} : ${secString} : ${msecString}`;
}