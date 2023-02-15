import { createDebugElements } from "./module-debug.js";
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
let debugMode = true;

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

const createListBtn = document.getElementById("newListBtn");
const currentContentDiv = document.getElementById("current-content");

const addAnItemDiv = document.querySelector(".addAnItemDiv");
const headerName = document.querySelector(".headerNameEdit");
const listItemsUl = document.querySelector("#listItems");
const saveBtnDiv = document.querySelector(".saveToApi");

let currentList = '';
let amountOfItems = -1;
let itemListArray = [];

let listObject = {
  customField: "grupp_e",
  itemList: itemListArray, 
  listname: "another list"
}

//Plus-knappen på index-sidan som ska ta en till skapa lista-vyn.
createListBtn.addEventListener("click", (event) => {
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

  //plus-knappen lägger till ett item i den "lokala" listan som gör att man kan redigera den innan den sparas till api
  addItemBtn.addEventListener("click", () => {
    
    if(listItemInput.value !== null && listItemInput.value !== ''){
      amountOfItems++;

    let li = document.createElement("li");
    li.innerHTML = `<span class="iconspans" id="${amountOfItems}"><img src="assets/trash.svg" id="delete${amountOfItems}" width="12px"></span><input type="text" value="${listItemInput.value}"></input>`;
    listItemsUl.append(li);
    itemListArray.push({title:listItemInput.value, checked: false, itemnumber: amountOfItems});
    console.log(itemListArray);
    let removeBtn = document.querySelector(`#delete${amountOfItems}`);
    removeBtn.addEventListener("click", (e) => {
      console.log(itemListArray)
      // console.log(+e.target.id.split("delete")[1] - 1);
      // let itemToDelete = +e.target.id.split("delete")[1]
      // itemListArray.splice(itemToDelete, 1);
      // itemListArray.filter(())
      li.remove();
      console.log(itemListArray)

      // itemListArray.forEach((item, i)=> {
      //   item.itemnumber = i;
      // })
      // amountOfItems--;
    })
    
    listItemInput.value = "";
    } else {
      alert("Fyll i ett item för att lägga till");
    }
  });

  //Spara-knapp som ska ha eventlistener/funktion att skicka datan till api:et
  let saveToAPIBtn = document.createElement("button");
  saveToAPIBtn.className = "saveBtn";
  saveToAPIBtn.innerText = "Save List";
  saveBtnDiv.append(saveToAPIBtn);

  saveToAPIBtn.addEventListener("click", ()=>{
    saveList();

        
  })
});

//Man lär behöva ha en loop då som loopar igenom alla Li-items och tar deras value och skickar in via POST?

async function saveList(){
  const listNameInput = document.querySelector(".nameinput");
  const listname = listNameInput.value;
const customfield = "grupp_e";
const res = await fetch(`https://nackademin-item-tracker.herokuapp.com/lists`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    listname: listname,
    customfield: "grupp_e",
  }),
});
const { list } = await res.json();
console.log(list)
currentList = list._id;
console.log(currentList);

saveItems();

}

async function saveItems(){
 
itemListArray.forEach(async (object)=>{  
 
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
})
}


