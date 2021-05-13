//주어지는 입력
let leave = 30;
let day = "MON";
let holidays = [2, 6, 17, 29];

// 진짜 풀이
function solution(leave, day, holidays) {
  let daytable = {
    MON: 0,
    TUE: 1,
    WED: 2,
    THU: 3,
    FRI: 4,
    SAT: 5,
    SUN: 6,
  };

  let resttable = Array.from({ length: 30 }, () => 0);

  let curr = daytable[day];
  for (let i = 0; i < 30; i++) {
    if (curr == 5 || curr == 6) {
      resttable[i] = 1;
    }

    curr++;
    if (curr > 6) {
      curr = 0;
    }
  }

  for (const i in holidays) {
    resttable[holidays[i] - 1] = 1;
  }

  let maximum = 0;
  for (let i = 0; i < 30; i++) {
    let currmax = 0;
    let remleave = leave;
    for (let j = i; j < 30; j++) {
      if (resttable[j] != 1) {
        if (remleave > 0) {
          remleave--;
        } else {
          break;
        }
      }
      currmax++;
    }
    maximum = Math.max(maximum, currmax);
  }

  return maximum;
}
