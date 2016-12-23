const update = (source, target) => {
	console.log(source);

	let targetArray = target.split('');

	for (var i = 0; i < source.length; i++) {
		sourceArray = source.split('');
		
		if (sourceArray[i] !== targetArray[i]) {
			sourceArray[i] = targetArray[i];
			source = sourceArray.join('');
			console.log(source);
		}
	}
};
