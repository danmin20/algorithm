// 주어지는 입력

let prices = [12, 6, 6, 12, 6, 24, 30, 32, 34, 36, 24, 18, 6, 6, 18, 30, 6];
let difftable = new Array(prices.length + 1);

function solution(prices, difftable) {
  difftable[0] = 0;
  difftable[difftable.length - 1] = 0;

  for (let i = 1; i < prices.length; i++) {
    let diff = prices[i] - prices[i - 1];
    if (diff > 0) {
      difftable[i] = 1;
    } else if (diff < 0) {
      difftable[i] = -1;
    } else {
      difftable[i] = 0;
    }
  }

  let answer = [];
  let left = 0;
  let right = 0;
  let type = 0;

  for (let i = 0; i < difftable.length; i++) {
    if (difftable[i] == 0) {
      if (type == 0) {
        continue;
      }
      let len = Math.min(left, right);
      if (len > 0) {
        answer.push(len * type);
      }
      left = 0;
      right = 0;
      type = 0;
    } else if (difftable[i] == 1) {
      if (type == 0) {
        type = 1;
        left = 1;
      } else if (difftable[i - 1] == 1) {
        if (type == 1) {
          left++;
        } else {
          right++;
        }
      } else {
        if (type == -1) {
          right = 1;
        } else {
          let len = Math.min(left, right);
          if (len > 0) {
            answer.push(len * type);
          }
          left = right;
          right = 1;
          type = -1;
        }
      }
    } else {
      if (type == 0) {
        type = -1;
        left = 1;
      } else if (difftable[i - 1] == -1) {
        if (type == -1) {
          left++;
        } else {
          right++;
        }
      } else {
        if (type == 1) {
          right = 1;
        } else {
          let len = Math.min(left, right);
          if (len > 0) {
            answer.push(len * type);
          }
          left = right;
          right = 1;
          type = 1;
        }
      }
    }
  }
  return answer;
}
