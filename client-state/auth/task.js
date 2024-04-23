const signinForm = document.getElementById("signin__form");
const signin = document.querySelector(".signin");
const welcome = document.getElementById("welcome");
let spanId = document.getElementById("user_id");

if (localStorage.getItem('userId')) {
  signin.classList.remove("signin_active");
  welcome.classList.add("welcome_active");
  spanId.textContent = localStorage.getItem('userId');
}

signinForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = new FormData(signinForm);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
  xhr.send(formData);

  xhr.addEventListener('load', () => {
    if (xhr.readyState === xhr.DONE || xhr.status === 200) {
      let response = JSON.parse(xhr.response);
      if (response.success) {
        signin.classList.remove("signin_active");
        welcome.classList.add("welcome_active");
        spanId.textContent = response.user_id;
        localStorage.setItem('userId', response.user_id);
      } else {
        alert("Неверный логин/пароль");
      }
    }
  })
})

