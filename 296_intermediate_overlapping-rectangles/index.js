const findOverlapingArea = (firstRec, secondRec) => {
  firstRec = getCoordinates(firstRec);
  secondRec = getCoordinates(secondRec);
  let xOverlaps = overlapping(firstRec[0].x, secondRec[0].x, firstRec[1].x);
  let yOverlaps = overlapping(firstRec[0].y, secondRec[0].y, firstRec[1].y);
  let xLength;
  let yLength;

  if (xOverlaps) {
    let xValues = [firstRec[0].x, firstRec[1].x, secondRec[0].x, secondRec[1].x].map((x) => {
      return parseFloat(x);
    }).sort((a, b) => {
      return a - b;
    });
    xLength = xValues[2] - xValues[1];
  } else {
    xLength = 0;
  }

  if (yOverlaps) {
    let yValues = [firstRec[0].y, firstRec[1].y, secondRec[0].y, secondRec[1].y].map((y) => {
      return parseFloat(y);
    }).sort((a, b) => {
      return a - b;
    });
    yLength = yValues[2] - yValues[1];
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

// TESTING
findOverlapingArea('0,0 2,2', '1,1 3,3');
findOverlapingArea('-3.5,4 1,1', '1,3.5 -2.5,-1');
findOverlapingArea('-4,4 -0.5,2', '0.5,1 3.5,3');
