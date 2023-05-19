import { downloadCSS } from './cssDownload';
import { loadIconList } from './icons/editIcons';
let colourChanger = document.querySelector('#colour_changer');
let userColour = 'hsl(204, 61%, 43%)';
let downloadBtn = document.querySelector('.dwld');
let cssTemplate;

colourChanger.addEventListener('change', (e) => {
	let select = e.target;
	// remove # from hex code
	let value = select.value;

	userColour = value;

	downloadBtn.hasAttribute('disabled') &&
		downloadBtn.removeAttribute('disabled');
	updateCssTemplate();

});

const updateCssTemplate = () => {
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
	.ribbon,
	.ribbon-top,
	.circle {
		--icon-colour:var(--custom-colour);
		min-height: 100px;
		position: relative;
	}
	
	.ribbon::before,
	.ribbon-top::before,
	.circle::before {
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
	
	.ribbon::after,
	.ribbon-top::after,
	.circle::after {
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
	.circle::after {
			border-radius: 50%;
			width: 70px;
			height: 70px;
			top: -30px;
			left: -40px;
	}
	
	/* icons */
	.dyk::before {
			content: '\u005cf0eb';
			font-weight: 900;
	}
	
	.bug::before {
			content: '\u005cf188';
			font-weight: 900;
	}
	
	.info::before {
			content: '\u005cf05a';
			font-weight: 900;
	}
	
	.activity::before {
			content: '\u005cf303';
			font-weight: 900;
			font-size: 1.75rem;
	}
	`;
};

// CSS Download
downloadBtn.addEventListener('click', () => {
	downloadCSS('custom.css', cssTemplate);
	// console.log(userColour);
});
