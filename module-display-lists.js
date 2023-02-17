export function display(outputArray) {
  const statusElement = document.querySelector("#output-status");
  const outputElement = document.querySelector("#list-output");
  let result = "";

  console.log(outputArray);
  const isEmpty = outputArray.length === 0;
  statusElement.style = "display: " + ((isEmpty && "block") || "none");
  // statusElement.innerHTML = isEmpty && 'No lists available!' || ''

  for (let i = 0; i < outputArray.length; i++) {
    let list = outputArray[i];
    let listName = list.listname || "???";
    let children = list.itemList;

    let isNotArray = !Array.isArray(children);
    if (isNotArray) {
      continue;
    }

    result += `
  <div id="${list._id}">
    <h2 class="list-title">${listName}</h2>
			<span class="remove-container hidden hover">
				<img class="remove hover" src="assets/trash.svg" alt="">
			</span>
    <ul>
  `;
    children.forEach((item) => {
      let checkedText = (item.checked && "checked") || "";
      let itemName = item.title || "???";

      result += `
      <li>
        <input type="checkbox" ${checkedText}>
        <input type="text" value="${itemName}">
      </li>
    `;
    });

    result += `
    </ul>
  </div>
  `;
  }
  console.log(outputElement);
  outputElement.innerHTML = result;
  //json = JSON.stringify(outputObj);
  //output.innerHTML = json;
}

export async function triggerDisplay() {
  const API_BASE = "https://nackademin-item-tracker.herokuapp.com";
  const API_FILTER = "grupp_e";
  // https://nackademin-item-tracker.herokuapp.com/findlistbykey?key=customfield&value=Custom
  fetch(API_BASE + "/findlistbykey?key=customfield&value=" + API_FILTER)
    .then((response) => response.json())
    .then(display);
}

export function debugDisplayLists(inputLists) {
  let outputHTML = "";
  for (const list of inputLists) {
    // console.log(list);
    outputHTML += `<p><span class="bold">List ID: </span>${list._id} `;
    outputHTML += `<span class="bold">List name: </span>${list.listname}</p>`;
    // console.log(list.itemList);
    try {
      for (const itemList of Array(list.itemList)) {
        if (list.itemList.length !== 0) {
          outputHTML += `<ul>`;
        }
        for (const item of itemList) {
          outputHTML += `<li>`;
          outputHTML += `<span class="bold">Item ID: </span>`;
          outputHTML += `${item._id}`;
          if (item.title)
            outputHTML += `<span class="bold"> title: </span>${item.title} `;
          if (item.checked)
            outputHTML += `<span class="bold">  checked: </span>${item.checked} `;
        }
        outputHTML += `</ul>`;
      }
    } catch (error) {
      console.log("error error! " + error);
    }
  }
  let element = document.createElement("main");
  element.id = "display-lists";
  element.innerHTML = outputHTML;
  if (!document.querySelector("#display-lists")) {
    document.body.append(element);
  }
}
