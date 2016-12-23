const findOverlapingArea = (firstRec, secondRec) => {
  firstRec = getCoordinates(firstRec);
  secondRec = getCoordinates(secondRec);
  let xOverlaps = overlapping(firstRec[0].x, secondRec[0].x, firstRec[1].x);
  let yOverlaps = overlapping(firstRec[0].y, secondRec[0].y, firstRec[1].y);
  let xLength;
  let yLength;

  if (xOverlaps) {
    xLength = getLength(firstRec[0].x, firstRec[1].x, secondRec[0].x, secondRec[1].x);
  } else {
    xLength = 0;
  }

  if (yOverlaps) {
    yLength = getLength(firstRec[0].y, firstRec[1].y, secondRec[0].y, secondRec[1].y);
  } else {
    yLength = 0;
  }

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
  let ar = [a, b, c, d].map((n) => {
    return parseFloat(n);
  }).sort((a, b) => {
    return a - b;
  });
  return ar[2] - ar[1];
};

// TESTING
findOverlapingArea('0,0 2,2', '1,1 3,3');
findOverlapingArea('-3.5,4 1,1', '1,3.5 -2.5,-1');
findOverlapingArea('-4,4 -0.5,2', '0.5,1 3.5,3');
