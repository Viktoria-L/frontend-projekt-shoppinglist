let eGroupLists = await getOurLists();
const API_BASE = "https://nackademin-item-tracker.herokuapp.com/";
const currentContentContainer = document.getElementById("current-content")

printLists(eGroupLists)

console.log(eGroupLists)

let selectedList = null;

const headerName = document.querySelector(".headerNameEdit");

async function getOurLists() {
    const listResults = await fetch(
        `https://nackademin-item-tracker.herokuapp.com/findlistbykey?key=customfield&value=grupp_e`
    )
    let jsonList = await listResults.json();

    return jsonList;
}



function printLists(fetchedLists) {
    const previewContainer = document.createElement("div");
    previewContainer.className = "preview-container"
    currentContentContainer.append(previewContainer);



    previewContainer.innerHTML = "";  //clearing the container of content



    fetchedLists.forEach(list => {  //For each list item in the fetched array
        const previewObjekt = document.createElement("div");
        previewContainer.append(previewObjekt)
        previewObjekt.classList.add("preview-object");

        previewObjekt.dataset.listId = list._id;

        let listUL = document.createElement("ul")
        previewObjekt.append(listUL)

        //event listener för klickad lista
        previewObjekt.addEventListener('click', async function () {
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

        previewObjekt.innerHTML += `<p><span class="bold">${list.listname} </span></p> `
        if (list.itemList && Array.isArray(list.itemList)) {
            previewObjekt.innerHTML += `<ul>`;

            list.itemList.forEach(item => {
                if (count >= 5) {
                    previewObjekt.innerHTML += `.`
                    return;
                }
                console.log(item.checked)

                let listItemet = document.createElement("li");
                listItemet.innerHTML = (item.title) ? `${item.title}` : "no title ";
                (item.checked) ? listItemet.classList.add("checkedItem") : listItemet.classList.remove("checkedItem");
                previewObjekt.appendChild(listItemet);

                // previewObjekt.innerHTML += (item.title) ? `<li> ${item.title}  </li> ` : "no title ";

                // previewObjekt.innerHTML += (item.title) ? `<li> ${item.title}  </li> ` : "no title ";
                // previewObjekt.innerHTML += (item.checked) ? `<span class="bold">checked:</span>${item.checked} ` : "";


                count++;
            })
            // previewObjekt.innerHTML += + list.itemList.length - 5
            console.log()

        } else console.log("not an Array")
    });
}

//funktion som navigerar till ett preview items fulla vy

// https://nackademin-item-tracker.herokuapp.com/findlistbykey?key=customfield&value=grupp_e    // För att hitta vår grupps lista

function createNewList() {

}

function addItemToList(listItem) {

}
const listItemsUl = document.querySelector("#listItems");

function showSelectedList(selectedList) {
    console.log(selectedList._id)



    let listNamn = selectedList.listname

    selectedList.itemList.forEach(item => {

        let listItem = document.createElement("li");

        const checkboxInput = document.createElement("input");
        checkboxInput.type = "checkbox";        //typen av input
        checkboxInput.name = item.title;        //checkbox namn är list items namn
        checkboxInput.id = item._id;            //id för checkbox är items id
        checkboxInput.value = item.checked;     // chckbox value
        checkboxInput.checked = item.checked;   //visas som checked/unchecked beroende på true false value från item

        const labelA = document.createElement("label");
        labelA.setAttribute("for", item._id);
        labelA.innerHTML = item.title;

        (item.checked) ? listItem.classList.add("checkedItem") : listItem.classList.remove("checkedItem");


        listItem.appendChild(checkboxInput);
        listItem.appendChild(labelA);

        labelA.innerHTML += (item.qty) ? ` ${item.qty}` : " :1";


        // Funktion som ändrar om itemet är checked eller inte
        listItem.addEventListener("change", function () {
            item.checked = !item.checked;
            // labelA.classList.toggle("checkedItem");
            (item.checked) ? listItem.classList.add("checkedItem") : listItem.classList.remove("checkedItem");
            console.log(item.checked);
            console.log("item changed state");

            console.log(selectedList._id)
            console.log(item._id, "list item id", item.title)
            console.log(item.checked)

            updateCheckedState(selectedList._id, item._id, item.checked)
        });

        listItemsUl.append(listItem)
    })




    headerName.innerHTML = `
    <span class="backBtn"><img src="assets/back-arrow.svg" alt=""></span>
    <input type="text" class="nameinput" value="${listNamn}" onfocus="this.placeholder=''"></input>
    <button><img src="assets/three-dots-vertical.svg" alt=""></button>
    `;
    //Eventlistener för "gå tillbaka-knappen"
    const backBtn = document.querySelector(".backBtn");
    backBtn.addEventListener("click", () => {
        window.location.href = "index.html";
    });
}

export {
    printLists
}



// updateItem(item._id,)

// prövar att skapa en funktion som ska uppdatera

async function updateCheckedState(currentListId, item_id, checked_state) {

    await fetch(`${API_BASE}lists/${currentListId}/items/${item_id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            checked: checked_state,
        }),
    });
}