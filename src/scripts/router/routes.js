let links = Array.from(document.querySelectorAll('.nav-link'));
let home = document.querySelector('.home');
let cardIcons = document.querySelector('.card-icons');

links.map((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		let currLink = link.id;
		if (currLink === 'card_icons' && cardIcons.hasAttribute('hidden')) {
			cardIcons.removeAttribute('hidden');
			cardIcons.setAttribute('aria-current', 'page');
			home.removeAttribute('aria-current');
			home.setAttribute('hidden', '');
			link.parentElement.previousElementSibling.classList.remove(
				'active',
			);
			link.parentElement.classList.add('active');
			console.log('home is hidden');
		}

		if (currLink === 'home' && home.hasAttribute('hidden')) {
			home.removeAttribute('hidden');
			home.setAttribute('aria-current', 'page');
			cardIcons.removeAttribute('aria-current');
			cardIcons.setAttribute('hidden', '');
			link.parentElement.nextElementSibling.classList.remove('active');
			link.parentElement.classList.add('active');
		}
	});
});
