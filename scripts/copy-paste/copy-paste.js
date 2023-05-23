// Code sample stuff

let compSample = Array.from(document.querySelectorAll('.component-sample'));

compSample.map((component) => {
	let copyBtn = component.querySelector('.copy-btn');
	let componentName = component.querySelector('div').classList[0];
	copyBtn.setAttribute('title', `Copy code for ${componentName} component`);
	copyBtn.innerText = `Copy ${componentName} component`;
});
