import { updateCssTemplate } from '../cssTemplate';
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
		let cardIndex = 0;
		cards.map((card) => {
			if (!card.classList.contains('copy-this')) {
				cardIndex++;
				// create label for a11y
				let label = document.createElement('label');
				label.innerText = 'Choose an icon';
				label.setAttribute('for', `options_${cardIndex}`);

				// create select and options
				let select = document.createElement('select');
				select.id = `options_${cardIndex}`;
				select.classList.add('custom-options');
				for (let i = 0; i < iconNames.length; i++) {
					let option = document.createElement('option');
					option.setAttribute('value', iconNames[i]);
					option.innerText = iconNames[i];
					// Add content for css ::before
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

		// Update css icons in style tag when fetched
		updateCssTemplate();
	} catch (error) {
		console.error('Error fetching icons:', error);
	}

	// Change icons
	let optionDropdown = Array.from(
		document.querySelectorAll('.custom-options'),
	);
	let codeArray = [];
	optionDropdown.map((option) => {
		let closestCard = option.nextElementSibling;
		let cardClases = Array.from(closestCard.classList);
		//Get current Icon Style and set it as a variable
		let iconStyle;
		for (let i = 0; i < cardClases.length; i++) {
			cardClases[i].startsWith('icon-') && (iconStyle = cardClases[i]);
		}

		option.addEventListener('input', () => {
			let chosenIcon = option.value;
			let closestCodeSample = closestCard.nextElementSibling.firstChild;
			let codeReplace = {
				'<': '&lt;',
				'>': '&gt;',
				'  ': '',
			};

			let formattedCode = '';

			if (!closestCard.classList.contains(chosenIcon)) {
				// remove all other classes
				while (closestCard.classList.length > 0) {
					closestCard.classList.remove(closestCard.classList.item(0));
				}
				// add card classes, icon Style and new chosen icon
				closestCard.classList.add(
					'card',
					'card-standard',
					iconStyle,
					chosenIcon,
				);
				formattedCode = closestCard.outerHTML.replace(
					/<|>|  /gi,
					(matched) => codeReplace[matched],
				);
				closestCodeSample.innerHTML = formattedCode;
				console.log(closestCodeSample);
			}
			// if (!closestCodeSample.classList.contains(chosenIcon)) {
			// 	// remove all other classes
			// 	while (closestCodeSample.classList.length > 0) {
			// 		closestCodeSample.classList.remove(
			// 			closestCodeSample.classList.item(0),
			// 		);
			// 	}
			// 	// add card classes, icon Style and new chosen icon
			// 	closestCodeSample.innerText = closestCard.innerHTML;
			// }
		});
	});
};

loadIconList();
