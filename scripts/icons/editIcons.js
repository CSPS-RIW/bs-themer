// fetch iconlist
const loadIconList = async () => {
	let optionsArray = [];
	try {
		const resp = await fetch('/iconlist.json');
		let data = await resp.json();
		// console.log(data);
		// Create edit icon button
		let cards = Array.from(document.querySelectorAll('.card'));
		let { iconList } = data;
		// console.log(iconList);
		let iconNames = Array.from(Object.keys(iconList));
		let iconValues = Object.values(iconList);
		console.log(iconNames, iconValues);
		iconNames.map((icon, index) => {
			let option = document.createElement('opiton');
			option.setAttribute('value', icon);
			option.innerText = icon;
			optionsArray.push(option);
		});
		cards.map((card) => {
			let select = document.createElement('select');
			select.append(iconValues);
			!card.classList.contains('copy-this') &&
				card.insertAdjacentElement('beforebegin', select);
		});

		console.log(optionsArray);
	} catch (error) {
		console.error('Error fetching icons:', error);
	}
};

loadIconList();
