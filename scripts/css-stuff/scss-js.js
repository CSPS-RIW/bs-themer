export const loadScss = async () => {
	try {
		// ! this doesn't work in prod. Fetch the actual css file
		let resp = await fetch('/assets/scss/base/icons/_icons.scss');
		let data = await resp.text();

		let pattern = /:root \{([\s\S]*)\}/m;
		let matches = data.match(pattern);
		let cssCode = matches ? matches[0] : '';
		let cssArr = cssCode.split('\\n\\n');
		// TODO: RM '\n' && ','
		let cleanCode = '';
		let cleanStr;
		// console.log('dirty', cssCode);

		// cssArr.map((el) => {
		// 	cleanStr = el.replace(/\n/g, '');
		// 	cleanStr = cleanStr.replace(/\n/g, '');
		// 	cleanCode += cleanStr;
		// });
		// console.log('clean', cleanCode);

		return cssArr;
	} catch (error) {
		console.log(`Error fetching scss' ${error}`);
	}
};

// loadScss();
