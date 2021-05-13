// 폰켓몬
function solution(nums) {
  let arr = [];
  nums.forEach((num) => {
    if (!arr.find((a) => a === num)) arr.push(num);
  });

  return Math.min(arr.length, nums.length / 2);
}

