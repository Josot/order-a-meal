const saveState = {
  bestelling: [],
  totaalPrijs: 0,
  bezorging: false,
};

function saveData() {
  localStorage.setItem("data", JSON.stringify(saveState));
}

function loadData() {
  let loadState = JSON.parse(localStorage.getItem("data"));
  if (loadState !== null) {
    saveState.bestelling = loadState.bestelling;
    saveState.totaalPrijs = loadState.totaalPrijs;
    saveState.bezorging = loadState.bezorging;
  }
}

function deleteData() {
  localStorage.removeItem("data");
  location.reload();
}
