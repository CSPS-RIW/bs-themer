const iconTemplate = `
.icon-diamond,
.icon-square,
.icon-circle {
	--icon-colour: var(--custom-colour);
	min-height: 100px;
	position: relative;
}

.icon-diamond::before,
.icon-square::before,
.icon-circle::before {
	position: absolute;
	background-repeat: no-repeat;
	text-rendering: auto;
	-webkit-font-smoothing: antialiased;
	font-family: 'Font Awesome 5 Free';
	height: 48px;
	width: 48px;
	font-size: 2rem;
	color: var(--icon-colour);
	top: -30px;
	left: -40px;
	text-align: center;
	display: flex;
	justify-content: center;
	padding: 1.75rem;
	align-items: center;
	z-index: 2;
}

.icon-diamond::after,
.icon-square::after,
.icon-circle::after {
	content: '';
	position: absolute;
	height: 60px;
	width: 60px;
	top: -25px;
	left: -35px;
	background-color: #fff;
	transform: rotate(45deg);
	z-index: 1;
	outline: 4px solid var(--icon-colour);
}

.icon-circle::after {
	border-radius: 50%;
	width: 70px;
	height: 70px;
	top: -30px;
	left: -40px;
}`;
export { iconTemplate };
