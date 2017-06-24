const spiral = input => {
  let matrix = [];
  let count;

  // First row
  for (count = 0; count < input; count++) {
    matrix.push([]);
    matrix[0].push(count + 1);
  }
  count++;

  for (let loop = 0; loop < (Math.floor(input / 2)); loop++) {
    // Right row
    for (let i = loop + 1; i < (input - loop); i++) {
      matrix[i][input - loop - 1] = count;
      count++;
    }

    // Bottom row
    for (let i = (input - (loop * 2) - 1); i > 0; i--) {
      matrix[input - loop - 1][loop + i - 1] = count;
      count++;
    }

    // Left row
    for (let i = (input - loop - 2); i > loop; i--) {
      matrix[i][loop] = count;
      count++;
    }

    // Top row
    for (let i = loop + 1; i < (input - loop - 1); i++) {
      matrix[loop + 1][i] = count;
      count++;
    }
  }

  console.log(formatOutput(matrix, count));
};

const formatOutput = (matrix, count) => {
  let output = '';
  const totalDigits = getDigits(count - 1);

  matrix.map(line => {
    line.map(number => {
      for (let i = 0; i < totalDigits - getDigits(number); i++) {
        output += ' ';
      }
      output += `${number} `;
    });
    output += '\n';
  });

  return output;
};

const getDigits = int => {
  return int.toString().length;
};

spiral(10);
