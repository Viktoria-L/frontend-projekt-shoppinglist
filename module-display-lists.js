export function displayLists(inputLists) {
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
