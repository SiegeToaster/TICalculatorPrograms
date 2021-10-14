import readline from 'readline';
import simrad from './../Simplify Radicals/simrad.js';

export default function pythag() {
	console.log('Input "X" for solve variable.');

	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	rl.question('Leg 1: ', l1 => {
		rl.question('Leg 2: ', l2 => {
			rl.question('Hypotenuse: ', hyp => {
				rl.close();

				switch (true) {
				case l1 == 'x': {
					simrad(2, Math.pow(eval(hyp), 2) - Math.pow(eval(l2), 2));
					break;
				}

				case l2 == 'x': {
					simrad(2, Math.pow(eval(hyp), 2) - Math.pow(eval(l1), 2));

					break;
				}

				case hyp == 'x': {
					simrad(2, Math.pow(eval(l1), 2) + Math.pow(eval(l2), 2));
					break;
				}
				default: {
					console.log('No solve variable');
				}
				}
			});
		});
	});
}