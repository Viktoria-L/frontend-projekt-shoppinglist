import { viewMode } from "./stateViewMode.js";
import { editMode } from "./stateEditMode.js";
import { createSettingsButtonEventListener } from "./module-settings.js";
import { CustomButtonElement, List } from "./types.js";


export async function showSelectedList(selectedList: List, currentState: string) {
  const currentContentContainer = document.getElementById("current-content");
  const API_BASE = "https://frontend-projekt-shoppinglist-svelte.vercel.app/api/test/lists";
  const headerName = document.querySelector(".headerNameEdit") as HTMLDivElement;

  selectedList = await getAndSetUpdatedList(selectedList) as List;
  console.log("new stuff: " + JSON.stringify(selectedList));

  currentContentContainer!.innerHTML = "";
  let ulContainer = document.createElement("article");
  ulContainer.className = "ul-container";
  currentContentContainer!.appendChild(ulContainer);
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
  // TODO need to create a type or something that includes the extra fancy stuff added below
  const settingsButton = document.querySelector("#settings-button") as CustomButtonElement;
  settingsButton!.currentState = currentState;
  settingsButton!.selectedList = selectedList;
  // console.log("parameter selectedList:" + settingsButton.selected)
  settingsButton!.listItemsUl = listItemsUl;
  settingsButton!.API_BASE = API_BASE;
  settingsButton!.headerName = headerName as HTMLDivElement;
}

function createEditModeEventListener(selectedList: List, currentState: string) {
  const editModeButton = document.querySelector("#editBtn");
  editModeButton!.addEventListener("click", async (e) => {
    currentState === "viewOneList"
      ? (currentState = "editOneList")
      : (currentState = "viewOneList");

    showSelectedList(selectedList, currentState);
  });
}
async function getAndSetUpdatedList(selectedList: List) {
  try {
    const listResponse = await fetch(
      `https://frontend-projekt-shoppinglist-svelte.vercel.app/api/test/lists/${selectedList._id}`
    );
    const listData = await listResponse.json();
    selectedList = listData;
    return selectedList;
  } catch (error) {
    console.log(error);
  }
}
