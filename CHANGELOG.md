# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [0.1.1](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/compare/v0.1.0...v0.1.1) (2023-02-18)


### Features

* :sparkles: add eventlistener for change event ([52c782a](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/52c782a3dc3a6f286900f6128ec5cd295fea4f10))
* :sparkles: move addItem function to addItem(), add keydown event listener for adding items ([3cc601b](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/3cc601b018e8abfaac7be743996bc986ba494880))
* **CSS:** :lipstick: add styling for .ul-container ([635c07d](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/635c07d68c9d3762ce4e7586023b844a02000a7e))
* **CSS:** :lipstick: update .ul-container styling ([ed78b8d](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/ed78b8d126b2341461fbcb393e0fd053a576fe7c))
* **CSS:** :sparkles: add class hover and ID ([21a2094](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/21a20943845686f589599bcaf845cddaacab8434))
* **DOM output:** :sparkles: add Alex's functions to module-display-lists.js ([a675916](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/a67591678d06414aee1301d04e0358e30c8ce6ea))
* **DOM output:** :sparkles: add state, add functionality for edit button ([17d2b0a](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/17d2b0a5950fa714cd25e115e8f7138e84c553f7))
* **DOM output:** :sparkles: add stateEditMode.js which is a copy of stateViewMode.js (needs to change) ([63faa8c](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/63faa8cc3c9a3a94d6a66b54b48c9c8f96ae77b5))
* **DOM output:** :sparkles: add stateViewMode.js which is the old view one list function but split into a single file ([810ee18](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/810ee18adc69d2adeda034d772886a661df63a56))
* **DOM output:** :sparkles: add triggerDisplay() in main.js to view Alex's function ([eb2ee7c](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/eb2ee7c5bd3de4dea66daab2e8220c768c12be91))
* **DOM output:** :sparkles: use printLists() for now to display lists ([0429d9b](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/0429d9b412395be3b9b4eaf0f4646d59769633cd))
* **DOM output:** :sparkles: wrap everything in displayListsAlt function ([a90d7e9](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/a90d7e922d7c58a8289c727fccfd4dc351adac8d))
* **DOM output:** :sparkles: wrap listItemsUL in ulContainer to add flexbox ([3faf3aa](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/3faf3aa234f3c2e2bf67f3d4745457eb16e9af45))
* **fonts:** :lipstick: add font to * selector in default.css ([0466461](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/0466461b83c2650ea12f9d26f539cb5209a85f01))
* **fonts:** :sparkles: load sans serif font in index.html ([2574354](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/2574354800404e008c457067829f47ff382a89b2))


### Bug Fixes

* :ambulance: remove submobule which prevents github pages build ([25a4a72](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/25a4a7233626f35bfee190c2b84c01a3ed9e2cd7))
* :art: prettier formatting ([341682f](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/341682f1f0b16c42f50efa387d215f7ee76de720))
* :bug: fix path issue preventing github pages to work correctly ([6a27629](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/6a276292678131b5bb563f48b327d98008275025))
* :bulb: comment out click on addItemBtn since it is triggered on change anyway ([cfa1b4c](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/cfa1b4c4738ff0a0c707a00a6f7e4f5f33752b08))
* :fire: remove absolute button thingy ([f8670fd](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/f8670fd8b2915821a5364dc8c053c6d3bffacc81))
* :fire: remove bottom button styling from style.css ([3f5f80f](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/3f5f80f6fac990ce29c199d0d3e60210170c7ffc))
* :fire: remove console log ([2f573c9](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/2f573c9309d3c51a075af21c0dd8e14af4760500))
* :fire: remove currentlist.html ([2ca5f91](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/2ca5f91923ef3429633b1f7376cbf9661e6c0f6e))
* :fire: remove duplicate line loading default.css twice ([cfeb774](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/cfeb774a3b812a9676cc48dc7414ef29b1782e07))
* :fire: remove script from index.html (move to other file) ([c6bc019](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/c6bc0194d79d0642a83b72f79168fcf1b1f865da))
* :lipstick: improve bottom button styling a bit ([aa6e1c8](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/aa6e1c885cb1460133a53e8cbad5acd59121f602))
* :recycle: create new list function was moved here ([ac3eeca](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/ac3eeca4a93606649bdc5e3ca4f540934b247c1d))
* :recycle: move code out of main.js to stateEditMode.js ([90d2b59](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/90d2b59082b0ad4a12f6cae47f2b3ed53713ed89))
* :recycle: move itemlist edit function here ([990af6e](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/990af6e5bbf847dfcc14b289c15d7c0d4af0e660))
* :zap: replace change with button click ([d143f6d](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/d143f6d845842edf50be977e662c66000186e548))
* **CSS:** :bug: move hover class to img tag ([9681b5f](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/9681b5f0a183a8e209571b66ab4e872829531bd3))
* **CSS:** :bug: show input values in edit mode ([bdd8d5e](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/bdd8d5e584773d6ab9a7da0c6290ce7e6a1a4e53))
* **DOM output:** :bug: fix reference error (move function call) ([c7eb7fd](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/c7eb7fd764efdce03654d14ebf23cd27bb9aacb9))
* **DOM output:** :bug: fix ul again ([ebddb63](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/ebddb630df9eef2c609637c9c31efdf8752cb25a))
* **DOM output:** :bug: hide bottom button when viewing specific list ([078a2c6](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/078a2c62fa61b4badc76d8dfb9efe1eb06f840c5))
* **DOM output:** :bug: remove double function call ([54d38da](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/54d38da3791835188b2fc8591236cbac7f63d72b))
* **DOM output:** :bug: use other container (still bugged) ([88e45ba](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/88e45bafeabf130cd93b18e469f9ede0deb1e8ef))

## 0.1.0 (2023-02-15)


### Features

* :art: move stuff to module-debug and show it with a boolean debugMode ([fb5f3ad](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/fb5f3ad999c9bf2f0947ecc908d9e05156d4260e))
* :memo: add API reference documentation ([2de50c6](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/2de50c608086dd1b603868b7608d5f50130e86dc))
* :memo: add ECMAscript module explanation ([0ff4330](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/0ff4330d1f6ce3ae9ee3e0b1b9e81df4d28193ed))
* :memo: update README ([317557f](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/317557fa8625e2c5294047feed5ce5d32201b1e8))
* :memo: update README ([e93a97c](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/e93a97c5259e449e21ea19c9ffecfcce6b978129))
* :sparkles: add API scope to settings.json ([db2cb31](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/db2cb31e69f8b148b38e87f7a98cde7715341fff))
* :sparkles: add conventional commits scope ([fb5063e](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/fb5063e1610ea8162d75d2bf013144a115470af8))
* :sparkles: add data.js with an array of lists for offline use ([5ea09e0](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/5ea09e0f56b04160177cae92cbb34b15df39ae6d))
* :sparkles: add DOM output scope to settings.json ([79f830c](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/79f830cb88801b954f834cdbe4ff96e165355b9f))
* :sparkles: add module-api.js containing API functionality that is exported as a module ([0e5ca9d](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/0e5ca9d3bd2e4dab8ad95e21af2d792c09c809db))
* :sparkles: add type="module" in index.html to allow use of modules, top level await ([681773b](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/681773b1131245c5a843d67aa88e2d52a08b0bcf))
* :sparkles: import modules, add some buttons for testing, add comments to try to explain stuff ([df1ae7c](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/df1ae7cbabe54d1c5c58be2c637bcad6bd38b6f5))
* :sparkles: use offline functions for now (hopefully remember to switch back) ([aa5c4f5](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/aa5c4f5e193dc03bec2ca20667af4a85236069d8))
* :sparkles: WIP add get all lists button ([171894a](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/171894a7b4c4df12ec07bea841d486bdeffe6d22))
* **API:** :art: split offline functions into own file ([921b84e](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/921b84ee1a68ac9f7e8d3ed97c62febbf38df249))
* **API:** :sparkles: add getListsUsingCustomField() function ([bddd93a](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/bddd93a1c4d4ce1329897235102f8dd680cba5c8))
* **API:** :sparkles: add getListUsingID(), add deleteListUsingID() functions ([eb4d82f](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/eb4d82fe2f2a0f8dbed909c24be06a9c830b6da1))
* **API:** :sparkles: add lists variable that contains all of the lists ([b7e5c0f](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/b7e5c0f7559d6a5de2431e07b28d7d9303119174))
* **API:** :sparkles: add offline functions of the API functions that take in a file instead of fetching ([7233939](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/72339394021cf1bc3ede4466b9a8923e60aa92a6))
* **CSS:** :lipstick: add .bold CSS class ([6b53bf4](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/6b53bf4acef8c70d4d4a162358691920d844eabc))
* **DOM output:** :sparkles: add module-display-lists.js which has a function that outputs lists to the dom (in an ugly way) ([5934ba8](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/5934ba8420c3da53689dc928ed49b1406eafb62b))


### Bug Fixes

* :art: assign lists variable immediately ([51be4ad](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/51be4ad3792a8b936a7d677246dae3fd6f3e40c0))
* :bug: fix documentation ([61e9a19](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/61e9a190b4fbc37f1d9d38a0231ded1a24e5a12b))
* :bug: fix getAllListsButton (console log await the function) ([36d6bba](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/36d6bbaf8efd87701bf84eac6fe7eb7506014482))
* :bug: use key and value to display our lists ([32311c7](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/32311c7a3b82d57c5ceca22dab58219e462013d5))
* :fire: remove 5501 port from workspace settings.json ([a87a3d1](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/a87a3d101705e44a29ca909755241c47cd69053b))
* :sparkles: use new function and save them to lists (in debugMode) ([e9cc6bf](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/e9cc6bf3970263e60bb2eac32fb89ed8daf6618a))
* :zap: don't call API on every save/refresh etc, if you need it, set debugMode to true ([ddc9d34](https://github.com/Viktoria-L/frontend-projekt-shoppinglist/commit/ddc9d346ecb5b8bb67f34f747d1ec3905e9aa13e))
