function solution(n, lost, reserve) {
  let answer = 0;
  let arr = new Array(n).fill(1);

  lost.forEach((a) => {
    arr[a - 1]--;
  });
  reserve.forEach((a) => {
    arr[a - 1]++;
  });

  arr.forEach((a, i) => {
    if (a === 0) {
      if (arr[i - 1] === 2) {
        arr[i - 1]--;
        arr[i]++;
      } else if (arr[i + 1] === 2) {
        arr[i + 1]--;
        arr[i]++;
      }
    }
  });
  arr.forEach((a) => {
    if (a > 0) answer++;
  });

  return answer;
}
