import { showSelectedList } from "./module-show-selected-list.js";

export function createSettingsButtonEventListener() {
  const settingsButton = document.querySelector("#settings-button");
  // lite skumt men om man inte har skapas flera eventlisteners
  // så tar bort om det redan finns en!
  settingsButton.removeEventListener("click", settingsButtonFunction);
  settingsButton.addEventListener("click", settingsButtonFunction);
  settingsButton.currentState = "default value";
}

export function settingsButtonFunction(e) {
  clearCurrentContent();
  hideCreateListButton();

  if (e.currentTarget.currentState === "index") {
    console.log(`settings button clicked from our beautiful index page`);
    hideIndexHeader();
    addBackButton();
  } else if (e.currentTarget.currentState === "viewOneList") {
    console.log(`settings button clicked from our amazing view list view`);
    hideListViewTitle();
    replaceBackButton({
      selectedList: e.currentTarget.selectedList,
      currentState: e.currentTarget.currentState,
    });
  } else if (e.currentTarget.currentState === "editOneList") {
    console.log(`settings button clicked from our spectacular edit list view`);
    hideListViewTitle();
    replaceBackButton({
      selectedList: e.currentTarget.selectedList,
      currentState: e.currentTarget.currentState,
    });
  }

  addHeaderTitle();
}

function clearCurrentContent() {
  const currentContent = document.querySelector("#current-content");
  currentContent.innerHTML = "";
}

function hideCreateListButton() {
  const createListBtn = document.getElementById("newListBtn");
  createListBtn.style = `display: none`;
}

function hideIndexHeader() {
  const oldHeader = document.getElementById("header-name-title");
  if (oldHeader) {
    oldHeader.style = `display: none`;
  }
}

function hideListViewTitle() {
  const listTitle = document.querySelector(".nameinput");
  if (listTitle) {
    listTitle.style = `display: none`;
  }
}

function addBackButton() {
  const headerName = document.querySelector(".headerNameEdit");
  const backBtn = document.createElement("span");
  backBtn.className = "backBtn hover";
  backBtn.innerHTML += `<img src="assets/back-arrow.svg" alt="">`;
  if (!document.querySelector(".backBtn")) {
    headerName.prepend(backBtn);
  }

  backBtn.addEventListener("click", () => {
    window.location.href = "/";
  });
}

function replaceBackButton({ selectedList, currentState }) {
  const oldBackBtn = document.querySelector(".backBtn");
  const headerName = document.querySelector(".headerNameEdit");
  headerName.removeChild(oldBackBtn);

  console.log("SELECTEDLIST " + JSON.stringify(selectedList));

  const backBtn = document.createElement("span");
  backBtn.className = "backBtn hover";
  backBtn.innerHTML += `<img src="assets/back-arrow.svg" alt="">`;
  headerName.prepend(backBtn);

  backBtn.addEventListener("click", () => {
    console.log("selected list: " + JSON.stringify(selectedList));
    showSelectedList(selectedList, currentState);
  });
}

function addHeaderTitle() {
  const headerName = document.querySelector(".headerNameEdit");
  let headerNameTitle = document.createElement("h1");
  headerNameTitle.id = "settings-title";
  headerNameTitle.innerHTML = "Settings";
  let oldSettingsTitle = document.querySelector("#settings-title");
  if (!oldSettingsTitle) {
    headerName.append(headerNameTitle);
  }
}
