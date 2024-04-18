const form = document.getElementById("form");
const progress = document.getElementById('progress');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let formData = new FormData(form);
  let xhr = new XMLHttpRequest();
  
  xhr.upload.addEventListener('progress', (event) => {
    progress.value = event.loaded / event.total;
  })

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  xhr.send(formData);
})
