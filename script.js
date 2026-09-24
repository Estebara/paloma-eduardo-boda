const target = new Date("2027-09-18T00:00:00+02:00").getTime();

function updateCountdown() {
  const now = Date.now();
  let diff = target - now;
  if (diff <= 0) {
    document.getElementById("timer").innerHTML =
      '<div style="grid-column:1/-1"><strong>¡HOY ES EL DÍA!</strong></div>';
    return;
  }
  const day = 86400000, hour = 3600000, minute = 60000;
  const days = Math.floor(diff / day); diff %= day;
  const hours = Math.floor(diff / hour); diff %= hour;
  const minutes = Math.floor(diff / minute); diff %= minute;
  const seconds = Math.floor(diff / 1000);
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = String(hours).padStart(2,"0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2,"0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2,"0");
}
updateCountdown();
setInterval(updateCountdown, 1000);
