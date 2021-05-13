function solution(s) {
  const chars = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let temp = "";
  let ans = "";
  [...s].forEach((char) => {
    if (parseInt(char)) ans += char;
    else {
      temp += char;
      chars.forEach((item, i) => {
        if (temp === item) {
          ans = ans + i.toString();
          temp = "";
        }
      });
    }
  });
  return ans;
}

console.log(solution("one4seveneight"))