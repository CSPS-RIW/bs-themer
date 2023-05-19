// fetch iconlist and create select menu with all icons
const loadIconList = async () => {
	try {
		const resp = await fetch('/iconlist.json');
		let data = await resp.json();

		// fetch data from public dir
		let { iconList } = data;
		let iconNames = Array.from(Object.keys(iconList));
		let iconValues = Object.entries(iconList);
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
				select.classList.add('custom-options');
				for (let i = 0; i < iconNames.length; i++) {
					let option = document.createElement('option');
					option.setAttribute('value', iconNames[i]);
					option.innerText = iconNames[i];
					// Add content for css ::before
					// TODO: Use data attrs to create css classes in cssTemplate.js
					option.setAttribute(
						'data-content',
						iconValues[i][1].content,
					);
					// Add optional attributes for css ::before
					iconValues[i][1].fontWeight &&
						option.setAttribute(
							'data-fontWeight',
							iconValues[i][1].fontWeight,
						);
					iconValues[i][1].fontSize &&
						option.setAttribute(
							'data-fontSize',
							iconValues[i][1].fontSize,
						);
					iconValues[i][1].bgColor &&
						option.setAttribute(
							'data-bgColor',
							iconValues[i][1].bgColor,
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
	let optionDropdown = Array.from(
		document.querySelectorAll('.custom-options'),
	);
	optionDropdown.map((option, index) => {
		let closestCard = option.nextElementSibling;
		option.addEventListener('input', () => {
			let chosenIcon = option.value;
			if (!closestCard.classList.contains(chosenIcon)) {
				// remove all other classes
				while (closestCard.classList.length > 0) {
					closestCard.classList.remove(closestCard.classList.item(0));
				}
				// add card classes and new chosen icon
				closestCard.classList.add(
					'card',
					'card-standard',
					'ribbon',
					chosenIcon,
				);
			}
		});
	});
};

loadIconList();
