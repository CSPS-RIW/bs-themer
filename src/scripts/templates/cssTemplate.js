import { downloadCSS } from '../cssDownload';
import { iconClassNameGenerator } from '../../utils/iconClassNameGenerator';
import { accordionTemplate } from './accordions';
import { timelineTemplate } from './timelines';
import { iconTemplate } from './icons';
import { textTemplate } from './text';
import { cardTemplate } from './card';

let colourChanger = document.querySelector('#colour_changer');
let userColour = 'hsl(204, 61%, 43%)';
let downloadBtn = document.querySelector('.dwld');
let cssTemplate;
let cssIconClasses = '';
colourChanger.addEventListener('change', (e) => {
	let select = e.target;
	let value = select.value;

	userColour = value;

	downloadBtn.hasAttribute('disabled') &&
		downloadBtn.removeAttribute('disabled');
	updateCssTemplate();
});

export const updateCssTemplate = () => {
	// Prevent iconClasses duplication
	let icons = Array.from(
		document.querySelectorAll('.custom-options > option'),
	);

	cssIconClasses = iconClassNameGenerator(icons, cssIconClasses);

	// Append css icon classes to head
	let styleTag = document.querySelector('.live-styles');
	styleTag.textContent = cssIconClasses;

	// Main css template
	cssTemplate = `:root {
		--custom-colour: ${userColour};
	}

	/* Text Styles  */
	${textTemplate}

	/* Card styles */
	${cardTemplate}

	/* Icons */
	${iconTemplate}

	/* Auto generatod icons */
	${cssIconClasses}

	/* Accordions */
	${accordionTemplate}

	/* Timelines */
	${timelineTemplate}
	`;
};

// CSS Download
downloadBtn.addEventListener('click', () => {
	downloadCSS('custom', cssTemplate);
	// console.log(userColour);
});
