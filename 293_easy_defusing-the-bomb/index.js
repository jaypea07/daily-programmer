const explosionTriggers = {
  white:  ['white', 'black'],
  red:    ['white', 'red', 'black', 'orange', 'purple'],
  black:  ['white', 'green', 'orange'],
  orange: ['white', 'orange', 'green', 'purple'],
  green:  ['red', 'black', 'green', 'purple'],
  purple: ['white', 'orange', 'green', 'purple']
};

const defuse = (instructions) => {
  let bombStatus = 'Bomb defused!';

  instructions.map((wireColor, i, instructions) => {
    if (i > 0) {
      explosionTriggers[ instructions[i-1] ].map((trigger) => {
        if (wireColor === trigger) bombStatus = 'BOOM!';
      });
    }
  });

  console.log(bombStatus);
};

defuse(['white', 'red', 'green', 'white']);     // Bomb defused!
defuse(['white', 'orange', 'green', 'white']);  // BOOM!