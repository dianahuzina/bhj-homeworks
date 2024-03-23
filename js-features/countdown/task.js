let timerId = document.getElementById("timer");

let timerInterval = function () {
  if (timerId.textContent <= 0) {
    clearInterval(intervalId);
    alert("Вы победили в конкурсе!");
  }
  else {
    timerId.textContent -= 1;
  }
}

let intervalId = setInterval(timerInterval, 1000);