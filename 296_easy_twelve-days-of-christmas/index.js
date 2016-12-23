const giftList = ['partridge in a pear tree', 'turtle doves', 'french hens', 'calling birds', 'golden rings', 'geese a laying', 'swans a swimming', 'maids a milking', 'ladies dancing', 'lords a leaping', 'pipers piping', 'drummers drumming'];
const numList = ['a', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'];

const song = gifts => {
	let song = '';
	
	for (let i = 0; i < gifts.length; i++) {
		song += 'On the first day of Christmas\nMy true love gave to me:\n';

		for (let j = i+1; j > 0; j--) {
			if (j === 1) song += 'and ';
			song += `${numList[j-1]} ${gifts[j-1]}\n`;
		}
	
		if (i < gifts.length) song += ' \n';
	}

	console.log(song);
};
