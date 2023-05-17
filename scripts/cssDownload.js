// Download CSS file
export function downloadCSS(filename, text) {
	const element = document.createElement('a');
	element.setAttribute(
		'href',
		'data:text/css;charset=utf-8,' + encodeURIComponent(text),
	);
	element.setAttribute('download', filename);

	element.style.display = 'none';
	document.body.appendChild(element);

	element.click();

	document.body.removeChild(element);
}
