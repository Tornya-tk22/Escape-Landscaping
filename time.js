export function updateTime() {
  const timeEl = document.getElementById("time");
  const dayEl = document.getElementById("day");

  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  timeEl.textContent = `${hours}:${minutes}:${seconds}`;
  dayEl.textContent = days[now.getDay()];
}

setInterval(updateTime, 1000);
updateTime();

export function welcomeByTime() {
  const now = new Date();
  const hours = now.getHours();
  const welcomeByTimeText = document.getElementById("welcomByTime");

  if (hours < 12) {
    welcomeByTimeText.textContent = "Good Morning!";
  } else if (hours < 18) {
    welcomeByTimeText.textContent = "Good Afternoon!";
  } else {
    welcomeByTimeText.textContent = "Good Evening!";
  }
}
