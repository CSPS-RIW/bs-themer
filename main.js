import './fontawesome-free-5.9.0-web/css/all.min.css';
import './assets/scss/styles.scss';

let cardText = document.querySelector('.card-text');
let editableP = Array.from(document.querySelectorAll('.card-text p'));
let cardBody = document.querySelector('.card-body');
const addParagraph = () => {
	const newParagraph = document.createElement('p');
	newParagraph.setAttribute('contenteditable', 'true');
	cardText.appendChild(newParagraph);
	newParagraph.focus();
	newParagraph.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			addParagraph();
		}
	});
};
editableP.map((paragraph) => {
	console.log(paragraph);
	paragraph.addEventListener('keydown', (e) => {
		if (e.key === 'Enter') {
			addParagraph();
		}
	});
});
