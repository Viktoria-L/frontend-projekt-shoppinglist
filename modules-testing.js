import { viewMode } from "./stateViewMode.js";
import { editMode } from "./stateEditMode.js";

export async function displayListsAlt() {
  const currentContentContainer = document.getElementById("current-content");

  let eGroupLists = await getOurLists();
  const API_BASE = "https://nackademin-item-tracker.herokuapp.com/";

  printLists(eGroupLists);

  console.log(eGroupLists);

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

    fetchedLists.forEach((list) => {
      //For each list item in the fetched array
      const previewObjekt = document.createElement("div");
      previewContainer.append(previewObjekt);
      previewObjekt.classList.add("preview-object");

      previewObjekt.dataset.listId = list._id;

      //   EXTRA UL SOM INTE ANVÄNDS

      //   let listUL = document.createElement("ul");
      //   previewObjekt.append(listUL);

      //event listener för klickad lista
      previewObjekt.addEventListener("click", async function () {
        try {
          const listResponse = await fetch(
            `https://nackademin-item-tracker.herokuapp.com/lists/${list._id}`
          );
          const listData = await listResponse.json();
          selectedList = listData;
          showSelectedList(selectedList);
          previewContainer.innerHTML = "";
        } catch (error) {
          console.log(error);
        }
      });

      let count = 0;
      let trashcan = document.createElement("span");
      trashcan.classList.add("remove-container", "hidden", "hover");
      trashcan.innerHTML =
        '<img class="remove hover" src="assets/trash.svg" alt="">';
      trashcan.addEventListener("click", (e) => {
        e.stopPropagation();
        console.log("du tryckte");
      });
      previewObjekt.appendChild(trashcan);
      previewObjekt.innerHTML += `<h2>${list.listname} </h2> `;
      if (list.itemList && Array.isArray(list.itemList)) {
        // previewObjekt.innerHTML += `<ul>`;

        let listUl = document.createElement("ul");
        previewObjekt.appendChild(listUl);

        list.itemList.forEach((item) => {
          if (count >= 3) {
            if (!previewObjekt.innerHTML.includes("...")) {
              previewObjekt.innerHTML += `...`;
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

          // previewObjekt.innerHTML += (item.title) ? `<li> ${item.title}  </li> ` : "no title ";

          // previewObjekt.innerHTML += (item.title) ? `<li> ${item.title}  </li> ` : "no title ";
          // previewObjekt.innerHTML += (item.checked) ? `<span class="bold">checked:</span>${item.checked} ` : "";

          count++;
        });
        // previewObjekt.innerHTML += + list.itemList.length - 5
        console.log();
      } else console.log("not an Array");
    });
  }

  //funktion som navigerar till ett preview items fulla vy

  // https://nackademin-item-tracker.herokuapp.com/findlistbykey?key=customfield&value=grupp_e    // För att hitta vår grupps lista

  function createNewList() {}

  function addItemToList(listItem) {}
  // const listItemsUl = document.querySelector("#listItems");
  
  let currentState = "viewOneList";
  
  async function showSelectedList(selectedList) {
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
    createEditModeEventListener();
  }

  function createEditModeEventListener() {
    const editModeButton = document.querySelector("#button-editmode");
    editModeButton.addEventListener("click", (e) => {
      currentState === "viewOneList"
        ? (currentState = "editOneList")
        : (currentState = "viewOneList");
      console.log("edit mode clicked    current state: " + currentState);
      showSelectedList(selectedList);
    });
  }

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
    <span class="backBtn"><img src="assets/back-arrow.svg" alt=""></span>
    <input type="text" class="nameinput" value="New List"></input>
    <button><img src="assets/three-dots-vertical.svg" alt=""></button>
    `;

    //Eventlistener för "gå tillbaka-knappen"
    const backBtn = document.querySelector(".backBtn");
    backBtn.addEventListener("click", () => {
      window.location.href = "index.html";
    });

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
