export async function filterByName(name) {
  let json = await getAllLists();
  let ids = [];
  // borde vara custom thingy sen istället för listname
  let result = json.filter((list) => list.listname.includes(name) === true);
  result.forEach((list) => {
    ids.push(list._id);
  });
  console.log(ids);
  return ids;
}

export async function getAllLists() {
  const res = await fetch(
    `https://nackademin-item-tracker.herokuapp.com/lists`
  );
  let data = await res.json();

  // ser finare ut men kanske inte nödvändigtvis bättre
  let stringifiedData = JSON.stringify(data);
  // console.log(stringifiedData);

  // om man vill loopa
  for (const list of data) {
    // console.log(list.listname);
  }
  return data;
}

// funktion som hämtar en lista med ett speciellt värde
export async function getListUsingID(id) {
  const res = await fetch(
    `https://nackademin-item-tracker.herokuapp.com/lists/${id}`
  );
  let data = await res.json();

  let stringifiedData = JSON.stringify(data);

  return data;
}

// funktion som tar bort lista med ett speciellt ID
// ta inte bort fel 😄
export async function deleteListUsingID(id) {
  if (!id) {
    return;
  }
  const res = await fetch(
    `https://nackademin-item-tracker.herokuapp.com/lists/${id}`,
    {
      method: "DELETE",
    }
  );
}
