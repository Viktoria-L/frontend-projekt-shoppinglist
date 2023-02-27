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
import { createSettingsButtonEventListener } from "./module-settings.js";
import { darkmodeFromLocal, systemPrefersDark } from "./module-of-darkness.js";

// inte använd men länken till början av APIt
const API_BASE = "https://nackademin-item-tracker.herokuapp.com/";

// Globala variabler (for now)
let debugMode = false;

// variabel med alla listor
let lists;
if (debugMode) {
  lists = await getListsUsingCustomField();
  // console.log(lists);
}

// Visa index-funktioner här

//Kollar om darkmode är valt och sparat i localstorage
function checkMode() {
  let body = document.querySelector("body");

  if (darkmodeFromLocal() === "false") {
    body.classList.remove("darkmode");
    // console.log("No dark mode preferred");
  } else if (darkmodeFromLocal() === "true") {
    body.classList.add("darkmode");
  } else if (systemPrefersDark() || darkmodeFromLocal() === "true") {
    body.classList.add("darkmode");
    // console.log("dark mode preferred");
  }
}
checkMode();

// triggerDisplay();

displayListsAlt();

// settings-knapp för index-vyn

createSettingsButtonEventListener();
const settingsButton = document.querySelector("#settings-button");
settingsButton.currentState = "index";

// om man vill skriva ut
// let stringifiedLists = JSON.stringify(lists);
// // console.log("All lists:\n" + stringifiedLists);

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
