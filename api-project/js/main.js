import "../css/style.css";

const URL = "//https://api.hypixel.net/"; 
//still need to get a api from hypixel
async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
  }
  catch (error) {
    console.log(error);
  }
}

getData(URL);