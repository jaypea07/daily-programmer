const defuse = (instructions) => {
  let explosion = false;

  instructions.map((wireColor, i, instructions) => {
    let lastColor = instructions[i-1];

    switch (lastColor) {
      case 'white':
        if (wireColor === 'white' || wireColor === 'black') explosion = true;
        break;
      case 'red':
        if (wireColor !== 'green') explosion = true;
        break;
      case 'black':
        if (wireColor === 'white' || wireColor === 'green' || wireColor === 'orange') explosion = true;
        break;
      case 'orange':
        if (wireColor !== 'red' && wireColor !== 'black') explosion = true;
        break;
      case 'green':
        if (wireColor !== 'orange' && wireColor !== 'white') explosion = true;
        break;
      case 'purple':
        if (wireColor === 'purple' || wireColor === 'green' || wireColor === 'orange' || wireColor === 'white') explosion = true;
        break;
    };
  });

  if (explosion) console.log('BOOM!');
  else console.log('Bomb defused!');
};

defuse(['white', 'red', 'green', 'white']);     // Bomb defused!
defuse(['white', 'orange', 'green', 'white']);  // BOOM!