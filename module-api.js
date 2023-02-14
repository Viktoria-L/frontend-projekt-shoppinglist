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