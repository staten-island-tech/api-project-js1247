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
  async function insertAuction() {
  }
  insertAuction();
  console.log("");
  document.querySelector(".cards").textContent = "";
};
getData(URL);

// Array Methods: Project properly utilizes
// array methods for iteration/displaying data
// Vite Scaffolding: Use Vite and Vite
// config to scaffold your project.
// Promise Handling: rejected promises
// receive proper error handling alerting the
// user to why a request failed. Fulfilled
// promises result in data being displayed in
// the HTML as requested
// Form Handling: search functionality is
// handled with logic to prevent blank fields.
// Forms are used to get data from an API
// Reusable code/Modern Code: Functions are
// abstracted to allow for reusability.
// Global Variables: Project minimizes the use
// of global variables by storing them in JS
// Objects
// Version Control: Project uses git branches to
// maintain version control. Project should
// included a development branch as well as
// being hosted off the main branch which
// contains only mergers
// Communication: Students can clearly
// communicate and explain their understanding
// of their functions and how their project works
// Accessibility: use of semantic HTML,
// appropriate contrast, passes WAVE
// Responsive Layouts Site uses media
// queries, REM, % and flexbox for responsive
// layouts