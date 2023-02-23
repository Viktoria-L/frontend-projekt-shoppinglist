import { showSelectedList } from "./module-show-selected-list.js";
import { 
      systemPrefersDark,
      darkmodeToLocal,
      darkmodeFromLocal,
  } from "./module-of-darkness.js";

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
    renderSettingView();
    toogleDarkmode();
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
  backBtn.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`;
  if (!document.querySelector(".backBtn")) {
    headerName.prepend(backBtn);
  }

  backBtn.addEventListener("click", () => {
    window.location.href = "";
  });
}

function replaceBackButton({ selectedList, currentState }) {
  const oldBackBtn = document.querySelector(".backBtn");
  const headerName = document.querySelector(".headerNameEdit");
  headerName.removeChild(oldBackBtn);

  console.log("SELECTEDLIST " + JSON.stringify(selectedList));

  const backBtn = document.createElement("span");
  backBtn.className = "backBtn hover";
  backBtn.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`;
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

function renderSettingView() {
  const currentContent = document.querySelector("#current-content");
  let settingDiv = document.createElement("div");
  settingDiv.className = "settingdiv";
  settingDiv.innerHTML = `
  <p>Dark-mode:<p> 
  <div class="switch">
  <label class="theme-switch" for="checkbox">
      <input type="checkbox" id="checkbox" />
      <div class="slider round"></div>
  </label>
</div>
  `;
  currentContent.append(settingDiv);
}

function toogleDarkmode() {
  let body = document.querySelector("body");
  let tooglemodeBtn = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );
  console.log(tooglemodeBtn.checked);
  tooglemodeBtn.addEventListener("click", () => {
    if (tooglemodeBtn.checked === true) {
      body.classList.add("darkmode");
      darkmodeToLocal(true);
      console.log("checked: " + body.classList);
      console.log(tooglemodeBtn.checked);
      console.log(darkmodeFromLocal());
    } else {
      body.classList.remove("darkmode");
      console.log(body.classList);
      darkmodeToLocal(false);
      console.log(darkmodeFromLocal());
    }
  });
}
