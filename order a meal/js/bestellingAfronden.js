"use strict";

let summary = document.getElementById("container_box__summary"),
  renderPrice = document.getElementById("container_box__summary_price"),
  bezorgingCheckbox = document.getElementById("bezorging_checkbox");

function renderProduct() {
  for (let i = 0; i < saveState.bestelling.length; i++) {
    summary.innerHTML += `
    <tr class="flex flex-row w-full p-2 text-gray-700 even:bg-slate-200 odd:bg-slate-100">
      <td class="font-bold">${saveState.bestelling[i].name} - </td>
      <td class="mr-4">€${saveState.bestelling[i].price}</td>
      <td>
        <button onclick="removeProduct('product${i}', ${saveState.bestelling[i].price})" class="bg-red-500 hover:bg-red-600 text-white font-bold px-2 rounded-full">
           -
        </button>
      </td>
    </tr>
    `;
  }
  if (saveState.totaalPrijs === 0 || saveState.bestelling.length === 0) {
    summary.innerHTML = ` 
    <div class="flex flex-col justify-center items-center">
      <span class="text-2xl p-4">
        Uw winkelmandje is 
        <span class="font-semibold">leeg</span>.
      </span>
      <a href="../bestel" class="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 m-2 rounded">
        Voeg een product toe.
      </a>
    </div>`;
  } else {
    renderPrice.innerHTML = `
    <div class="bg-slate-200 py-4 px-8 rounded-md ml-8 mt-2 shadow-md">
      <div class="flex justify-center items-center flex-col">
        <span class="font-bold text-blue-400 text-lg">Totaal: €${saveState.totaalPrijs.toFixed(
          2
        )}</span>
        <div class="flex justify-center">
          <input type="checkbox" id="bezorging_checkbox" class="ml-4">
          <label for="checkbox" class="ml-2">Bezorging <span class="text-slate-400 text-sm">+&euro;4,95</span></label>
        </div>
      </div>
      <div class="w-full h-[1px] bg-blue-200 m-2"></div>
      <button onclick="payment()" class="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 m-2 rounded">
        Bestelling afronden
      </button>
    </div>`;
  }
}

function bestellingAfronden() {
  if (bezorgingCheckbox.checked) {
    saveState.bezorging = true;
  } else if (!bezorgingCheckbox.checked) {
    saveState.bezorging = false;
  }
  saveData();
  location.href = "../betaling";
}
