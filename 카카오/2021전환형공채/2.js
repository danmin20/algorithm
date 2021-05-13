function solution(places) {
  const answer = [];

  places.forEach((place, idx) => {
    const array = [];

    place.forEach((string) => {
      array.push([...string]);
    });
    const location = [];
    array.forEach((item1, i) => {
      item1.forEach((item2, j) => {
        if (item2 === "P") location.push([i, j]);
      });
    });

    for (let i = 0; i < location.length - 1; i++) {
      for (let j = i + 1; j < location.length; j++) {
        if (
          Math.abs(location[i][0] - location[j][0]) +
            Math.abs(location[i][1] - location[j][1]) <=
          2
        ) {
          if (
            location[i][0] !== location[j][0] &&
            location[i][1] !== location[j][1]
          ) {
            if (
              array[location[i][0]][location[j][1]] === "X" &&
              array[location[i][0]][location[j][1]] === "X"
            )
              continue;
          } else if (location[i][0] === location[j][0]) {
            if (array[location[i][0]][location[j][1] - 1] === "X") continue;
          } else if (location[i][1] === location[j][1]) {
            if (array[location[i][0] + 1][location[j][1]] === "X") continue;
          }
          answer.push(0);
          break;
        }
      }
      break;
    }
    if (answer[idx] !== 0) answer.push(1);
  });

  return answer;
}

console.log(solution([["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"]]));

function solution(places) {
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  const checkBoundary = (i, j) => {
    return 0 <= i && i < 5 && 0 <= j && j < 5;
  };

  const coord = (i, j) => `${i},${j}`;

  const isKeepDistance = (placeIndex, i, j, depth, visitChecker) => {
    visitChecker[coord(i, j)] = true;
    if (depth !== 0 && depth <= 2 && places[placeIndex][i][j] === "P") {
      return false;
    }
    if (depth > 2) return true;
    let keepDistance = true;
    for (let delta = 0; delta < 4; ++delta) {
      const nextX = i + dx[delta];
      const nextY = j + dy[delta];
      if (
        checkBoundary(nextX, nextY) &&
        visitChecker[coord(nextX, nextY)] !== true &&
        places[placeIndex][nextX][nextY] !== "X"
      ) {
        keepDistance =
          keepDistance &&
          isKeepDistance(placeIndex, nextX, nextY, depth + 1, visitChecker);
      }
    }
    return keepDistance;
  };

  const answer = [];
  places.forEach((place, pIndex) => {
    const queue = [];
    let keepDistance = true;
    for (let i = 0; i < 5; ++i) {
      for (let j = 0; j < 5; ++j) {
        if (place[i][j] === "P") {
          const visitChecker = {};
          keepDistance =
            keepDistance && isKeepDistance(pIndex, i, j, 0, visitChecker);
        }
      }
    }
    if (keepDistance === true) {
      answer.push(1);
    } else {
      answer.push(0);
    }
  });
  return answer;
}
