function addProduct(product, cost) {
  let header = document.getElementById("header");

  for (let i = 0; i < menuItems.length; i++) {
    if (product === `product${i}`) {
      saveState.bestelling.push(menuItems[i]);
      saveState.totaalPrijs += parseFloat(cost);
      // console.log(saveState.bestelling);
      // console.log(cost);
    }
  }
  saveData();
  shoppingCartRender();

  let confirmation = document.createElement("div");
  confirmation.setAttribute("id", "confirmation");
  confirmation.innerHTML = `
  <div class="w-full flex justify-center items-center absolute mt-6 font-bold">
    <p>Product toegevoegd aan winkelmandje</p>
  </div>
  `;
  if (document.getElementById("confirmation")) {
    document.getElementById("confirmation").remove();
  }
  header.appendChild(confirmation);
  setTimeout(function () {
    confirmation.remove();
  }, 2000);
}
