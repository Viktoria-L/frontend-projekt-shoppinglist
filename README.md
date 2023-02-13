# Frontend-projekt Shopping list

## API routes

Metod	Route	Beskrivning

GET	/lists	Hämta alla listor

GET	/lists/:id	Hämta lista med ett visst ID

GET	/listsearch?listname=namn	Hämta alla listor som innehåller "namn" i listname

GET	/findlistbykey?key=k&value=v	Hämta alla listor där "key" innehåller "value"

POST	/lists	Skapa en ny lista

DELETE	/lists/:id	Ta bort en lista

POST	/lists/:id/items	Skapa ett nytt list item i lista med "id"

DELETE	/lists/:listid/items/:itemid	Ta bort list item med "itemid" i lista med "listid"

PUT	/lists/:listid/items/:itemid	Uppdatera item med "itemid" i lista med "listid"

## Fetch requests

API:et finns på: https://nackademin-item-tracker.herokuapp.com/

Om du skall spara data så måste du göra ditt anrop med Content-Type "application/json".

## Hämta alla listor

```js
const res = await fetch(`https://nackademin-item-tracker.herokuapp.com/lists`);
const data = await res.json();
Sök efter listor
const query = listNameField.value;
const res = await fetch(
  `https://nackademin-item-tracker.herokuapp.com/listsearch?listname=${query}`
);
const data = await res.json();
```

## Skapa ny lista

```js
const listname = createListNameField.value;
const customfield = customField.value;
const res = await fetch(`https://nackademin-item-tracker.herokuapp.com/lists`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    listname: listname,
    customfield: customfield,
  }),
});
const { list } = await res.json();
```

## Uppdatera en lista

```js
await fetch(`${API_BASE}lists/${currentList}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    listname: listname,
  }),
});
```

## Skapa nytt item i lista:

```js
const title = itemTitleField.value;
const desc = itemDescField.value;
const res = await fetch(
  `https://nackademin-item-tracker.herokuapp.com/lists/${currentList}/items`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      description: desc,
    }),
  }
);
const { list } = await res.json();
```

## Ta bort item ur lista

```js
const res = await fetch(
  `https://nackademin-item-tracker.herokuapp.com/lists/${currentList}/items/${item._id}`,
  {
    method: "DELETE",
  }
);
const { list } = await res.json();
```

## Uppdatera item i en lista

```js
const res = await fetch(`${API_BASE}lists/${currentList}/items/${item._id}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    checked: true,
  }),
});
const { list } = await res.json();
```

## Exempel-applikation

En applikation som använder sig av detta API går att titta på här: https://github.com/JonasStattin/item-tracker-demo