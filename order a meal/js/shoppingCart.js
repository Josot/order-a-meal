let shoppingCart = document.getElementById("shopping_cart__render");

function shoppingCartRender() {
  if (saveState.bestelling.length <= 9) {
    shoppingCart.innerHTML = saveState.bestelling.length;
    shoppingCart.style.fontSize = "0.8em";
    shoppingCart.style.top = "1px";
  } else {
    shoppingCart.innerHTML = "9+";
    shoppingCart.style.fontSize = "0.8em";
    shoppingCart.style.top = "1px";
  }
}
