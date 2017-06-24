const spiral = input => {
  const lastNumber = Math.pow(input, 2);
  const loops = Math.ceil(input / 2);
  let matrix = [];
  let count;

  // Top row
  for (count = 0; count < input; count++) {
    matrix.push([]);
    matrix[0].push(count + 1);
  }
  count++;

  for (let k = 0; k < (Math.floor(input / 2)); k++) {
    // Right row
    for (let i = k + 1; i < (input - k); i++) {
      matrix[i][input - k - 1] = count;
      count++;
    }

    // Bottom row
    for (let i = (input - (k*2) - 1); i > 0; i--) {
      matrix[input - k - 1][i-1+k] = count;
      count++;
    }

    // Left row
    for (let i = (input - k - 2); i > k; i--) {
      matrix[i][k] = count;
      count++;
    }

    // Top row
    for (let i = k + 1; i < (input - k - 1); i++) {
      matrix[k + 1][i] = count;
      count++;
    }
  }

  console.log(matrix);
};

spiral(5);
