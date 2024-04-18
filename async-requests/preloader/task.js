const items = document.getElementById("items");
const item = document.querySelector(".item");
const loader = document.getElementById("loader");

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    loader.classList.remove("loader_active");
  }
  
  let response = JSON.parse(xhr.responseText).response.Valute;
  for (element in response) {
    let html = `<div class="item"> 
        <div class="item__code">${response[element].CharCode}</div>
        <div class="item__value">${response[element].Value};</div>
        <div class="item__currency">руб.</div> 
        </div>`;
    items.insertAdjacentHTML('beforeend', html);
  }
})