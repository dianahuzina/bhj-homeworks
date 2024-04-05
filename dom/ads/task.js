const rotatorCases = document.querySelectorAll(".rotator__case");
let counter = 0;

function rotator() {
  if (counter < rotatorCases.length) {
    rotatorCases.forEach(elem => {
      elem.classList.remove("rotator__case_active");
    })
    rotatorCases[counter].classList.add("rotator__case_active");
    counter++;
  }
  else {
    counter = 0;
  }
}

setInterval(rotator, 1000)