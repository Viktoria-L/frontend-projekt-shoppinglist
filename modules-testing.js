let ourLists = await getOurLists();

// let minData = await getAllLists()

printLists(ourLists)


console.log(ourLists)

let selectedList = null;




const headerName = document.querySelector(".headerNameEdit");


// export async function getAllLists() {
//     const res = await fetch(
//         `https://nackademin-item-tracker.herokuapp.com/lists`
//     );
//     let data = await res.json();
//     return data;
// }

async function getOurLists() {
    const listResults = await fetch(
        `https://nackademin-item-tracker.herokuapp.com/findlistbykey?key=customfield&value=grupp_e`
    )
    let usableList = await listResults.json();

    return usableList;
}






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

    let cContent = document.getElementById("current-content")
    let element = document.createElement("div");
    element.id = "display-lists";
    element.class = "grid-container"
    element.innerHTML = outputHTML;
    if (!document.querySelector("#display-lists")) {
        cContent.append(element);
    }
}








function printLists(fetchedLists) {
    // let cContent = document.getElementById("current-content")

    const currentCont = document.getElementById("current-content")
    const previewContainer = document.createElement("div");
    previewContainer.className = "preview-container"
    currentCont.append(previewContainer);

    previewContainer.innerHTML = "";  //clearing the container of content


    fetchedLists.forEach(list => {  //For each list item in the fetched array
        // console.log(list.listname, "Im listname")
        const previewObjekt = document.createElement("div");
        previewContainer.append(previewObjekt)
        previewObjekt.classList.add("preview-object");

        previewObjekt.dataset.listId = list._id;

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
        previewObjekt.innerHTML += `<span class="bold">${list.listname} </span></p> `


        if (list.itemList && Array.isArray(list.itemList)) {
            previewObjekt.innerHTML += `<ul>`;
            list.itemList.forEach(item => {
                if (count >= 5) return;

                previewObjekt.innerHTML += (item.title) ? `<li>${item.title} </li>` : "no title ";

                previewObjekt.innerHTML += (item.checked) ? `<span class="bold">checked:</span>${item.checked} ` : "";

                count++;
                // console.log(item, "im an item")
            })

        } else console.log("not an Array")
    });
}




//funktion som navigerar till ett preview items fulla vy

// https://nackademin-item-tracker.herokuapp.com/findlistbykey?key=customfield&value=grupp_e    // För att hitta vår grupps lista

function createNewList() {

}

function addItemToList(listItem) {

}


export {
    printLists
}


function showSelectedList(selectedList) {

    const currentCont = document.getElementById("current-content")
    let listItemParent = document.createElement("ul");





    console.log(selectedList)
    let listNamn = selectedList.listname
    console.log(listNamn)

    console.log(selectedList.itemList)

    selectedList.itemList.forEach(item => {
        let listItem = document.createElement("li");

        console.log(item.title)



        // console.log(item, "im an item")
    })




    headerName.innerHTML = `
    <span class="backBtn"><img src="assets/back-arrow.svg" alt=""></span>
    <input type="text" class="nameinput" placeholder="${listNamn}" onfocus="this.placeholder=''"></input>
    <button><img src="assets/three-dots-vertical.svg" alt=""></button>
    `;
    //Eventlistener för "gå tillbaka-knappen"
    const backBtn = document.querySelector(".backBtn");
    backBtn.addEventListener("click", () => {
        window.location.href = "index.html";
    });
}