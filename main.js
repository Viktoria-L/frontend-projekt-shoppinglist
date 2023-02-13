const API_BASE = "https://nackademin-item-tracker.herokuapp.com/";

let body = document.querySelector("body");
let p = document.createElement("p");
let button = document.createElement("button");
button.innerText = "click";
button.addEventListener("click", async () => getAllLists());

async function getAllLists() {
  const res = await fetch(
    `https://nackademin-item-tracker.herokuapp.com/lists`
  );
  const data = await res.json();
  // console.log(data);
  p.innerHTML += data;
  return data;
}
// let allLists = await getAllLists();
body.append(button);
body.append(p);
