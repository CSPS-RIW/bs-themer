const loadScss = async () => {
	try {
		let resp = await fetch('/assets/scss/base/icons/_icons.scss');
		let data = await resp.text();

		let pattern = /:root \{([\s\S]*)\}/m;
		let matches = data.match(pattern);
		let cssCode = matches ? matches[0] : '';
		let cssArr = cssCode.split('\\n\\n');
		let cleanCode = '';

		cssArr.map((el) => {
			cleanCode += el;
		});
		console.log(cleanCode);
	} catch (error) {
		console.log(`Error fetching scss' ${error}`);
	}
};

loadScss();
