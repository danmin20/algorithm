//입력

let weights = [50, 82, 75, 120];
let head2head = ["NLWL", "WNLL", "LWNW", "WWLN"];

function solution(weights, head2head) {
  let evals = [];

  for (let i = 0; i < weights.length; i++) {
    evals.push({
      wins: 0,
      loss: 0,
      rate: 0,
      beats: 0,
      weight: 0,
      index: 0,
    });
  }

  for (let i = 0; i < weights.length; i++) {
    evals[i].index = i;
    evals[i].weight = weights[i];

    for (let j = i + 1; j < weights.length; j++) {
      if (head2head[i][j] == "W") {
        evals[i].wins++;
        evals[j].loss++;
        if (weights[i] < weights[j]) {
          evals[i].beats++;
        }
      } else if (head2head[i][j] == "L") {
        evals[j].wins++;
        evals[i].loss++;
        if (weights[j] < weights[i]) {
          evals[j].beats++;
        }
      }
    }

    let tot = evals[i].wins + evals[i].loss;
    if (tot > 0) {
      evals[i].rate = evals[i].wins / tot;
    }
  }

  function Fight(a, b) {
    if (a.rate > b.rate) {
      return -1;
    }
    if (a.rate < b.rate) {
      return 1;
    }

    if (a.beats > b.beats) {
      return -1;
    }
    if (a.beats < b.beats) {
      return 1;
    }

    if (a.weight > b.weight) {
      return -1;
    }
    if (a.weight < b.weight) {
      return 1;
    }

    return a.index - b.index;
  }

  evals.sort(Fight);

  answer = [];
  for (let i = 0; i < evals.length; i++) {
    answer.push(evals[i].index + 1);
  }

  return answer;
}
