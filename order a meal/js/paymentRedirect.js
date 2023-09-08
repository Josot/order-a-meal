function payment() {
  let bezorgingCheckbox = document.getElementById("bezorging_checkbox");

  if (bezorgingCheckbox.checked) {
    saveState.bezorging = true;
    console.log(saveState.totaalPrijs);
    saveData();
  }
  location.href = "betaling";
}
