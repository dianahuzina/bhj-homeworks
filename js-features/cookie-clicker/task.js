let cookieCounter = document.getElementById("clicker__counter");
let cookie = document.getElementById("cookie");

cookie.onclick = function () {
  cookieCounter.textContent++;
  if (cookieCounter.textContent % 2 === 0) {
    cookie.width = 200;
  }
  else {
    cookie.width = 250;
  }
}