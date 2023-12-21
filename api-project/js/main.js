import "../css/style.css";
import { DOMSelectors } from "./dom";
const URL = "https://api.hypixel.net/v2/skyblock/auctions"; 

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    data.auctions.forEach(data => console.log(data));
  }
  catch (error) {
    console.log(error);
  }
  async function insertAuction() {
  }
  insertAuction();
  console.log("");
  document.querySelector(".cards").textContent = "";
};
getData(URL);