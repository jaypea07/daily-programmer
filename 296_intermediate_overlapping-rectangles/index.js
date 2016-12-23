const findOverlapingArea = (firstRec, secondRec) => {
  firstRec = getCoordinates(firstRec);
  secondRec = getCoordinates(secondRec);
  let xLength = getLength(firstRec[0].x, firstRec[1].x, secondRec[0].x, secondRec[1].x);
  let yLength = getLength(firstRec[0].y, firstRec[1].y, secondRec[0].y, secondRec[1].y);

  // if (overlapping(firstRec[0].x, secondRec[0].x, firstRec[1].x)) {
  //   xLength = 
  // } else {
  //   xLength = 0;
  // }

  // if (overlapping(firstRec[0].y, secondRec[0].y, firstRec[1].y)) {
  //   yLength
  // } else {
  //   yLength = 0;
  // }

  console.log(xLength * yLength);
};

const getCoordinates = (coordinateString) => {
  return coordinateString.split(' ').map((coord) => {
    let seperator = coord.indexOf(',');
    return {
      x: coord.slice(0, seperator),
      y: coord.slice(seperator + 1)
    };
  });
};

const overlapping = (a, b, c) => {
  return ((a <= b && b <= c) || (a >= b && b >= c));
};

const getLength = (a, b, c, d) => {
  if (overlapping(a, c, b)) {
    let ar = [a, b, c, d].map((n) => {
      return parseFloat(n);
    }).sort((a, b) => {
      return a - b;
    });
    return ar[2] - ar[1];
  } else {
    return 0;
  }
};
