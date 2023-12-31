import { DOMSelectors } from "./dom";
import "../css/style.css";

const itemURL = "https://api.hypixel.net/v2/resources/skyblock/items"; // Hypixel API endpoint for Skyblock items

async function getData() {
  // Function to fetch data from the Hypixel API
  try {
    const response = await fetch(itemURL);
    if (response.status === 200) {
      // Check for a successful response
      const data = await response.json();
      return data.items; //Return the 'items' array
    } else {
      throw new Error(`Failed to fetch data. Status: ${response.status}`); // If the response status is not successful, throw an error with a message
    }
  } catch (error) {
    console.log(error);
  }
}

function displayItems(items) {
  // Function to display items on the webpage
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
  const searchValue = DOMSelectors.search.value.toLowerCase(); // Get the lowercase search value
  const allItems = await getData();
  const filteredItems = allItems.filter((item) =>
    item.name.toLowerCase().includes(searchValue)
  ); // Filter items based on the search value
  displayItems(filteredItems);
}

async function showAll() {
  // Function to show all items
  const allItems = await getData();
  displayItems(allItems);
}

DOMSelectors.input.addEventListener("submit", search);
DOMSelectors.allBtn.addEventListener("click", showAll);

getData().then((items) => displayItems(items)); // Initial load (show all items)

//https://api.hypixel.net/v2/counts second endpoint, display the current skyblock player count in the .playerCount

const playerCountURL = "https://api.hypixel.net/v2/counts?key=f05eb347-72f3-4315-b1e8-c03434bd842b"; // Hypixel API endpoint for player count

async function getPlayerCount() {
  try {
    const response = await fetch(playerCountURL);

    if (response.status === 200) {
      const data = await response.json();
      return data.games.SKYBLOCK.players;
    } else if (response.status === 403) {
      throw new Error("Access forbidden. Please check your API key.");
    } else if (response.status === 429) {
      throw new Error("Request limit reached. Please try again later.");
    } else {
      throw new Error(
        `Failed to fetch player count. Status: ${response.status}`
      );
    }
  } catch (error) {
    console.log(error);
  }
}

async function displayPlayerCount() {
  try {
    const playerCount = await getPlayerCount();
    const playerCountHTML = `<h2>Skyblock Player Count: ${playerCount}</h2>`;
    DOMSelectors.playerCount.insertAdjacentHTML("beforeend", playerCountHTML);
  } catch (error) {
    console.log(error);
  }
}

displayPlayerCount();