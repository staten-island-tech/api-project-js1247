import { DOMSelectors } from "./dom";
import "../css/style.css";

const URL = "https://api.hypixel.net/v2/resources/skyblock/items";

async function getData() {
  try {
    const response = await fetch(URL);

    // Check for a successful response (status code 200)
    if (response.status === 200) {
      const data = await response.json();
      return data.items;
    } else {
      // Handle non-200 status codes
      console.log(`Error`);
    }
  } catch (error) {
    console.log(error);
  }
}

function displayItems(items) {
  DOMSelectors.content.innerHTML = ""; // Clear previous content

  items.forEach(item => {
    const itemHTML = `
      <div class="item">
        <h2>${item.name}</h2>
        <p>Rarity: ${item.rarity}</p>
        <p>Type: ${item.type}</p>
        <p>...</p>
        <!-- change the properties at school -->
      </div>
    `;
    DOMSelectors.content.insertAdjacentHTML("beforeend", itemHTML);
  });
}

async function search(event) {
  event.preventDefault();
  const searchValue = DOMSelectors.search.value.toLowerCase();
  const allItems = await getData();
  const filteredItems = allItems.filter(item =>
    item.name.toLowerCase().includes(searchValue)
  );
  displayItems(filteredItems);
}

async function showAll() {
  const allItems = await getData();
  displayItems(allItems);
}

// Event listeners
DOMSelectors.input.addEventListener("submit", search);
DOMSelectors.allBtn.addEventListener("click", showAll);

// Initial load (show all items)
getData().then(items => displayItems(items));

//have to make another api