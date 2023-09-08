function betalingOnLoad() {
  if (saveState.bestelling.length == 0) {
    location.href = "../../bestel";
  }

  if (saveState.bezorging == true) {
    document.getElementById(
      "bezorging"
    ).innerHTML = `inclusief bezorging (&euro;4.95)`;
    saveState.totaalPrijs += 4.95;
  }

  let renderPrice = document.getElementById("render_price"),
    renderBestelling = document.getElementById("render_bestelling");

  renderPrice.innerHTML = `Te betalen: &euro;${saveState.totaalPrijs.toFixed(
    2
  )}`;
  //   for (let i = 0; i < saveState.bestelling.length; i++) {
  //     renderBestelling.innerHTML += `
  //     <tr class="flex flex-row w-full p-2 text-gray-900 text-sm even:bg-blue-300 odd:bg-blue-200">
  //       <td class="font-bold">${saveState.bestelling[i].name} - </td>
  //       <td class="mr-4">€${saveState.bestelling[i].price}</td>
  //       <td>
  //       </td>
  //     </tr>
  //         `;
  //   }
}

function paymentComplete() {
  saveState.bestelling = [];
  saveState.totaalPrijs = 0;
  saveState.bezorging = false;
  saveData();

  modal = document.createElement("div");
  modal.setAttribute("id", "modal");
  modal.innerHTML = `
    <div class="w-screen h-screen bg-black bg-opacity-50 absolute z-40"></div>
    <div class="w-screen h-screen flex justify-center items-center absolute z-50">
        <div class="bg-white rounded-md p-4 shadow-md">
            <div class="flex flex-col justify-center items-center">
                <span class="text-2xl p-4">
                    Betaling voltooid
                </span>
                <span class="text-xl p-4">
                    Bedankt voor uw bestelling!
                </span>
                <span class="text-xl p-4">
                    Uw bestelling wordt zo snel mogelijk bezorgd of u kunt hem zo snel mogelijk ophalen.
                </span>
                <span class="text-xl p-4">
                    U wordt doorgestuurd naar de homepagina.
                </span>
            </div>
        </div>
    </div>
    `;
  document.body.appendChild(modal);
  setTimeout(function () {
    modal.remove();
    location.href = "../..";
  }, 5000);
}

function validate() {
  let kaartnummer = document.getElementById("kaartnummer").value,
    kaarthouder = document.getElementById("kaarthouder").value,
    cvc = document.getElementById("cvc").value,
    datum = document.getElementById("datum").value;

  if (
    kaartnummer == "<" ||
    kaartnummer == ">" ||
    kaarthouder == "<" ||
    kaarthouder == ">" ||
    cvc == "<" ||
    cvc == ">" ||
    datum == "<" ||
    datum == ">"
  ) {
    alert("Vul geen tekens in");
    return false;
  }

  if (kaartnummer.length < 16 || kaartnummer.length > 16) {
    alert("Vul een geldig kaartnummer in");
    return false;
  }
  if (datum.length < 5 || datum.length > 5) {
    alert("Vul een geldige datum in");
    return false;
  }
  if (cvc.length < 3 || cvc.length > 3) {
    alert("Vul een geldige cvc in");
    return false;
  }

  if (kaarthouder.length < 3) {
    alert("Vul een geldige naam in");
    return false;
  }
  paymentComplete();
}
