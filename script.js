let startTime = 0;
let elapsedTime = 0;
let timerInterval;
const display = document.getElementById("display");
const lapsContainer = document.getElementById("laps");

function timeToString(time) {
  const hrs = String(Math.floor(time / 3600000)).padStart(2, "0");
  const mins = String(Math.floor((time % 3600000) / 60000)).padStart(2, "0");
  const secs = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
}

function startStopwatch() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    display.textContent = timeToString(elapsedTime);
  }, 1000);
}

function pauseStopwatch() {
  clearInterval(timerInterval);
}

function resetStopwatch() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  display.textContent = "00:00:00";
  lapsContainer.innerHTML = "";
}

function recordLap() {
  if (elapsedTime === 0) return;
  const lap = document.createElement("p");
  lap.textContent = `Lap: ${timeToString(elapsedTime)}`;
  lapsContainer.appendChild(lap);
}

function toggleMode() {
  document.body.classList.toggle("light");
}











