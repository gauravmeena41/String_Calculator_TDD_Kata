const calculate = (nums) => {
  if (nums.length === 0) return 0;

  nums = nums.split(",");

  nums = nums.reduce((acc, curr) => {
    return acc + parseInt(curr);
  }, 0);

  return nums;
};

console.log(calculate("1,2"));
console.log(calculate(""));
