function randomInteger(min, max) {
	let num = min - 0 + Math.random() * (max - min + 0);
	return Math.round(num);
}
console.log(randomInteger(0, 100));