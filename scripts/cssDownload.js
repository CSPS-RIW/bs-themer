// 1. Create a CSS template or use an existing CSS file
const cssTemplate = `
  /* Initial CSS styles */
  .myElement {
    color: black;
    background: white;
  }
`;

// 2. Capture user input (e.g., changing the background color)
const userInput = '#ff0000'; // User-selected color

// 3. Modify CSS dynamically
const dynamicStyles = `
  .myElement {
    background: ${userInput};
  }
`;

// 4. Create a new CSS file
const modifiedCSS = cssTemplate + dynamicStyles;

// 5. Download the CSS file
function downloadCSS(filename, text) {
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

// Usage: Call this function when the user wants to download the CSS file
downloadCSS('modified.css', modifiedCSS);
