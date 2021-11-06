import simrad from "../Simplify Radicals/simrad.js";

export default function quadraticFormula(firstCoef, secondCoef, thirdCoef) {
	let answer1, answer2;

	// if it comes out clean, just display the number
	if ((((-secondCoef) + Math.sqrt(Math.pow(secondCoef, 2) + (-4 * firstCoef * thirdCoef))) / 2 * firstCoef) === parseInt(((-secondCoef) + Math.sqrt(Math.pow(secondCoef, 2) + (-4 * firstCoef * thirdCoef))) / 2 * firstCoef)) {
		answer1 = ((-secondCoef) + Math.sqrt(Math.pow(secondCoef, 2) + (-4 * firstCoef * thirdCoef))) / 2 * firstCoef;
		answer2 = ((-secondCoef) - Math.sqrt(Math.pow(secondCoef, 2) + (-4 * firstCoef * thirdCoef))) / 2 * firstCoef;
		if (answer1 === answer2) return answer1;
		
		return [answer1, answer2];
	}

	let answer = {};

	answer.bottom = 2 * firstCoef;

	answer.sqrt = (Math.pow(secondCoef, 2) - (4 * firstCoef * thirdCoef));
	answer.sqrt = simrad(2, answer.sqrt, false);

	// figure out what the sqrtCoef is, if anything
	if (typeof answer.sqrt === 'number') {
		answer.sqrtCoef = answer.sqrt;
		answer.sqrt = '';
	} else {
		const splitSqrt = answer.sqrt.split('√');
		answer.sqrtCoef = parseInt(splitSqrt[0]);
		answer.sqrt = parseInt(splitSqrt[1]);
	}

	// simplify lead and sqrt coef
	answer.leadGcd = gcd(secondCoef, answer.bottom);
	answer.lead = -secondCoef / answer.leadGcd;
	answer.leadBottom = answer.bottom / answer.leadGcd
	if (answer.leadBottom !== 1) answer.lead = `(${answer.lead} / ${answer.leadBottom})`;

	answer.sqrtCoefGcd = gcd(answer.sqrtCoef, answer.bottom);
	answer.sqrtCoef = answer.sqrtCoef / answer.sqrtCoefGcd;
	answer.sqrtBottom = answer.bottom / answer.sqrtCoefGcd;


	// figures out how to display the sqrt
	if (answer.sqrtCoef === 1) {
		answer.sqrtCoef = '';
	} else {
		answer.sqrtCoef = `${answer.sqrtCoef} √ `
	}
	if (answer.sqrtBottom === 1) {
		answer.sqrt = `${answer.sqrtCoef}${answer.sqrt}`;
	} else {
		if (answer.sqrtCoef === '') {
			answer.sqrt = `${answer.sqrtCoef}${answer.sqrt} / ${answer.sqrtBottom}`;
		} else {
			answer.sqrt = `(${answer.sqrtCoef}${answer.sqrt}) / ${answer.sqrtBottom}`;
		}
	}

	answer1 = `${answer.lead} \u00B1 ${answer.sqrt}`;
	return answer1;
}

function gcd(a, b) {
    if (b === 0) return a

	return gcd(b, a % b)
}
