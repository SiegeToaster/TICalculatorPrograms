import readline from 'readline';

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
					displayFraction(Math.sqrt((Math.pow(eval(hyp), 2)) - (Math.pow(eval(l2), 2))));
					break;
				}

				case l2 == 'x': {
					displayFraction(Math.sqrt((Math.pow(eval(hyp), 2)) - (Math.pow(eval(l1), 2))));
					break;
				}

				case hyp == 'x': {
					displayFraction(Math.sqrt((Math.pow(eval(l1), 2)) + (Math.pow(eval(l2), 2))));
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

function displayFraction(num) {
	if (parseInt(num) == num) {
		console.log(num);
		return;
	}

	const frontInt = num.toString().split('.')[0];
	let numerator = num.toString().split('.')[1];
	let denominator = Math.pow(10, numerator.length + 1);

	const greatestCommonDivisor = gcd(numerator, denominator);
	console.log(greatestCommonDivisor);
	numerator /= greatestCommonDivisor;
	denominator /= greatestCommonDivisor;

	console.log(`${frontInt} + ${numerator}/${denominator}`);
}

function gcd(a, b) {
	if (b == 0) {
		return a;
	} else {
		return gcd(b, a % b);
	}
}