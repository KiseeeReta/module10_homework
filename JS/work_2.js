let x = true;

if (typeof x == 'number') {
	console.log('x - тип число');
} else if (typeof x == 'string') {
	console.log('x - тип строка');
} else if (typeof x == 'boolean') {
	console.log('x - логический тип');
} else {
	console.log('Тип x не определён');
}