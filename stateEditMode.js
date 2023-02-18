export function editMode({ selectedList, listItemsUl, API_BASE, headerName }) {
  let bottomButton = document.querySelector("#newListBtn");
  bottomButton.classList.add("hidden");
  console.log(selectedList._id);

  let listNamn = selectedList.listname;
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

    const labelA = document.createElement("label");
    labelA.setAttribute("for", item._id);
    labelA.classList.add("itemContainer");
    labelA.innerHTML =
      `<input type="checkbox" name=${item.title} id=${item._id} value=${item.checked} /><span class="checkmark"></span>` +
      item.title;

    console.log(labelA);

    item.checked
      ? listItem.classList.add("checkedItem")
      : listItem.classList.remove("checkedItem");

    /* listItem.appendChild(checkboxInput); */
    listItem.appendChild(labelA);

    /* labelA.innerHTML += item.qty ? ` ${item.qty}` : " :1"; */

    // Funktion som ändrar om itemet är checked eller inte

    listItemsUl.append(listItem);
  });
  headerName.innerHTML = "this is edit mode";
  headerName.innerHTML += `
      <span class="backBtn"><img src="assets/back-arrow.svg" alt=""></span>
      <input type="text" class="nameinput" value="${listNamn}" onfocus="this.placeholder=''"></input>
      <button id="button-editmode"><img class="hover" src="assets/three-dots-vertical.svg" alt=""></button>
      `;

  //Eventlistener för "gå tillbaka-knappen"
  const backBtn = document.querySelector(".backBtn");
  backBtn.addEventListener("click", () => {
    bottomButton.classList.remove("hidden");
    window.location.href = "index.html";
  });
}
