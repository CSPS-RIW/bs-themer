import { downloadCSS } from './cssDownload';
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

const updateCssTemplate = () => {
	//  Use data attrs to create css classes generated in  editIcons.js
	let icons = Array.from(
		document.querySelectorAll('.custom-options > option'),
	);
	icons.map((icon) => {
		let fontWeight = icon.getAttribute('data-fontWeight');
		let fontSize = icon.getAttribute('data-fontSize');
		let content = icon.getAttribute('data-content');

		cssIconClasses += `.${icon.value}::before {
		content: '${content}';
		${fontWeight ? `font-weight: ${fontWeight};` : ''}
        ${fontSize ? `font-size: ${fontSize};` : ''}
	}\n
	`;
		// TODO: refactor
		// Append css icon classes to head on prod
		if (import.meta.env.PROD) {
			let newContent = content.replace(/u005c/g, '\\');
			let newCSS = `.${icon.value}::before {
			content: '${newContent}';
			${fontWeight ? `font-weight: ${fontWeight};` : ''}
			${fontSize ? `font-size: ${fontSize};` : ''}
		}
		`;

			let styleTag = document.createElement('style');
			let head = document.querySelector('head');
			console.log('template updated');
			styleTag.append(newCSS);
			head.append(styleTag);
		}
	});

	// Main css template
	cssTemplate = `:root {
		--custom-colour: ${userColour}
	}
	
	/* Text Styles  */
	body .data h1 {
		color: var(--custom-colour);
		filter: grayscale(0.2);
	}
	
	body .data h2,
	body .data h3,
	body .data h4,
	body .data h5,
	body .data h6 {
		color: var(--custom-colour);
		filter: grayscale(0.6);
	}
	
	/* Card styles */
	body .data .card.card-standard {
		border-color:var(--custom-colour);
	}
	
	/* Base icon styles */
	.icon-diamond,
	.icon-square,
	.icon-circle {
		--icon-colour:var(--custom-colour);
		min-height: 100px;
		position: relative;
	}
	
	.icon-diamond::before,
	.icon-square::before,
	.icon-circle::before {
			position: absolute;
			display: inline-block;
			background-repeat: no-repeat;
			text-rendering: auto;
			-webkit-font-smoothing: antialiased;
			font-family: 'Font Awesome 5 Free';
			height: 48px;
			width: 48px;
			font-size: 2rem;
			color: var(--icon-colour);
			top: -30px;
			left: -40px;
			text-align: center;
			display: flex;
			justify-content: center;
			padding: 1.75rem;
			align-items: center;
			z-index: 2;
		}
	
	.icon-diamond::after,
	.icon-square::after,
	.icon-circle::after {
		content: '';
		position: absolute;
		height: 60px;
		width: 60px;
		top: -25px;
		left: -35px;
		background-color: #fff;
		transform: rotate(45deg);
		z-index: 1;
		border: 4px solid var(--icon-colour);
	}
	
	/* icon style */
	.icon-circle::after {
			border-radius: 50%;
			width: 70px;
			height: 70px;
			top: -30px;
			left: -40px;
	}
	
	/* icons */
	${cssIconClasses}

	/* accordions */
	`;
};

// CSS Download
downloadBtn.addEventListener('click', () => {
	downloadCSS('custom.css', cssTemplate);
	// console.log(userColour);
});
if (import.meta.env.PROD) {
	document.addEventListener('DOMContentLoaded', updateCssTemplate());
}
