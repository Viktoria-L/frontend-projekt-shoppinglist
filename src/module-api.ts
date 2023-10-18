import { List } from "./types";

export async function filterByName(name: string) {
  let json = await getAllLists();
  let ids: string[] = [];
  // borde vara custom thingy sen istället för listname
  let result = json.filter(
    (list: List) => list.listname.includes(name) === true
  );
  result.forEach((list: List) => {
    ids.push(list._id);
  });
  console.log(ids);
  return ids;
}

export async function getAllLists() {
  const res = await fetch(
    `https://frontend-projekt-shoppinglist-svelte.vercel.app/api/test/lists`
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
export async function getListUsingID(id: number) {
  const res = await fetch(
    `https://frontend-projekt-shoppinglist-svelte.vercel.app/api/test/lists/${id}`
  );
  let data = await res.json();

  let stringifiedData = JSON.stringify(data);

  return data;
}

export async function getListsUsingCustomField(): Promise<List[]> {
  const res = await fetch(
    `https://frontend-projekt-shoppinglist-svelte.vercel.app/api/test/lists/findlistbykey?key=customfield&value=grupp_e`
  );
  let data: List[] = await res.json();

  let stringifiedData = JSON.stringify(data);

  return data;
}

// funktion som tar bort lista med ett speciellt ID
// ta inte bort fel 😄
export async function deleteListUsingID(id: number): Promise<void> {
  if (id === null) {
    console.log(id, "wrong");
    return;
  }
  const res = await fetch(
    `https://frontend-projekt-shoppinglist-svelte.vercel.app/api/test/lists/${id}`,
    {
      method: "DELETE",
    }
  );
}

//  funktion som deletear list-item

export async function deleteListItem(
  listId: number,
  listItemId: number
): Promise<void> {
  await fetch(
    `https://frontend-projekt-shoppinglist-svelte.vercel.app/api/test/lists/${listId}/items/${listItemId}`,
    {
      method: "DELETE",
    }
  );
}

export async function updateListItem(
  itemTitle: string,
  listId: number,
  listItemId: number
): Promise<void> {
  await fetch(
    `https://frontend-projekt-shoppinglist-svelte.vercel.app/api/test/lists/${listId}/items/${listItemId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: itemTitle,
      }),
    }
  );
}

export async function updateListTitle(
  listTitle: string,
  listId: number
): Promise<void> {
  await fetch(
    `https://frontend-projekt-shoppinglist-svelte.vercel.app/api/test/lists/${listId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        listname: listTitle,
      }),
    }
  );
  console.log("updateListTitle() done");
}

//Funktion för att lägga till nytt listitem i befintlig lista
export async function addNewListItem(
  listId: number,
  listiteminput: string
): Promise<void> {
  const title = listiteminput;
  const res = await fetch(
    `https://frontend-projekt-shoppinglist-svelte.vercel.app/api/test/lists/${listId}/items`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        checked: false,
      }),
    }
  );
  const { list } = await res.json();
}

export async function updateColor(
  color: string,
  listId: number
): Promise<void> {
  await fetch(
    `https://frontend-projekt-shoppinglist-svelte.vercel.app/api/test/lists/${listId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        color: color,
      }),
    }
  );
  console.log("updateColor() done");
}

export async function createCustomList(
  listname: string,
  color: string
): Promise<void> {
  const customfield = "grupp_e";
  const res = await fetch(
    `https://frontend-projekt-shoppinglist-svelte.vercel.app/api/test/lists`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        listname: listname,
        customfield: customfield,
        color: color,
      }),
    }
  );
  // const { list } = await res.json();
}
