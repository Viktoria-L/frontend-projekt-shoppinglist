import { createDebugElements } from "./module-debug.js";

import { displayListsAlt } from "./modules-testing.js";
import {
  filterByName,
  getAllLists,
  getListUsingID,
  deleteListUsingID,
  getListsUsingCustomField,
} from "./module-api.js";
import { triggerDisplay, display } from "./module-display-lists.js";

// inte använd men länken till början av APIt
const API_BASE = "https://nackademin-item-tracker.herokuapp.com/";

// Globala variabler (for now)
let debugMode = false;

// variabel med alla listor
let lists;
if (debugMode) {
  lists = await getListsUsingCustomField();
  console.log(lists);
}

// Visa index-funktioner här

// triggerDisplay();

displayListsAlt();

// om man vill skriva ut
// let stringifiedLists = JSON.stringify(lists);
// console.log("All lists:\n" + stringifiedLists);

// skapar debugelement om debugMode är true
createDebugElements(debugMode);

//Funktion för edit-knapp
function editFunc() {
  let editBtn = document.getElementById("editBtn");
  editBtn.addEventListener("click", () => {
    let remove = document.querySelectorAll(".remove-container");
    if (!editBtn.classList.contains("on")) {
      editBtn.classList.add("on");
      remove.forEach((element) => {
        element.classList.remove("hidden");
      });
    } else {
      editBtn.classList.remove("on");
      remove.forEach((element) => {
        element.classList.add("hidden");
      });
    }
  });
}

editFunc();
// GAMMAL DELETE FUNCTION -------------------
//Hitta id för listan som ska tas bort
// let listView = document.querySelectorAll(".preview-object");

// listView.onclick = (e) => {
//   let currentList = e.target.parentElement.parentElement;
//   e.stopPropagation();
//   console.log(currentList.id);
//   if (currentList.id === "" || currentList.id === "list-output") {
//     console.log("missed")
//   } else {
//     // deleteListUsingID(currentList.id);
//     console.log("delete")
//   }
// };




