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
  } else if (e.currentTarget.currentState === "viewOneList") {
    console.log(`settings button clicked from our amazing view list view`);
  } else if (e.currentTarget.currentState === "editOneList") {
    console.log(`settings button clicked from our spectacular edit list view`);
  }
}
