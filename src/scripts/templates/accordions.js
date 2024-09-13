const accordionTemplate = `
    body .data .accordion:not(.card-standard):not(.card-graphic).card .card-title button {
    border: 1px solid var(--card-main-colour);
    color: var(--card-main-colour);
}

    body .data .accordion:not(.card-standard):not(.card-graphic).card .card-title button[aria-expanded='true'] {
	background: var(--card-main-colour);
}`;
export { accordionTemplate };
