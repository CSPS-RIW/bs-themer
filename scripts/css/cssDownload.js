// Download CSS file
export function downloadCSS(filename, text) {
	const link = document.createElement('a');
	link.setAttribute(
		'href',
		'data:text/css;charset=utf-8,' + encodeURIComponent(text),
	);
	link.setAttribute('download', `${filename}.css`);

	link.style.display = 'none';
	document.body.appendChild(link);

	link.click();

	document.body.removeChild(link);
}
