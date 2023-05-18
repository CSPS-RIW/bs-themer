// fetch iconlist and create select menu with all icons
const loadIconList = async () => {
	try {
		const resp = await fetch('/iconlist.json');
		let data = await resp.json();

		// fetch data from public dir
		let { iconList } = data;
		let iconNames = Array.from(Object.keys(iconList));
		let iconValues = Object.entries(iconList);

		// create an option for each icon name

		// Target cards
		let cards = Array.from(document.querySelectorAll('.card'));
		// add select and options of each icon to each card
		cards.map((card) => {
			if (!card.classList.contains('copy-this')) {
				let select = document.createElement('select');
				for (let i = 0; i < iconNames.length; i++) {
					let option = document.createElement('option');
					option.setAttribute('value', iconNames[i]);
					option.innerText = iconNames[i];
					option.setAttribute(
						'data-content',
						iconValues[i][1].content,
					);
					option.setAttribute(
						'data-fontWeight',
						iconValues[i][1].fontWeight,
					);
					console.log();
					select.append(option);
					card.insertAdjacentElement('beforebegin', select);
				}
			}
		});
	} catch (error) {
		console.error('Error fetching icons:', error);
	}
};

loadIconList();
