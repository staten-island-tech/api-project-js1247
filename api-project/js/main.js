import "../css/style.css";
import { DOMSelectors } from "./dom";
const URL = "https://api.hypixel.net/v2/resources/skyblock/items"; 

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    data.items.forEach(data => console.log(data));
  }
  catch (error) {
    console.log(error);
  }
};
getData(URL);