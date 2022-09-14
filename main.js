//query selectors
const gridContainer = document.querySelector('#gridContainer');

const btnrnColors = document.querySelector('.btnRandomColors');

const gridDropDown = document.querySelector('#getGrid');

//Function that creates grid
function addDivs(rows, cols) {
	gridContainer.style.setProperty('--grid-rows', rows);
	gridContainer.style.setProperty('--grid-cols', cols);
	for (i = 0; i < rows * cols; i++) {
		let square = document.createElement('div');
		square.classList.add('grid-item');
		square.classList.add('white');
		gridContainer.appendChild(square);
	}
	hoverColor();
}

//function that randomly selects blue or white
let randomColor = function () {
	const colors = ['blue', 'white'];

	const index = Math.floor(Math.random() * 2);
	return colors[index];
};

//function that changes div color uponed being hovered
function hoverColor() {
	let items = document.querySelectorAll('.grid-item');
	items.forEach((item) => {
		item.addEventListener('mouseover', (event) => {

			event.target.removeAttribute('style');

			const target = event.target;
			if (target.classList.toString().includes('white')) {
				target.classList.remove('white');
				target.classList.add('blue');
			} else {
				target.classList.remove('blue');
				target.classList.add('white');
			}
		});
	});
}

//grid creationg
addDivs(5, 5);

// Load random colors on button click

btnrnColors.addEventListener('click', (e) => {
	const items = document.querySelectorAll('.grid-item');

	items.forEach((item) => {
		item.style.backgroundColor = `${randomColor()}`;
	});
});

// Assign grid size using dropdown

gridDropDown.addEventListener('change', (e) => {
	gridContainer.innerHTML = '';
	const gridNumber = e.target.value.split('-')[1];
	addDivs(gridNumber, gridNumber);
});

// Change grid item between blue and white on hover
const applyRandomColors = () => {
	let items = document.querySelectorAll('.grid-item');
	items.forEach((item) => {
		item.addEventListener('mouseover', (event) => {

			event.target.removeAttribute('style');

			const target = event.target;
			if (target.classList.toString().includes('white')) {
				target.classList.remove('white');
				target.classList.add('blue');
			} else {
				target.classList.remove('blue');
				target.classList.add('white');
			}
			// item.style.backgroundColor = `${randomColor()}`;
		});
	});
};
