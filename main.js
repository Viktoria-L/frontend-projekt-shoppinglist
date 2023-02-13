// se ChatGPT förklarar ECMAscriptmoduler.md
import { filterByName, getAllLists } from "./module-api.js";

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

let filterButton = document.createElement("button");
filterButton.innerText = "Filter by name";
filterButton.addEventListener("click", async () => filterByName(name));
body.append(filterButton);

// exempel på att bara kalla funktionen som skriver ut i DOM
console.log(
  "här är ID för en listig lista: " + (await filterByName("ListigLista"))
);

// spara listorna i en variabel lists (ta bort stringify om man bara vill ha objekten)
let lists;

lists = await getAllLists();
lists = JSON.stringify(lists);

console.log("All lists:\n" + lists);
