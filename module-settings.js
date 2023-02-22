export function createSettingsButtonEventListener(currentState) {
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
  } else if (e.currentTarget.currentState === "viewOneList") {
    console.log(`settings button clicked from our amazing view list view`);
    hideListViewTitle();
  } else if (e.currentTarget.currentState === "editOneList") {
    console.log(`settings button clicked from our spectacular edit list view`);
    hideListViewTitle();
  }
  clearCurrentContent();
  hideCreateListButton();
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

function addHeaderTitle() {
  let headerNameTitle = document.createElement("h1");
  headerNameTitle.id = "settings-title";
  headerNameTitle.innerHTML = "Settings";
  const headerName = document.querySelector(".headerNameEdit");
  let oldSettingsTitle = document.querySelector("#settings-title");
  if (!oldSettingsTitle) {
    headerName.append(headerNameTitle);
  }
}
