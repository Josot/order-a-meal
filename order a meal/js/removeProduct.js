function removeProduct(product) {
  for (let i = 0; i < saveState.bestelling.length; i++) {
    if (product === `product${i}`) {
      saveState.totaalPrijs -= saveState.bestelling[i].price;
      saveState.bestelling.splice(i, 1);
    }
    saveData();
    location.reload();
  }
}
