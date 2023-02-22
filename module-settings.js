import { viewMode } from "./stateViewMode.js";

export function createSettingsButtonEventListener() {
  const settingsButton = document.querySelector("#settings-button");
  // lite skumt men om man inte har skapas flera eventlisteners
  // så tar bort om det redan finns en!
  settingsButton.removeEventListener("click", settingsButtonFunction);
  settingsButton.addEventListener("click", settingsButtonFunction);
  settingsButton.currentState = "default value";
}

function settingsButtonFunction(e) {
  // console.log(`settings button clicked from ${e.currentTarget.currentState}`);
  if (e.currentTarget.currentState === "index") {
    console.log(`settings button clicked from our beautiful index page`);
    hideIndexHeader();
    clearCurrentContent();
    hideCreateListButton();
    addHeaderTitle();
    addBackButton();
  } else if (e.currentTarget.currentState === "viewOneList") {
    console.log(`settings button clicked from our amazing view list view`);
    hideListViewTitle();
    clearCurrentContent();
    hideCreateListButton();
    addHeaderTitle();
    replaceBackButton({
      selectedList: e.currentTarget.selectedList,
      listItemsUl: e.currentTarget.listItemsUl,
      API_BASE: e.currentTarget.API_BASE,
      headerName: e.currentTarget.headerName,
    });
  } else if (e.currentTarget.currentState === "editOneList") {
    console.log(`settings button clicked from our spectacular edit list view`);
    hideListViewTitle();
    clearCurrentContent();
    hideCreateListButton();
    addHeaderTitle();
    replaceBackButton();
  }
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

function replaceBackButton({ selectedList, listItemsUl, API_BASE }) {
  const oldBackBtn = document.querySelector(".backBtn");
  const headerName = document.querySelector(".headerNameEdit");
  headerName.removeChild(oldBackBtn);

  console.log("SELECTEDLIST " + JSON.stringify(selectedList));

  const backBtn = document.createElement("span");
  backBtn.className = "backBtn hover";
  backBtn.innerHTML += `<img src="assets/back-arrow.svg" alt="">`;
  headerName.prepend(backBtn);

  // TODO fixa :)

  // backBtn.addEventListener("click", ( selectedList, listItemsUl, API_BASE) => {
  //   // window.location.href = "/aaaaaaaa";
  //   console.log("selected list: " + selectedList);
  //   console.log("listItemsUl: " + listItemsUl);
  //   viewMode({
  //     selectedList: selectedList,
  //     listItemsUl: listItemsUl,
  //     API_BASE: API_BASE,
  //     headerName: headerName,
  //   });
  // });
}
