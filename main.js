import './fontawesome-free-5.9.0-web/css/all.min.css';
import './assets/scss/styles.scss';
import './scripts/contrast';

let mainCard = document.querySelector('.card');
let cardText = document.querySelector('.card-text');
let editableP = Array.from(document.querySelectorAll('.card-text p'));
let cardBody = document.querySelector('.card-body');
let cardTitle = document.querySelector('.card-title');

// create paragraphs

const addParagraph = (e) => {
	e.preventDefault();
	const newParagraph = document.createElement('p');
	newParagraph.setAttribute('contenteditable', 'true');
	cardText.insertAdjacentElement('beforeend', newParagraph);
	newParagraph.focus();
	newParagraph.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			addParagraph(e);
		}
	});
};

editableP.map((paragraph) => {
	paragraph.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			addParagraph(e);
		}
	});
});

// if card title exists, add paragraph
if (cardTitle.hasChildNodes()) {
	Array.from(cardTitle.children).map((item) => {
		item.addEventListener('keydown', (e) => {
			if (e.key === 'Enter') {
				addParagraph(e);
			}
		});
	});
}

// create/repeate new elements
let changeAttr = document.querySelector('#change_attr');
const changeTextEl = (type, value) => {
	let selection = window.getSelection();
	if (selection.rangeCount === 0) return;

	let range = selection.getRangeAt(0);
	let currEl = range.commonAncestorContainer;

	// if current element is a text node, go up one level to get the parent element
	if (currEl.nodeType === Node.TEXT_NODE) {
		currEl = currEl.parentNode;
	}
	if (currEl.parentElement.classList.contains('card-editable')) {
		let newEl = document.createElement(value);
		newEl.classList.add(`card-${type}`);
		newEl.setAttribute('contenteditable', 'true');
		newEl.textContent = currEl.textContent;

		let parent = currEl.parentNode;
		parent.replaceChild(newEl, currEl);
		newEl.addEventListener('keydown', (e) => {
			if (e.key === 'Enter') {
				addParagraph(e);
			}
		});

		// set the cursor to the beginning of the new element
		let newRange = new Range();
		newRange.setStart(newEl, 0);
		newRange.setEnd(newEl, 0);
		selection.removeAllRanges();
		selection.addRange(newRange);
	}
};

changeAttr.addEventListener('change', (e) => {
	let select = e.target;
	let type = select.options[select.selectedIndex].getAttribute('data-type');
	let value = select.value;
	changeTextEl(type, value);
});

// Set accent colour
let colorChanger = document.querySelector('#colour_changer');
// let ribbonColor = document.querySelector('.ribbon');

colorChanger.addEventListener('input', () => {
	document.documentElement.style.setProperty(
		'--card-main-colour',
		colorChanger.value,
	);
	// ribbonColor.style.setProperty('--icon-colour', colorChanger.value);
});
