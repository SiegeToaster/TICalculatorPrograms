// const fs = require('fs'); // might be used later
import readline from 'readline';

console.log('TI Calculator Programs\nBy Siege\n');
console.log('0: Area Calculation\n1: Distance\n2: Factoring Quadratics\n3: Pythagorean Calculator\n4: Quadratic Formula\n5: Simplify Radicals\n6: Triangle\n7: Volume Calculation\n');

import pythag from './programs/Pythagorean Calculator/pythag.js';
import simrad from './programs/Simplify Radicals/simrad.js';
import factqutr from './programs/Factoring Quadratics/factqutr.js';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question('Select Program: ', (programNumber) => {
	rl.close();
	switch (programNumber) {
	case '0':
		console.log('Work In Progress');
		break;

	case '1':
		console.log('Work In Progress');
		break;

	case '2':
		factqutr();
		break;

	case '3':
		pythag();
		break;

	case '4':
		console.log('Work In Progress');
		break;

	case '5': {
		const rlInner = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});
		rlInner.question('Index (Default 2): ', index => {
			rlInner.question('Number: ', number => {
				simrad(index, number);
			});
		});
		break;
	}

	case '6':
		console.log('Work In Progress');
		break;

	case '7':
		console.log('Work In Progress');
		break;
	}
});