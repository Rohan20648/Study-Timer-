const pendulum = document.getElementById("pendulum");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const minsEl = document.getElementById("minutes");
const secsEl = document.getElementById("seconds");
const sessionList = document.getElementById("sessionList"); // Add this to your HTML

let timer = null;
let seconds = 0;

startBtn.addEventListener("click", () => {
  if (!timer) {
    pendulum.classList.add("swinging");
    timer = setInterval(() => {
      seconds++;
      minsEl.textContent = String(Math.floor(seconds / 60)).padStart(2, '0');
      secsEl.textContent = String(seconds % 60).padStart(2, '0');
    }, 1000);
  }
});

pauseBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  pendulum.classList.remove("swinging");
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  pendulum.classList.remove("swinging");
  pendulum.style.transform = "translateX(-50%) rotate(0deg)";

  // Record session
  const session = document.createElement("li");
  session.textContent = `Studied for ${minsEl.textContent}:${secsEl.textContent}`;
  sessionList.appendChild(session);

  // Reset timer
  seconds = 0;
  minsEl.textContent = "00";
  secsEl.textContent = "00";
});
