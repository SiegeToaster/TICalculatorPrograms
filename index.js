// const fs = require('fs'); // might be used later
const readline = require('readline');

console.log('TI Calculator Programs\nBy Siege\n');
console.log('0: Area Calculation\n1: Distance\n2: Factoring Quadratics\n3: Pythagorean Calculator\n4: Quadratic Formula\n5: Simplify Radicals\n6: Triangle\n7: Volume Calculation\n');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
rl.question('Select Program: ', (programNumber) => {
	rl.close();
	switch (programNumber) {
		case '0':
			console.log('0');
			break;

		case '1':
			console.log('1');
			break;

		case '2':
			console.log('2');
			break;

		case '3':
			console.log('3');
			break;

		case '4':
			console.log('4');
			break;

		case '5':
			console.log('5');
			break;

		case '6':
			console.log('6');
			break;

		case '7':
			console.log('7');
			break;
	};
});