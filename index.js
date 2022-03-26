const calculate = (nums) => {
  if (nums.length === 0) return 0;

  let newNums = [];

  nums = nums.split("");
  nums.map((num) => /^[0-9]/.test(num) && newNums.push(num));

  if (newNums.length === 1 && nums[nums.length - 1] === "\n")
    throw new Error("Input is NOT ok");

  if (nums.includes("-")) throw new Error("negatives not allowed");

  nums = newNums.reduce((acc, curr) => {
    return acc + parseInt(curr);
  }, 0);

  return nums;
};

console.log(calculate("1,2"));
console.log(calculate(""));
console.log(calculate("1\n2,3"));
console.log(calculate("//;\n1;2"));
console.log(calculate("1,\n,-3"));
