let bestelPaginaMenu = document.querySelector(".producten");
let drankjesMenu = document.querySelector(".drankjes");

const menuItems = [
  {
    name: "Standaard menu voor twee",
    price: 17.99,
    description: "Vier kroketten, twee losse puntjes en zes bitterballen.",
    image: "../images/menuitems/menuvoor2.png",
    amount: 0,
  },
  {
    name: "Standaard menu voor vier",
    price: 22.99,
    description:
      "8 Rundvlees Kroketten, 4 losse puntjes en Frisdrank naar keuze",
    image: "../images/menuitems/kroket.jpeg",
    amount: 0,
  },
  {
    name: "Party Menu",
    price: 34.99,
    description:
      "Een menu voor een groot feestje. 20 Kroketten naar keuze en 20 puntjes ",
    image: "../images/menuitems/veelkroketten.jpeg",
    amount: 0,
  },
  {
    name: "Snackpakket",
    price: 19.99,
    description:
      "Een mandje met 12 bitterballen en 12 kleine verschillende Kroketjes",
    image: "../images/menuitems/snackpakket.jpg",
    amount: 0,
  },
  {
    name: "Het Krokettenpakket",
    price: 29.99,
    description:
      "Het Krokettenpakket bestaat uit 7 verschillende kroketten, 7 puntjes en een keuze van 6 sausjes.",
    image: "../images/menuitems/kroketjes.jpeg",
    amount: 0,
  },
  {
    name: "Het Loket Kroket",
    price: 54.99,
    description: "Het hele menu met een puntje voor elke kroket",
    image: "../images/menuitems/loket.png",
    amount: 0,
  },
];

const drankjes = [
  {
    name: "Pepsi Max",
    price: 2.99,
    description: "Een flesje Pepsi Max",
    image: "../images/drankjes/pepsi.jpeg",
    amount: 0,
  },
  {
    name: "Fanta",
    price: 2.99,
    description: "Een flesje Fanta",
    image: "../images/drankjes/fanta.jpeg",
    amount: 0,
  },
  {
    name: "Sprite",
    price: 2.99,
    description: "Een flesje Sprite",
    image: "../images/drankjes/sprite.jpeg",
    amount: 0,
  },
  {
    name: "Heineken",
    price: 3.99,
    description: "Een flesje Heineken",
    image: "../images/drankjes/heineken.jpeg",
    amount: 0,
  },
];

for (let i = 0; i < menuItems.length; i++) {
  let menuItemDiv = document.createElement("div");
  menuItemDiv.classList.add("flex", "flex-column", "gap-4");
  menuItemDiv.innerHTML = `
  <div id="product${i}" class="flex h-auto w-auto m-2 flex-col rounded-md bg-slate-300 p-2">
    <img
    src="${menuItems[i].image}"
    class="h-40 w-[500px] object-cover"
    alt="${menuItems[i].name}"
    />
  <div class="p-2 pt-4" >
    <span class="font-bold">${menuItems[i].name}</span>
    <span class="text-gray-600 text-sm">€${menuItems[i].price}</span>
    <p class="text-gray-500 font-light text-xs h-[40px] break-words">${menuItems[i].description}</p>
  </div>
    <button onclick="addProduct('product${i}', '${menuItems[i].price}')" class="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded">
      Voeg toe
    </button>
</div>
`;

  bestelPaginaMenu.appendChild(menuItemDiv);
}

// for (let i = 0; i < drankjes.length; i++) {
//   let drankjesDiv = document.createElement("div");
//   drankjesDiv.classList.add("flex", "flex-column", "gap-4");
//   drankjesDiv.innerHTML = `
//   <div id="drankje${i}" class="flex h-auto w-auto m-2 flex-col rounded-md bg-slate-300 p-2">
//     <img
//     src="${drankjes[i].image}"
//     class="h-40 w-[500px] object-cover"
//     alt="${drankjes[i].name}"
//     />
//   <div class="p-2 pt-4">
//     <span class="font-bold">${drankjes[i].name}</span>
//     <span class="text-gray-600 text-sm">€${drankjes[i].price}</span>
//     <p class="text-gray-500 font-light text-xs h-[40px] break-words">${drankjes[i].description}</p>
//   </div>
//     <button onclick="addProduct('drankje${i}', '${drankjes[i].price}')" class="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded">
//       Voeg toe
//     </button>
// </div>
// `;

//   drankjesDiv.appendChild(drankjesMenu);
// }
