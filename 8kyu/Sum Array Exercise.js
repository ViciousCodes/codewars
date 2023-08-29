// Write a function called sumArray which accepts a single argument: an array of numbers.  It should return the sum of all the numbers in the array.

// sumArray([1,2,3]) // 6
// sumArray([2,2,2,2]) // 8
// sumArray([50,50,1]) // 101
SOLUTION #1:

function sumArray(nums) {
  let total = 0;
  for (let num of nums) {
    total += num;
  }
  return total;
}
SOLUTION #2:

function sumArray(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}
