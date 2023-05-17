let changeAttr = document.querySelector('#colour_changer');

changeAttr.addEventListener('change', (e) => {
	let select = e.target;
	// remove # from hex code
	let value = select.value.slice(1).toUpperCase();
	let url = `
    https://webaim.org/resources/contrastchecker/?fcolor=${value}&bcolor=FFFFFF&api
    `;

	validateContrast(url);
});

async function validateContrast(url) {
	try {
		let resp = await fetch(url);
		if (!resp.ok) throw new Error(`Error with status ${resp.status}`);
		let data = await resp.json();
		console.log(data);
		return data;
	} catch (error) {
		console.error('Error', error);
	}
}
