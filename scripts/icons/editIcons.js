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
		cards.map((card, index) => {
			if (!card.classList.contains('copy-this')) {
				// create label for a11y
				let label = document.createElement('label');
				label.innerText = 'Choose an icon';
				label.setAttribute('for', `options_${index}`);

				// create select and options
				let select = document.createElement('select');
				select.id = `options_${index}`;
				for (let i = 0; i < iconNames.length; i++) {
					let option = document.createElement('option');
					option.setAttribute('value', iconNames[i]);
					option.innerText = iconNames[i];
					// Add content for css ::before
					option.setAttribute(
						'data-content',
						iconValues[i][1].content,
					);
					// Add font size info for css ::before
					option.setAttribute(
						'data-fontWeight',
						iconValues[i][1].fontWeight,
					);

					// add dynamic elements to dom
					select.insertAdjacentElement('beforebegin', label);
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
