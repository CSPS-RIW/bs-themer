import './fontawesome-free-5.9.0-web/css/all.min.css';
import './assets/scss/styles.scss';
import './scripts/contrast';
import './scripts/cssTemplate';
import './scripts/icons/editIcons';

// Set accent colour
let colorChanger = document.querySelector('#colour_changer');

colorChanger.addEventListener('input', () => {
	document.documentElement.style.setProperty(
		'--card-main-colour',
		colorChanger.value,
	);
});

// Code sample stuff

let compSample = Array.from(document.querySelectorAll('.component-sample'));

compSample.map((component) => {
	let copyBtn = component.querySelector('.copy-btn');
	let componentName = component.querySelector('div').classList[0];
	copyBtn.setAttribute('title', `Copy code for ${componentName} component`);
	copyBtn.innerText = `Copy ${componentName} component`;
});
