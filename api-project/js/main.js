import "../css/style.css";
//get api from hypixel skyblock
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
}
getData(URL);