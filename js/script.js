const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const seconds = document.getElementById("seconds");
const period = document.getElementById("period");

const clock = setInterval(function time() {
  let date_now = new Date();
  let hr = date_now.getHours();
  let min = date_now.getMinutes();
  let sec = date_now.getSeconds();
  let per = "a.m";

  if (hr < 10) {
    hr = "0" + hr;
  } else if (hr >= 12) {
    per = "p.m";
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  hour.textContent = hr;
  minute.textContent = min;
  seconds.textContent = sec;
  period.textContent = per;
}, 1000);
