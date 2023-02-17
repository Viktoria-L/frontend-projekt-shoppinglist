# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

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
