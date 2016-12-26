const scrabble = (letters, word) => {
  let impossibleWord = false;
  let rack = letters.split('');

  word.split('').map((letter) => {
    const indexOfBlank = rack.indexOf('?');
    let letterFound = false;

    rack.map((rackLetter, i, rack) => {
      if (letter === rackLetter && !letterFound) {
        letterFound = true;
        delete rack[i];
      }
    });

    if (!letterFound && indexOfBlank > 0) {
      letterFound = true;
      delete rack[indexOfBlank];
    }
    
    if (!letterFound) impossibleWord = true;
  });

  console.log(!impossibleWord);
};
