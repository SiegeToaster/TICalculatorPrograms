// const fs = require('fs'); // might be used later
import readline from 'readline';

console.log('TI Calculator Programs\nBy Siege\n');
console.log(
	'0: Area Calculation\n', // WiP
	'1: Triangle\n',
	'2: Factoring Quadratics\n',
	'3: Pythagorean Calculator\n',
	'4: Quadratic Formula\n',
	'5: Simplify Radicals\n',
);

import pythag from './programs/Pythagorean Calculator/pythag.js';
import simrad from './programs/Simplify Radicals/simrad.js';
import factqutr from './programs/Factoring Quadratics/factqutr.js';
import isTriangle from './programs/Triangle/isTriangle.js';
import quadraticFormula from './programs/Quadratic Formula/quadraticFormula.js';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question('Select Program: ', (programNumber) => {
	rl.close();

	const rlInner = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	switch (programNumber) {
	case '0':
		console.log('Work In Progress');
		break;
	
	case '1':
		rlInner.question('leg 1: ', l1 => {
			rlInner.question('leg 2: ', l2 => {
				rlInner.question('hyp: ', hyp => {
					rlInner.close();

					l1 = parseFloat(l1);
					l2 = parseFloat(l2);
					hyp = parseFloat(hyp);
					console.log(isTriangle(l1, l2, hyp));
				});
			});
		});
		break;
	
	case '2':
		factqutr();
		break;

	case '3':
		pythag();
		break;

	case '4':
		rlInner.question('A: ', firstCoef => {
			rlInner.question('B: ', secondCoef => {
				rlInner.question('C: ', thirdCoef => {
					rlInner.close();

					firstCoef = parseFloat(firstCoef);
					secondCoef = parseFloat(secondCoef);
					thirdCoef = parseFloat(thirdCoef);

					console.log(quadraticFormula(firstCoef, secondCoef, thirdCoef));

				})
			})
		})
		break;

	case '5': {
		rlInner.question('Index (Default 2): ', index => {
			rlInner.question('Number: ', number => {
				rlInner.close();

				simrad(index, number);
			});
		});
		break;
	}
}
});