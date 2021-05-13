// K번째수
function solution(array, commands) {
  const answer = [];
  commands.forEach((command) => {
    const arr = array.slice(command[0] - 1, command[1]);
    arr.sort((a, b) => a - b);
    answer.push(arr[command[2] - 1]);
  });
  return answer;
}

// 가장 큰 수
function solution(numbers) {
  const answer = numbers
    .map((number) => number.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");

  return answer[0] === "0" ? "0" : answer;
}

// H-Index
function solution(citations) {
  let answer = 0;

  citations.sort((a, b) => b - a);
  citations.forEach((citation, i) => {
    if (i + 1 <= citation) answer++;
  });
  return answer;
}
