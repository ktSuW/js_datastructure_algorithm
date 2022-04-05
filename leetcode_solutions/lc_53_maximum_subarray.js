
// Time Complexity - O(n)
// Space - O(1)
var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];
  let maxSum = nums[0];
  let currSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currSum += nums[i];
    if (currSum < nums[i]) {
      currSum = nums[i];
    }
    maxSum = Math.max(currSum, maxSum);
  }
  return maxSum;
};

// Learn Kadane's algorithm
// Learn DP 