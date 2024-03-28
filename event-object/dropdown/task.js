const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");

dropdownValue.addEventListener('click', function () {
  dropdownList.classList.add("dropdown__list_active");
})

dropdownList.addEventListener('click', function(event) {
  event.preventDefault();
  dropdownList.classList.remove("dropdown__list_active");
  dropdownValue.textContent = event.target.textContent;
})