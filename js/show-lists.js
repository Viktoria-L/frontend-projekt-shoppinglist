/*

ITEM STRUCTURE
<div>
	<h2>List title</h2>
	<ul>
		<li>
			<input type="checkbox">
			<input type="text">
		</li>
		...
	</ul>
</div>

*/

const statusElement = document.querySelector('#output-status');
const outputElement = document.querySelector('#window-list-content');
let result = '';

function display(outputArray) {
	console.log(outputArray);

	const isEmpty = outputArray.length === 0
	statusElement.style = 'display: ' + (isEmpty && 'block' || 'none')
	statusElement.innerHTML = isEmpty && 'No lists available!' || ''

	for (let i = 0; i < outputArray.length; i++) {
		let list = outputArray[i];
		let listName = list.listname || '???'
		let children = list.itemList

		let isNotArray = !Array.isArray(children)
		if (isNotArray) {continue;}

		result += `
		<div>
			<h2 class="list-title">${listName}</h2>
			<ul>
		`
		children.forEach((item) => {
			let checkedText = item.checked && 'checked' || ''
			let itemName = item.title || '???'

			result += `
				<li>
					<input type="checkbox" ${checkedText}>
					<input type="text" value="${itemName}">
				</li>
			`
		})

		result += `
			</ul>
		</div>
		`
	}
	console.log(outputElement);
	outputElement.innerHTML = result;
	//json = JSON.stringify(outputObj);
	//output.innerHTML = json;
}

statusElement.innerHTML = 'Loading lists...';
// https://nackademin-item-tracker.herokuapp.com/findlistbykey?key=customfield&value=Custom

fetch(API_BASE + '/findlistbykey?key=customfield&value=' + API_FILTER)
	.then((response) => response.json())
	.then(display);
