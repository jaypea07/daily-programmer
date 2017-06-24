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

  // Right row
  for (let i = 1; i < input; i++) {
    matrix[i][input - 1] = count;
    count++;
  }

  // Bottom row
  for (let i = (input - 2); i >= 0; i--) {
    matrix[input - 1][i] = count;
    count++;
  }

  // Left row
  for (let i = (input - 2); i > 0; i--) {
    matrix[i][0] = count;
    count++;
  }

  // Top row
  for (let i = 1; i < (input - 1); i++) {
    matrix[1][i] = count;
    count++;
  }

  // Right row again
  for (let i = 2; i < (input - 1); i++) {
    matrix[i][input - 2] = count;
    count++;
  }

  // Bottom row again
  for (let i = (input - 3); i >= 1; i--) {
    matrix[input - 2][i] = count;
    count++;
  }

  // Left row again
  for (let i = (input - 3); i > 1; i--) {
    matrix[i][1] = count;
    count++;
  }

  // Top row again
  for (let i = 2; i < (input - 2); i++) {
    matrix[2][i] = count;
    count++;
  }

  console.log(matrix);
};

spiral(5);
