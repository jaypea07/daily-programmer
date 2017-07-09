const base = [
	'one',
	'two',
	'three',
	'four',
	'five',
	'six',
	'seven',
	'eight',
	'nine',
	'ten',
	'eleven',
	'twelve',
	'thirteen',
	'fourteen',
	'fifteen',
	'sixteen',
	'seventeen',
	'eighteen',
	'nineteen'
];

const tens = [
	'ten',
	'twenty',
	'thirty',
	'fourty',
	'fifty'
];

const tellTime = (input) => {
	const time = input.split(':');
	const hour = time[0] % 12 || 12;
	const minutes = convertMinutesToWords(time[1]);
	const ampm = isMorning(time[0], hour) ? 'am' : 'pm';

	console.log(`Input: ${input}`);
	console.log(`It's ${base[hour - 1]} ${minutes}${ampm}`);
};

const isMorning = (hour24, hour12) => {
	const hour24Int = Number.parseInt(hour24);
	return (hour12 === hour24Int || !hour24Int) && hour24Int != 12;
};

const convertMinutesToWords = (minutes) => {
	let words = '';
	let digits = minutes.split('');

	if (minutes > 0 && minutes < 20) {
		words = `${digits[0] == 0 ? 'oh' : ''} ${base[minutes - 1]} `;

	} else if (minutes % 10 === 0 && minutes != 0) {
		words = `${tens[(minutes / 10) - 1]} `;

	} else if (minutes != '00') {
		words = tens[digits[0] - 1];
		words += ` ${base[digits[1] - 1]} `;
	}

	return words;
};

tellTime('00:00');
tellTime('01:30');
tellTime('12:05');
tellTime('14:01');
tellTime('20:29');
tellTime('21:00');
