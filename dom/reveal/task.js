const reveal = document.querySelectorAll('.reveal');

document.addEventListener('scroll', function() {
  reveal.forEach((elem) => {
    if (elem.getBoundingClientRect().top > window.innerHeight || elem.getBoundingClientRect().bottom < 0)
    {
      elem.classList.remove('reveal_active');
    }
    else {
      elem.classList.add('reveal_active');
    }
  })
})