const startBtn = document.querySelector(".btn-start");
const stopBtn = document.querySelector(".btn-stop");
const resetBtn = document.querySelector(".btn-reset");
const minuteDiv = document.querySelector(".minutes");
const secondDiv = document.querySelector(".seconds");

const circles = document.querySelectorAll(".circle");

const DEFAULT_TIME = 25 * 60; // 25 λεπτά σε δευτερόλεπτα
let totalSeconds = DEFAULT_TIME;
let timerInterval = null;
let isRunning = false;


// Εμφάνιση του χρόνου στην οθόνη με 2 ψηφία
function renderTime() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  minuteDiv.textContent = minutes < 10 ? "0" + minutes : minutes;
  secondDiv.textContent = seconds < 10 ? "0" + seconds : seconds;

  updateCircle();
}


// Ενημέρωση του κύκλου ανάλογα με τον χρόνο που απομένει
function updateCircle() {

  const progress = totalSeconds / DEFAULT_TIME;

  const angle = progress * 360;

  circles.forEach(circle => {
    circle.style.transform = `rotate(${angle}deg)`;
  });

}


// Έναρξη αντίστροφης μέτρησης
function startTimer() {

  if (isRunning) return;

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


// Παύση
function stopTimer() {

  clearInterval(timerInterval);

  isRunning = false;

}


// Επαναφορά
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


// Αρχική εμφάνιση
renderTime();
