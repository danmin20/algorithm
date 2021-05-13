// 타켓 넘버
function solution(numbers, target) {
  let answer = 0;

  function recur(cnt, sum) {
    if (cnt === numbers.length) {
      if (sum === target) answer++;
      return;
    }
    recur(cnt + 1, sum + numbers[cnt]);
    recur(cnt + 1, sum - numbers[cnt]);
  }

  recur(0, 0);
  return answer;
}

// 네트워크
function solution(n, computers) {
  var answer = 0;

  const check = [];
  while (computers.length) {
    check.push(false);
  }

  function DFS(index) {
    check[index] = true;

    for (let i in computers) {
      if (computers[index][i] === 1 && !check[i]) DFS(i);
    }
  }

  for (let i in computers) {
    if (!check[i]) {
      DFS(i);
      answer++;
    }
  }
  return answer;
}

// 단어 변환
function solution(begin, target, words) {
  let answer = 0;
  const q = [];
  const visit = Array(words.length);

  q.push([begin, answer]);

  while (q.length) {
    let [current, cnt] = q.shift();

    if (current === target) return cnt;

    words.forEach((word, i) => {
      const idx = [...word].reduce(
        (arr, char, index) => (
          char !== current[index] ? arr.push(index) : arr, arr
        ),
        []
      );

      console.log(idx);
      if (idx.length === 1 && !visit[i]) {
        visit[i] = 1;
        q.push([word, ++cnt]);
      }
    });
  }

  return answer;
}
