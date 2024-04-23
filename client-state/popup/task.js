const modal = document.getElementById("subscribe-modal");
const modalClose = document.querySelector(".modal__close");

modalClose.addEventListener('click', () => {
  modal.classList.remove("modal_active");
  document.cookie = 'modal=close';
});

let pairs = document.cookie.split(';');
if (!(pairs.find(p => p.includes('modal=close')))) {
  modal.classList.add("modal_active");
}