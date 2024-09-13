// Set accent colour
let colorChanger = document.querySelector('#colour_changer');

colorChanger.addEventListener('input', () => {
	document.documentElement.style.setProperty(
		'--card-main-colour',
		colorChanger.value,
	);
});