import { deleteListItem, updateListItem } from "./module-api.js";

export function editMode({ selectedList, listItemsUl, API_BASE, headerName }) {
  const outputElement = document.querySelector("#current-content");
  let currentList = "";
  let itemListArray = [];

  let listObject = {
    customField: "grupp_e",
    itemList: itemListArray,
    listname: "another list",
  };

  //Element för inputfält där man skriver list-item + lägg till-knapp
  let addAnItemDiv = document.createElement("div");
  addAnItemDiv.innerHTML = `
     <input type="text" class="listiteminput" placeholder="Add an item..."></input>
     <button class="additembtn">+</button>
     `;
  outputElement.append(addAnItemDiv);

  const listItemInput = document.querySelector(".listiteminput");
  const addItemBtn = document.querySelector(".additembtn");

  listItemInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      if (containsSpecialChars(listItemInput.value)) {
        alert("No special characters are allowed");
      } else {
        addItem();
      }
    }
  });

  let bottomButton = document.querySelector("#newListBtn");
  bottomButton.classList.add("hidden");
  if (selectedList) {
    selectedList.itemList.forEach((item) => {
      // console.log("ITEM IS" + item.title)
      itemListArray.push(item);
    });
    // console.log("editing list" + JSON.stringify(itemListArray));
    // console.log(selectedList);

    let listNamn = selectedList.listname;

    function deleteObject(title, element) {
      let index = itemListArray.findIndex((object) => object.title === title);
      itemListArray.splice(index, 1);
      element.remove();
    }

    selectedList.itemList.forEach((item) => {
      let listItem = document.createElement("li");

      /* const checkboxInput = document.createElement("input"); */
      /* checkboxInput.type = "checkbox"; //typen av input
        checkboxInput.name = item.title; //checkbox namn är list items namn
        checkboxInput.id = item._id; //id för checkbox är items id
        checkboxInput.value = item.checked; // chckbox value
        checkboxInput.checked = item.checked; //visas som checked/unchecked beroende på true false value från item
  
        console.log(checkboxInput)  */
      /* checked=${item.checked} */

      let trashId = () =>{
        let trash = item.title.replaceAll(" ", "-").replaceAll(".", "").replaceAll(",", "");
        return trash;
      }
      let trashName = trashId();
      console.log(trashName)

      const labelA = document.createElement("label");
      labelA.setAttribute("for", item._id);
      labelA.classList.add("itemContainer", "editing");
      labelA.innerHTML = `<span class="iconspans"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" id="${trashName}" width="12px"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></span>
    <input type="text" value="${item.title}" id="item_${item._id}"></input>`;

      item.checked
        ? listItem.classList.add("checkedItem")
        : listItem.classList.remove("checkedItem");

      /* listItem.appendChild(checkboxInput); */
      listItem.appendChild(labelA);
      console.log(labelA);

      /* labelA.innerHTML += item.qty ? ` ${item.qty}` : " :1"; */

      // Funktion som ändrar om itemet är checked eller inte

      listItemsUl.append(listItem);



      let currentListItem = document.getElementById(`item_${item._id}`);

      // EDIT LIST-ITEM AND PUT NEW VALUE TO API
      // WHEN TEXTINPUT LOSES FOCUS
      currentListItem.addEventListener("focusout", (e) => {
        updateListItem(e.target.value, selectedList._id, item._id);
      });
      // WHEN KEYUP ENTER
      currentListItem.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          updateListItem(e.target.value, selectedList._id, item._id);
          currentListItem.blur();
        }
      });


      let removeBtn = document.getElementById(`${trashName}`);
      console.log(removeBtn);
      
        console.log("ny info",item._id);
      removeBtn.setAttribute("list_id", item._id);
      removeBtn.addEventListener("click", (event) => {
        // removes item from DOM and api
        deleteObject(removeBtn.id, labelA);
        console.log("pressed item", event.target.getAttribute("list_id"));
        console.log("current list", selectedList._id);
        deleteListItem(selectedList._id, event.target.getAttribute("list_id"));
      });
    });
    /* headerName.innerHTML = "this is edit mode"; */
    headerName.innerHTML = `
        <p class="thisIsEdit">this is edit mode</p>
        <span class="backBtn hover"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></span>
        <input type="text" class="nameinput list-color-header-${selectedList.color ?? 'default'}" value="${listNamn}" onfocus="this.placeholder=''"></input>
        <button id="button-editmode"><svg class="hover" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><use xlink:href="/assets/three-dots-vertical.svg#three-dots-vertical"></use></button>
        `;
    console.log(selectedList._id, selectedList.listname);
    console.log(selectedList.itemList[0]._id, selectedList.itemList[0].title);
  } else {
    console.log("creating list");
  }

  //Eventlistener för "gå tillbaka-knappen"
  const backBtn = document.querySelector(".backBtn");
  backBtn.addEventListener("click", () => {
    bottomButton.classList.remove("hidden");
    window.location.href = "";
  });

  outputElement.append(listItemsUl);

  //plus-knappen lägger till ett item i den "lokala" listan som gör att man kan redigera den innan den sparas till api
  // change-event körs när man trycker på knappen för inputfältet tappar fokus
  addItemBtn.addEventListener("click", () => {
    addItem();
  });

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
          li.innerHTML = `<span class="iconspans"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> id="${listItemInput.value}" width="12px"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></span>
        <input type="text" value="${listItemInput.value}" id="item_${listItemInput.value}"></input>`;
          listItemsUl.append(li);
          let removeBtn = document.getElementById(`${listItemInput.value}`);
          let inputfields = document.getElementById(
            `item_${listItemInput.value}`
          );
          console.log(inputfields);

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

          function updateListItemLocally(previoustitle) {
            let index = itemListArray.findIndex(
              (object) => object.title === previoustitle
            );
            itemListArray.splice(index, 1);
            itemListArray.splice(index, 0, {
              title: changeValue,
              checked: false,
            });
          }

          let changeValue = "";
          li.addEventListener("change", (event) => {
            if (containsSpecialChars(event.target.value)) {
              alert("No special characters are allowed");
            } else {
              changeValue = event.target.value;
            }

            let previousValue = event.target.id;
            let previousVal = previousValue.replace("item_", "");
            updateListItemLocally(previousVal);
          });

          listItemInput.value = "";
        }
      } else {
        alert("You need to write something to add an item ;)");
      }
    }
  }

  let saveBtnDiv = document.createElement("div");
  outputElement.append(saveBtnDiv);
  //Spara-knapp som ska ha eventlistener/funktion att skicka datan till api:et
  let saveToAPIBtn = document.createElement("button");
  if (selectedList) {
    saveToAPIBtn.className = "saveBtn";
    saveToAPIBtn.innerText = "Update List";
    saveBtnDiv.append(saveToAPIBtn);
  } else {
    saveToAPIBtn.className = "saveBtn";
    saveToAPIBtn.innerText = "Save List";
    saveBtnDiv.append(saveToAPIBtn);
  }
  saveToAPIBtn.addEventListener("click", () => {
    if (selectedList) {
      console.log("TODO (update list)");
    } else {
      saveList();
      listItemsUl.innerHTML = "";
      let p = document.createElement("p");
      p.innerText = "Your list have been saved!";
      p.style.color = "green";
      saveBtnDiv.append(p); //töm fälten och meddela att listan sparats
    }
  });

    // color select för lista här

    function resetSelectedColorClass() {
      let labels = document.querySelectorAll(".color-select-label");
      labels.forEach((label) => {
        label.classList.remove("color-is-selected");
      });
    }
  
    let colors = [
      "default",
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "purple",
    ];
    let selectedColor;
  
    let colorSelectDiv = document.createElement("div");
    colorSelectDiv.className = "color-select-div";
    colors.forEach((color) => {
      let colorButton = document.createElement("input");
      colorButton.className = `color-select color-select-${color}`;
      colorButton.id = `color-select-${color}`;
      colorButton.type = "radio";
      colorButton.name = "selectAColor";
      colorButton.value = color;
  
      let colorButtonLabel = document.createElement("label");
      colorButtonLabel.className = `color-select-label color-select-label-${color}`;
      colorButtonLabel.htmlFor = `color-select-${color}`;
      // colorButtonLabel.innerText = color;
  
      colorButton.addEventListener("click", (e) => {
        selectedColor = color;
        resetSelectedColorClass();
        colorButtonLabel.classList.add("color-is-selected");
        console.log(`selected color: ${selectedColor}`);
      });
      colorSelectDiv.append(colorButtonLabel);
      colorButtonLabel.append(colorButton);
    });
  
    

    let colorSelectFrame = document.createElement("div");
    colorSelectFrame.className = "color-select-frame";
    colorSelectFrame.innerHTML = `<h2 class="color-select-h2">Choose a color for your list:</h2>`;
    colorSelectFrame.append(colorSelectDiv);
    outputElement.append(colorSelectFrame);

  
    // color select slut

  function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|<>\/?~]/;
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
          color: selectedColor,
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
}
