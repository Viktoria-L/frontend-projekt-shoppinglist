import { viewMode } from "./stateViewMode.js";
import { editMode } from "./stateEditMode.js";
import { createSettingsButtonEventListener } from "./module-settings.js"

export async function showSelectedList(selectedList, currentState) {
  const currentContentContainer = document.getElementById("current-content");
  const API_BASE = "https://nackademin-item-tracker.herokuapp.com/";
  const headerName = document.querySelector(".headerNameEdit");

  console.log("new stuff: " + JSON.stringify(selectedList));

  currentContentContainer.innerHTML = "";
  let ulContainer = document.createElement("article");
  ulContainer.className = "ul-container";
  currentContentContainer.appendChild(ulContainer);
  const listItemsUl = document.createElement("ul");
  ulContainer.append(listItemsUl);

  if (currentState === "viewOneList") {
    viewMode({
      selectedList: selectedList,
      listItemsUl: listItemsUl,
      API_BASE: API_BASE,
      headerName: headerName,
    });
  } else if (currentState === "editOneList") {
    editMode({
      selectedList: selectedList,
      listItemsUl: listItemsUl,
      API_BASE: API_BASE,
      headerName: headerName,
    });
  }
  createEditModeEventListener(selectedList, currentState);
  createSettingsButtonEventListener();
  const settingsButton = document.querySelector("#settings-button");
  settingsButton.currentState = currentState;
  settingsButton.selectedList = selectedList;
  // console.log("parameter selectedList:" + settingsButton.selected)
  settingsButton.listItemsUl = listItemsUl;
  settingsButton.API_BASE = API_BASE;
  settingsButton.headerName = headerName;
}

function createEditModeEventListener(selectedList, currentState) {
  const editModeButton = document.querySelector("#button-editmode");
  editModeButton.addEventListener("click", async (e) => {
    currentState === "viewOneList"
      ? (currentState = "editOneList")
      : (currentState = "viewOneList");
    
    showSelectedList(selectedList, currentState);
  });
}