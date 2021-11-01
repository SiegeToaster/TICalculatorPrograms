import readline from 'readline'

export default function factorQuadratic() {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	rl.question('Add To: ', addNum => {
		rl.question('Multiply To: ', multiplyNum => {
			rl.close();
			parseFloat(addNum);
			parseFloat(multiplyNum);

			let result1;
			let result2;
			let counter = 0;
			let adder = 1;
			if (addNum < 0 && multiplyNum >= 0) adder = -1;

			while (result1 + result2 != addNum || result1 * result2 != multiplyNum) {
				counter += adder;
				if (counter === adder*1e2) console.log("PRESS ON");
				result1 = multiplyNum / counter;
				result2 = counter;
			}

			console.log(`The answer is: ${result1} and ${result2}`);
			return `The answer is: ${result1} and ${result2}`;
		});
	});
}
