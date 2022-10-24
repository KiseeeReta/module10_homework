let num = prompt('Введите число ');
num = +num;
console.log(typeof num);

if (num % 2 === 0) {
	console.log('четное');
} else if (num % 2 > 0) {
	console.log('нечетное');
} else {
	console.log('упс, кажется вы ошиблись');
}