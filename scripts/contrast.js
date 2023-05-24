let colourChanger = document.querySelector('#colour_changer');
let ratio = document.querySelector('.ratio');
let aa = document.querySelector('.aa');
let aaLarge = Array.from(document.querySelectorAll('.aa-large'));
let aaa = document.querySelector('.aaa');
let aaaLarge = document.querySelector('.aaa-large');
let permalink = document.querySelector('.permalink');

colourChanger.addEventListener('change', (e) => {
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
		ratio.innerText = data.ratio;
		aa.innerText = data.AA;
		aaLarge.map((tag) => {
			tag.innerText = data.AALarge;
		});
		aaa.innerText = data.AAA;
		aaaLarge.innerText = data.AAALarge;

		return data;
	} catch (error) {
		console.error('Error', error);
	}
}
