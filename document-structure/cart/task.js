const products = document.querySelectorAll(".product");
const cart = document.querySelector(".cart__products");

products.forEach(product => {
  const inc = product.querySelector(".product__quantity-control_inc");
  const dec = product.querySelector(".product__quantity-control_dec");
  const value = product.querySelector(".product__quantity-value");
  let addProducts = product.querySelector(".product__add");

  inc.addEventListener('click', () => {
    value.textContent++;
  })

  dec.addEventListener('click', () => {
    if (value.textContent > 1) {
      value.textContent--;
    }
  })

  addProducts.addEventListener('click', () => {
    addProduct(product);
    value.textContent = 1;
  })
})

function addProduct(product) {
  let quantity = product.querySelector(".product__quantity-value").textContent;
  let productsInCart = cart.querySelectorAll(".cart__product");

  if (productsInCart.length > 0) {
    for (let i = 0; i < productsInCart.length; i++) {
      if (productsInCart[i].dataset.id === product.dataset.id) {
        productsInCart[i].querySelector(".cart__product-count").textContent = parseInt(productsInCart[i].querySelector(".cart__product-count").textContent)
          + parseInt(quantity);
          return;
      }
    }
  }

  let item = document.createElement("div");
  item.classList.add("cart__product");
  item.dataset.id = product.dataset.id;
  item.innerHTML = `<img class="cart__product-image" src=${product.querySelector(".product__image").src} alt="">
    <div class="cart__product-count">${quantity}</div>`;
  cart.insertAdjacentElement('beforeend', item);
}
