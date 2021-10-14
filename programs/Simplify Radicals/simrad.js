import readline from "readline";

export default function simrad() {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	rl.question('Index (Default 2): ', index => {
		rl.question('Number: ', number => {
			solveSimrad(index, number);
		});
	});
}

export function solveSimrad(index, number) {
	if (!index) index = 2;
	// console.log(`index: ${index}, number: ${number}`);

	if ((parseInt(Math.pow(number, 1 / index))) == (Math.pow(number, 1 / index))) {
		console.log(Math.pow(number, 1 / index));
		return Math.pow(number, 1 / index);
	}

	let C = 1;
	let F = 2;
	while (F <= Math.sqrt(number)) {
		while ((number / (Math.pow(F, index)) % 1) == 0) {
			C *= F;
			number = number / Math.pow(F, index);
		}

		if (F == 2) {
			F = 1;
		}
		F += 2;
	}
	console.log(`${C} √ ${number}`);
}