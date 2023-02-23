import { editMode } from "./stateEditMode.js";
import { deleteListUsingID } from "./module-api.js";
import { showSelectedList } from "./module-show-selected-list.js"

export async function displayListsAlt() {
  const currentContentContainer = document.getElementById("current-content");

  let eGroupLists = await getOurLists();
  const API_BASE = "https://nackademin-item-tracker.herokuapp.com/"

  printLists(eGroupLists);

  let selectedList = null;

  const headerName = document.querySelector(".headerNameEdit");

  async function getOurLists() {
    const listResults = await fetch(
      `https://nackademin-item-tracker.herokuapp.com/findlistbykey?key=customfield&value=grupp_e`
    );
    let jsonList = await listResults.json();

    return jsonList;
  }

  async function printLists() {
    let fetchedLists = await getOurLists();

    const previewContainer = document.createElement("div");
    previewContainer.className = "preview-container";
    currentContentContainer.append(previewContainer);

    //------ Kod som försöker fixa status----
    const statusElement = document.querySelector("#output-status");

    console.log(fetchedLists.length, "Antal Listor");
    if (fetchedLists.length > 0) {
      statusElement.style = "display: none";

      // statusElement.innerHTML = "";
    }

    //------ ---- ---- ---- ---- ---- ---- ----

    previewContainer.innerHTML = ""; //clearing the container of content
    
    //REVERSING FETCHEDLISTS AND PRINTING REVERSED ARRAY 
    let reversedFetchedLists = [...fetchedLists].reverse();

    console.log("original", fetchedLists);
    console.log("reversed", reversedFetchedLists);
    
    reversedFetchedLists.forEach((list) => {
      //For each list item in the fetched array
      const previewObject = document.createElement("div");
      previewContainer.append(previewObject);
      // ?? efter ett value är fancy sätt att säga "om undefined/null, ge värdet till höger om ?? istället för undefined/null"
      previewObject.classList.add("preview-object", "hover", `list-color-${list.color ?? "default"}`);

      previewObject.dataset.listId = list._id;

      //   EXTRA UL SOM INTE ANVÄNDS

      //   let listUL = document.createElement("ul");
      //   previewObject.append(listUL);

      //event listener för klickad lista
      previewObject.addEventListener("click", async function () {
        try {
          const listResponse = await fetch(
            `https://nackademin-item-tracker.herokuapp.com/lists/${list._id}`
          );
          const listData = await listResponse.json();
          selectedList = listData;
          showSelectedList(selectedList, currentState);
          previewContainer.innerHTML = "";
        } catch (error) {
          console.log(error);
        }
      });

      let count = 0;
      previewObject.innerHTML += `<h2>${list.listname} </h2> `;
      if (list.itemList && Array.isArray(list.itemList)) {
        // previewObject.innerHTML += `<ul>`;
        
        let listUl = document.createElement("ul");
        previewObject.appendChild(listUl);
        
        list.itemList.forEach((item) => {
          if (count >= 3) {
            if (!previewObject.innerHTML.includes("...")) {
              previewObject.innerHTML += `...`;
            }
            return;
          }
          
          console.log(item.checked);
          
          let listItemet = document.createElement("li");
          listItemet.innerHTML = item.title ? `${item.title}` : "no title ";
          item.checked
          ? listItemet.classList.add("checkedItem")
          : listItemet.classList.remove("checkedItem");
          listUl.appendChild(listItemet);
          
          // previewObject.innerHTML += (item.title) ? `<li> ${item.title}  </li> ` : "no title ";
          
          // previewObject.innerHTML += (item.title) ? `<li> ${item.title}  </li> ` : "no title ";
          // previewObject.innerHTML += (item.checked) ? `<span class="bold">checked:</span>${item.checked} ` : "";
          
          count++;
        });
        // previewObject.innerHTML += + list.itemList.length - 5
        console.log();
      } else console.log("not an Array");

      let trashcan = document.createElement("span");
      trashcan.classList.add("remove-container", "hidden", "hover");
      trashcan.innerHTML =
        '<svg class="remove hover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>';
      // ---------- DELETE-FUNCTION ----------
      trashcan.addEventListener("click", (e) => {
        e.stopPropagation();
        let currentList = e.target.parentElement.parentElement;
        console.log(`du klickar på ${currentList.getAttribute("data-list-id")}`);
        if (currentList.getAttribute("data-list-id") !== "null") {
          console.log(
            `du tog bort lista ${currentList.getAttribute("data-list-id")}`
            );
            deleteListUsingID(currentList.getAttribute("data-list-id"))
          currentList.remove();
        }
      });
      previewObject.appendChild(trashcan);
    });
  }

  //funktion som navigerar till ett preview items fulla vy

  // https://nackademin-item-tracker.herokuapp.com/findlistbykey?key=customfield&value=grupp_e    // För att hitta vår grupps lista

  function createNewList() {}

  function addItemToList(listItem) {}
  // const listItemsUl = document.querySelector("#listItems");

  let currentState = "viewOneList";

  

  // updateItem(item._id,)

  // prövar att skapa en funktion som ska uppdatera

  //Plus-knappen på index-sidan som ska ta en till skapa lista-vyn.
  const createListBtn = document.getElementById("newListBtn");
  const outputElement = document.querySelector("#current-content");

  createListBtn.addEventListener("click", (event) => {
    outputElement.innerHTML = "";
    createListBtn.style = `display: none`;

    //Bygger listans namninput-fält med fältet för namnet i headern
    headerName.innerHTML = `
    <span class="backBtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></span>
    <input type="text" class="nameinput" value="New List"></input>
    `;

    currentContentContainer.innerHTML = "";
    let ulContainer = document.createElement("article");
    ulContainer.className = "ul-container";
    currentContentContainer.appendChild(ulContainer);
    const listItemsUl = document.createElement("ul");
    ulContainer.append(listItemsUl);

    editMode({
      selectedList: selectedList,
      listItemsUl: listItemsUl,
      API_BASE: API_BASE,
      headerName: headerName,
    });
  });
}
