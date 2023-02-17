import { createDebugElements } from "./module-debug.js";

import { printLists } from "/modules-testing.js"
import {
  filterByName,
  getAllLists,
  getListUsingID,
  deleteListUsingID,
  getListsUsingCustomField,
} from "./module-api.js";

// inte använd men länken till början av APIt
const API_BASE = "https://nackademin-item-tracker.herokuapp.com/";

// Globala variabler (for now)
let debugMode = false;

// variabel med alla listor
let lists;
if (debugMode) {
  lists = await getListsUsingCustomField();
  console.log(lists);
}

// om man vill skriva ut
// let stringifiedLists = JSON.stringify(lists);
// console.log("All lists:\n" + stringifiedLists);

// skapar debugelement om debugMode är true
createDebugElements(debugMode);

//Funktion för edit-knapp
function editFunc() {
  let editBtn = document.getElementById("editBtn");
  editBtn.addEventListener("click", () => {
    let remove = document.querySelectorAll(".remove");
    if (!editBtn.classList.contains("on")) {
      editBtn.classList.add("on");
      remove.forEach((element) => {
        element.classList.remove("hidden");
      });
    } else {
      editBtn.classList.remove("on");
      remove.forEach((element) => {
        element.classList.add("hidden");
      });
    }
  });
}

editFunc();

//Hitta id för listan som ska tas bort
let listView = document.getElementById("list-output");

listView.onclick = (e) => {
  console.log(e.target.parentElement.parentElement.id);
  let currentList = e.target.parentElement.parentElement;
  deleteListUsingID(currentList.id);
};

const createListBtn = document.getElementById("newListBtn");

const addAnItemDiv = document.querySelector(".addAnItemDiv");
const headerName = document.querySelector(".headerNameEdit");
const listItemsUl = document.querySelector("#listItems");
const saveBtnDiv = document.querySelector(".saveToApi");
const outputElement = document.querySelector("#list-output");

let currentList = "";
let itemListArray = [];

let listObject = {
  customField: "grupp_e",
  itemList: itemListArray,
  listname: "another list",
};

//Plus-knappen på index-sidan som ska ta en till skapa lista-vyn.
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

  //Element för inputfält där man skriver list-item + lägg till-knapp
  addAnItemDiv.innerHTML = `
    <input type="text" class="listiteminput" placeholder="Add an item..."></input>
    <button class="additembtn">+</button>
    `;
  const listItemInput = document.querySelector(".listiteminput");
  const addItemBtn = document.querySelector(".additembtn");

  listItemInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  });
  // listItemInput.addEventListener("change", (e) => {
    // addItem();
  // });

  //plus-knappen lägger till ett item i den "lokala" listan som gör att man kan redigera den innan den sparas till api
  // change-event körs när man trycker på knappen för inputfältet tappar fokus
  addItemBtn.addEventListener("click", () => { addItem(); });
  
  function addItem() {
    if (containsSpecialChars(listItemInput.value)) {
      alert("No special characters are allowed");
    } else {
      if (listItemInput.value !== null && listItemInput.value !== "") {
        //OM list-itemets namn redan finns i vår lokala array, alert eller skriv ut den.
        if (
          itemListArray.some((object) => object.title === listItemInput.value)
        ) {
          alert("That item already exists, write another one!");
        } else {
          let li = document.createElement("li");
          li.innerHTML = `<span class="iconspans"><img src="assets/trash.svg" id="${listItemInput.value}"  width="12px"></span><input type="text" value="${listItemInput.value}"></input>`;
          listItemsUl.append(li);
          let removeBtn = document.getElementById(`${listItemInput.value}`);

          //Funktion för att hitta rätt object i arrayen och ta bort den samtidigt som den tar bort utskriften
          function deleteObject(title) {
            let index = itemListArray.findIndex(
              (object) => object.title === title
            );
            itemListArray.splice(index, 1);
            li.remove();
          }

          itemListArray.push({ title: listItemInput.value, checked: false });
          console.log(itemListArray);

          removeBtn.addEventListener("click", (event) => {
            deleteObject(removeBtn.id);
            console.log(itemListArray);
          });

          listItemInput.value = "";
        }
      } else {
        alert("You need to write something to add an item ;)");
      }
    }
  }

  //Spara-knapp som ska ha eventlistener/funktion att skicka datan till api:et
  let saveToAPIBtn = document.createElement("button");
  saveToAPIBtn.className = "saveBtn";
  saveToAPIBtn.innerText = "Save List";
  saveBtnDiv.append(saveToAPIBtn);

  saveToAPIBtn.addEventListener("click", () => {
    saveList();
  });
});


function containsSpecialChars(str) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
}

//Funktion för att spara listan med angivet namn
async function saveList() {
  const listNameInput = document.querySelector(".nameinput");
  const listname = listNameInput.value;
  const customfield = "grupp_e";
  const res = await fetch(
    `https://nackademin-item-tracker.herokuapp.com/lists`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        listname: listname,
        customfield: "grupp_e",
      }),
    }
  );
  const { list } = await res.json();
  console.log(list);
  currentList = list._id;
  console.log(currentList);

  saveItems();
}

async function saveItems() {
  itemListArray.forEach(async (object) => {
    const title = object.title;
    const checked = object.checked;
    const res = await fetch(
      `https://nackademin-item-tracker.herokuapp.com/lists/${currentList}/items`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          checked: checked,
        }),
      }
    );

    const { list } = await res.json();
    console.log(list);
  });
}
