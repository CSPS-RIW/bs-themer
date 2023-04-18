import './fontawesome-free-5.9.0-web/css/all.min.css';
import './assets/scss/styles.scss';

let cardText = document.querySelector('.card-text');
let editableP = Array.from(document.querySelectorAll('.card-text p'));
let cardBody = document.querySelector('.card-body');
let cardTitle = document.querySelector('.card-title');

// create paragraphs

const addParagraph = () => {
	const newParagraph = document.createElement('p');
	newParagraph.setAttribute('contenteditable', 'true');
	cardText.insertAdjacentElement('beforeend', newParagraph);
	newParagraph.focus();
	newParagraph.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			addParagraph();
		}
	});
};

editableP.map((paragraph) => {
	paragraph.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			addParagraph();
		}
	});
});

// if card title exists, add paragraph
if (cardTitle.hasChildNodes()) {
	// cardTitle.ch
	Array.from(cardTitle.children).map((item) => {
		item.addEventListener('keydown', (e) => {
			if (e.key === 'Enter') {
				addParagraph();
			}
		});
	});
}

// create/replate new elements
let changeAttr = document.querySelector('#change_attr');
const changeTextEl = (type, value) => {
	let currEl = document.querySelector(`.card-${type}`);
	let attrChanger = value;
	let newEl = document.createElement(attrChanger);
	newEl.classList.add(`card-${type}`);
	newEl.setAttribute('contenteditable', 'true');
	newEl.textContent = currEl.textContent;
	currEl.parentNode.replaceChild(newEl, currEl);
};

changeAttr.addEventListener('change', (e) => {
	let select = e.target;
	let type = select.options[select.selectedIndex].getAttribute('data-type');
	let value = e.target.value;
	changeTextEl(type, value);
});

// Set accent colour
let colorChanger = document.querySelector('#colour_changer');

colorChanger.addEventListener('input', () => {
	document.documentElement.style.setProperty(
		'--card-main-colour',
		colorChanger.value,
	);
});
