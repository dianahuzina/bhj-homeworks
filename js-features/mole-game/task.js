let statusDead = document.getElementById("dead");
let statusLost = document.getElementById("lost");

getHole = (index) => {
  let currentHole = document.getElementById(`hole${index}`);
  currentHole.onclick = function () {
    if (currentHole.className.includes("hole_has-mole")) {
      statusDead.textContent++;
      if (statusDead.textContent >= 10) {
        alert("Вы победили!");
        statusDead.textContent = 0;
        statusLost.textContent = 0;
      }
    }
    else {
      statusLost.textContent++;
      if (statusLost.textContent >= 5) {
        alert("Вы проиграли!");
        statusDead.textContent = 0;
        statusLost.textContent = 0;
      }
    }
  }
}

for (let index = 1; index < 10; index++) {
  getHole(index);
}