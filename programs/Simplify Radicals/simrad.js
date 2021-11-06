export default function simrad(index, number, printAnswer) {
	if (printAnswer == null) printAnswer = true;
	if (!index) index = 2;
	// console.log(`index: ${index}, number: ${number}`);

	if ((parseInt(Math.pow(number, 1 / index))) == (Math.pow(number, 1 / index))) {
		if (printAnswer) console.log(Math.pow(number, 1 / index), '>:(');
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
	if (printAnswer) console.log(`${C} √ ${number}`);
	return `${C} √ ${number}`;
}