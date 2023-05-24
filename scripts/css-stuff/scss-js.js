export const loadScss = async () => {
	try {
		// ! this doesn't work in prod. Fetch the actual css file
		console.log(import.meta.env.PROD);
		let path = !import.meta.env.PROD
			? '/assets/scss/base/icons/_icons.scss'
			: './assets/index-a87d64c4.css';
		let resp = await fetch(path);
		let data = await resp.text();

		// ! In prod, data is different so regex doesn't match
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
