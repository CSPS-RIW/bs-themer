const iconClassNameGenerator = (elements, cssClasses) => {
	elements.map((el) => {
		let fontWeight = el.getAttribute('data-fontWeight');
		let fontSize = el.getAttribute('data-fontSize');
		let content = el.getAttribute('data-content');

		cssClasses += `[class^='icon'].${el.value}::before {
			content: '\\${content}';
			${fontWeight ? `font-weight: ${fontWeight};` : ''}
			${fontSize ? `font-size: ${fontSize};` : ''}
		}\n`;
	});

	return cssClasses;
};

export { iconClassNameGenerator };
