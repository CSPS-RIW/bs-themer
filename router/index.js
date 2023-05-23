let app = document.querySelector('#app');
const route = (e) => {
	e.preventDefault();

	// use history api to add data to searchbar
	window.history.pushState({}, '', e.target.href);
	findLocation();
};

const routes = {
	404: '/content/404.html',
	'/': '/content/home.html',
	'/card-icons': '/content/card-icons.html',
};

const findLocation = async () => {
	const path = window.location.pathname;
	const route = routes[path] || routes[404];
	const content = await fetch(route).then((data) => data.text());
	app.innerHTML = content;
};

// Load initial page when page loads
window.addEventListener('popstate', findLocation);
document.addEventListener('DOMContentLoaded', findLocation);

// Make nav links work
let routingLink = Array.from(document.querySelectorAll('.routing-link'));
routingLink.map((link) => {
	link.addEventListener('click', (e) => {
		route(e);
	});
});
