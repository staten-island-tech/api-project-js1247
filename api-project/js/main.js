import { DOMSelectors } from "./dom";
import "../css/style.css";

const URL = "https://api.hypixel.net/v2/resources/skyblock/items";

async function getData() {
  try {
    const response = await fetch(URL);

    // Check for a successful response
    if (response.status >= 200) {
      const data = await response.json();
      return data.items;
    }
  } catch (error) {
    console.log(error);
  }
}

function displayItems(items) {
  DOMSelectors.content.innerHTML = ""; // Clear previous content

  items.forEach((item) => {
    const itemHTML = `
      <div class="item">
        <h2>${item.name}</h2>
        <p>Category: ${item.category}</p>
        <p>Tier: ${item.tier}</p>
        <p>NPC Sell Price: ${item.npc_sell_price}</p>
        <p>Material: ${item.material}</p>
      </div>
    `;
    DOMSelectors.content.insertAdjacentHTML("beforeend", itemHTML);
  });
}

async function search(event) {
  event.preventDefault();
  const searchValue = DOMSelectors.search.value.toLowerCase();
  const allItems = await getData();
  const filteredItems = allItems.filter((item) =>
    item.name.toLowerCase().includes(searchValue)
  );
  displayItems(filteredItems);
}

async function showAll() {
  const allItems = await getData();
  displayItems(allItems);
}

DOMSelectors.input.addEventListener("submit", search);
DOMSelectors.allBtn.addEventListener("click", showAll);

// Initial load (show all items)
getData().then((items) => displayItems(items));