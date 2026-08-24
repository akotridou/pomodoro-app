
const startBtn = document.querySelector(".btn-start");
const stopBtn = document.querySelector(".btn-stop");
const resetBtn = document.querySelector(".btn-reset");
const minuteDiv = document.querySelector(".minutes");
const secondDiv = document.querySelector(".seconds");


const DEFAULT_TIME = 25 * 60; // 25 λεπτά σε δευτερόλεπτα
let totalSeconds = DEFAULT_TIME;
let timerInterval = null;
let isRunning = false;

//  Εμφάνιση του χρόνου στην οθόνη με 2 ψηφία (show time with 2 digits)
function renderTime() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  minuteDiv.textContent = minutes < 10 ? "0" + minutes : minutes;
  secondDiv.textContent = seconds < 10 ? "0" + seconds : seconds;
}

//  Έναρξη αντίστροφης μέτρησης (Starting count down)
function startTimer() {
  if (isRunning) return; // not repeating again if it runs

  isRunning = true;

  timerInterval = setInterval(() => {
    totalSeconds--;
    renderTime();

    if (totalSeconds <= 0) {
      clearInterval(timerInterval);
      isRunning = false;
      alert("Time is up!");
    }
  }, 1000);
}

// Παύση (Stop)
function stopTimer() {
  clearInterval(timerInterval);
  isRunning = false;
}

// Επαναφορά (Reset)
function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  totalSeconds = DEFAULT_TIME;
  renderTime();
}

// Event Listeners
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);