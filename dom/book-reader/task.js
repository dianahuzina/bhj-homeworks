const fontSize = document.querySelectorAll(".font-size");
const book = document.querySelector(".book");

fontSize.forEach(elem => {
  elem.onclick = (event) => event.preventDefault();
  
  elem.addEventListener('click', () => {
    fontSize.forEach(element => {
      element.classList.remove("font-size_active");
    })
    elem.classList.add("font-size_active");

    let fontSizeActive = document.querySelector(".font-size_active");
    let size = fontSizeActive.getAttribute("data-size");
    book.classList.remove("book_fs-small", "book_fs-big");

    if (size === "small") {
      book.classList.add("book_fs-small");
    }
    else if (size === "big") {
      book.classList.add("book_fs-big");
    }
  })
})