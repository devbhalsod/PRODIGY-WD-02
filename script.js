// script.js
let timerDisplay = document.querySelector(".timer");
let startButton = document.getElementById("start");
let pauseButton = document.getElementById("pause");
let resetButton = document.getElementById("reset");
let lapButton = document.getElementById("lap");
let lapsList = document.getElementById("laps-list");

let timerInterval;
let elapsedTime = 0;
let isRunning = false;

function updateTime() {
    elapsedTime += 10;
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let minutes = Math.floor((elapsedTime / 60000) % 60);
    timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(milliseconds).padStart(2, "0")}`;
}

startButton.addEventListener("click", () => {
    if (!isRunning) {
        timerInterval = setInterval(updateTime, 10);
        isRunning = true;
    }
});

pauseButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    isRunning = false;
});

resetButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    elapsedTime = 0;
    isRunning = false;
    timerDisplay.textContent = "00:00:00";
    lapsList.innerHTML = "";
});

lapButton.addEventListener("click", () => {
    if (isRunning) {
        const lapTime = timerDisplay.textContent;
        const li = document.createElement("li");
        li.textContent = lapTime;
        lapsList.appendChild(li);
    }
});