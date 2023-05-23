let links = Array.from(document.querySelectorAll('.nav-link'));
let home = document.querySelector('.home');
let cardIcons = document.querySelector('.card-icons');

links.map((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		let currLink = link.id;
		if (currLink === 'card_icons' && cardIcons.hasAttribute('hidden')) {
			cardIcons.removeAttribute('hidden');
			home.setAttribute('hidden', '');
			console.log('home is hidden');
		} else if (
			currLink === 'card_icons' &&
			!cardIcons.hasAttribute('hidden')
		) {
			return;
		}

		if (currLink === 'home' && home.hasAttribute('hidden')) {
			home.removeAttribute('hidden');
			cardIcons.setAttribute('hidden', '');
		} else if (currLink === 'home' && !home.hasAttribute('hidden')) {
			return;
		}
	});
});
