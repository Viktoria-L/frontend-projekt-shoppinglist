# Frontend-projekt Shopping list

## API routes

| Metod  | Route                        | Beskrivning                                         |
| ------ | ---------------------------- | --------------------------------------------------- |
| GET    | /lists                       | Hämta alla listor                                   |
| GET    | /lists/:id                   | Hämta lista med ett visst ID                        |
| GET    | /listsearch?listname=namn    | Hämta alla listor som innehåller "namn" i listname  |
| GET    | /findlistbykey?key=k&value=v | Hämta alla listor där "key" innehåller "value"      |
| POST   | /lists                       | Skapa en ny lista                                   |
| DELETE | /lists/:id                   | Ta bort en lista                                    |
| POST   | /lists/:id/items             | Skapa ett nytt list item i lista med "id"           |
| DELETE | /lists/:listid/items/:itemid | Ta bort list item med "itemid" i lista med "listid" |
| PUT    | /lists/:listid/items/:itemid | Uppdatera item med "itemid" i lista med "listid"    |

## Fetch requests

API:et finns på: https://nackademin-item-tracker.herokuapp.com/

Om du skall spara data så måste du göra ditt anrop med Content-Type "application/json".

## Hämta alla listor

```js
const res = await fetch(
  `https://frontend-projekt-shoppinglist-svelte.vercel.app/api/test/lists`
);
const data = await res.json();
```

## Sök efter listor

```js
const query = listNameField.value;
const res = await fetch(
  `https://frontend-projekt-shoppinglist-svelte.vercel.app/api/test/listsearch?listname=${query}`
);
const data = await res.json();
```

## Skapa ny lista

```js
const listname = createListNameField.value;
const customfield = customField.value;
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
    }),
  }
);
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
  `https://frontend-projekt-shoppinglist-svelte.vercel.app/api/test/lists/${currentList}/items`,
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
  `https://frontend-projekt-shoppinglist-svelte.vercel.app/api/test/lists/${currentList}/items/${item._id}`,
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

## Nya funktioner

1. DELETE på en enskild lista
2. GET en enskild lista med hjälp av ID:t
3. GET alla listor där en viss key har ett visst värde, så tex:

GET https://nackademin-item-tracker.herokuapp.com/findlistbykey?key=customfield&value=Custom

> Med feature nr 3 blir det enklare för er att t.ex. ha ett custom-fält som innehåller namnet på eran app/grupp/etc, och hämta alla listor som just ni använder.

## Använd ID, inte namn

> Förtydligande om en sak: När ni jobbar med item-listorna, är det alltså ID:t på listan som skall användas, och inte namnet. Förtydligande om detta i dokumentationen, samt errorhantering är på plats strax!

## Schema

(från Jonas)
Gällande de kommande dagarna:

- 13/2 (idag): Harald är på plats fram till lunch, jag är på plats till c:a 16

- 15/2: Jag är på plats hela dagen, även tillgänglig på Discord

- 17/2: Jag är på plats hela dagen, även tillgänglig på Discord

- **20/2**: Demodag, demo körs via Zoom, jag är tillgänglig för frågor på Discord efter att Demosarna är avklarade, schema kommer på Discord och E-mail under denna vecka

- 22/2: Jag är på plats hela dagen, även tillgänglig på Discord

- 27/2: Jag är på plats hela dagen, även tillgänglig på Discord

- **1/3**: Presentationsdag, schema kommer på Discord och E-mail under denna vecka
