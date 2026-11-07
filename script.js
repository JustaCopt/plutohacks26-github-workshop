const startTime = new Date(2026, 10, 6, 19, 0, 0);
const endTime = new Date(2026, 10, 7, 18, 0, 0);
const timerLabel = document.getElementById("timer-label");
const timeValues = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};

function updateCountdown() {
  const now = new Date();
  const isBeforeStart = now < startTime;
  timerLabel.textContent = isBeforeStart ? "Hacking starts in" : "Hacking ends in";

  const targetTime = isBeforeStart ? startTime : endTime;
  const remainingSeconds = Math.max(0, Math.floor((targetTime - now) / 1000));
  const days = Math.floor(remainingSeconds / 86_400);
  const hours = Math.floor((remainingSeconds % 86_400) / 3_600);
  const minutes = Math.floor((remainingSeconds % 3_600) / 60);
  const seconds = remainingSeconds % 60;

  timeValues.days.textContent = String(days).padStart(2, "0");
  timeValues.hours.textContent = String(hours).padStart(2, "0");
  timeValues.minutes.textContent = String(minutes).padStart(2, "0");
  timeValues.seconds.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
window.setInterval(updateCountdown, 1000);
