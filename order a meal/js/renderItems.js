let menuItemsRender = document.getElementById("menu_items_render");
let drankjesRender = document.getElementById("drankjes_render");

function renderMenuItems() {
  for (let i = 0; i < menuItems.length; i++) {
    menuItemsRender.innerHTML += `
    <div class="flex flex-col gap-4 mt-4">
        <p class="text-2xl text-blue-800">${menuItems[i].name}</p>
        <p class="text-lg">&euro;${menuItems[i].price}</p>
        <p class="text-slate-600">${menuItems[i].description}</p>
    </div>
    `;
  }
}

function renderDrankjes() {
  for (let i = 0; i < drankjes.length; i++) {
    drankjesRender.innerHTML += `
    <div class="flex flex-col gap-4 mt-4">
        <p class="text-2xl text-blue-800">${drankjes[i].name}</p>
        <p class="text-lg">&euro;${drankjes[i].price}</p>
        <p class="text-slate-600">${drankjes[i].description}</p>
    </div>
        `;
  }
}
