const signinForm = document.getElementById("signin__form");
const signin = document.querySelector(".signin");
const welcome = document.getElementById("welcome");
let spanId = document.getElementById("user_id");

signin.classList.remove("signin_active");
welcome.classList.add("welcome_active");
//spanId.textContent = localStorage.getItem('userId');

signinForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = new FormData(signinForm);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
  xhr.responseType = 'json';
  xhr.send(formData);

  xhr.addEventListener('load', () => {
    let response = xhr.response;
    console.log(response);
    if (response.success) {
      signin.classList.remove("signin_active");
      welcome.classList.add("welcome_active");
      localStorage.setItem('userId', response.user_id);
      spanId.textContent = localStorage.getItem('userId');
    } else {
      alert("Неверный логин/пароль");
      signinForm.reset();
    }
  })
})