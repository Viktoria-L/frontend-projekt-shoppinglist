// se ChatGPT förklarar ECMAscriptmoduler.md
import { filterByName, getAllLists } from "./module-api.js";
import { filterByNameOffline, getAllListsOffline } from "./module-api-offline.js";
import { displayLists } from "./module-display-lists.js";
import { listsFromFile as offlineList } from "./data.js";

// inte använd men länken till början av APIt
const API_BASE = "https://nackademin-item-tracker.herokuapp.com/";

// Globala variabler (for now)
let name = "Henrik";

// Queryselectors
let body = document.querySelector("body");

// Elements (bara för testing!)
let getAllListsButton = document.createElement("button");
getAllListsButton.innerText = "Get all lists";
getAllListsButton.addEventListener("click", async () =>
  console.log(await getAllLists())
);
body.append(getAllListsButton);

let getAllListsOfflineButton = document.createElement("button");
getAllListsOfflineButton.innerText = "Get all lists (offline)";
getAllListsOfflineButton.addEventListener("click", async () =>
  console.log(await getAllListsOffline(offlineList))
);
body.append(getAllListsOfflineButton);

let filterButton = document.createElement("button");
filterButton.innerText = "Filter by name";
filterButton.addEventListener("click", async () => filterByName(name));
body.append(filterButton);

let filterOfflineButton = document.createElement("button");
filterOfflineButton.innerText = "Filter by name (offline)";
filterOfflineButton.addEventListener("click", async () =>
  filterByNameOffline(name)
);
body.append(filterOfflineButton);

let displayListsButton = document.createElement("button");
displayListsButton.innerText = "Display lists";
displayListsButton.addEventListener("click", () => displayLists(lists));
body.append(displayListsButton);

// exempel på att bara kalla funktionen som skriver ut i DOM
console.log(
  "här är ID för en listig lista: " + (await filterByNameOffline("ListigLista"))
);

// spara listorna i en variabel lists
let lists = await getAllListsOffline(offlineList);
let stringifiedLists = JSON.stringify(lists);

console.log("All lists:\n" + stringifiedLists);
