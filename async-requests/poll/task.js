const title = document.getElementById("poll__title");
const answers = document.getElementById("poll__answers");

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    let response = JSON.parse(xhr.responseText).data;

    title.insertAdjacentHTML('afterbegin', response.title);
    let arrAnswers = response.answers;

    for (let answer in arrAnswers) {
      let html = `<button class="poll__answer">${arrAnswers[answer]}</button>`;
      answers.insertAdjacentHTML('beforeend', html);
    }

    let pollAnswers = document.querySelectorAll(".poll__answer");
    pollAnswers.forEach(elem => {
      elem.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Спасибо, ваш голос засчитан!');
      })
    })
  }
})