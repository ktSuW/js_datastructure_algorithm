// https://leetcode.com/problems/longest-continuous-increasing-subsequence/

// Time Complexity - O(n)
// Space Complexity - O(1)
// Since the length will be at least one, therefore initialised both maxLen and currLen as 1.
var findLengthOfLCIS = function (nums) {
  let maxLen = 1;
  let currLen = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      currLen++;
      maxLen = Math.max(currLen, maxLen);
    } else {
      // Once we encounter a smaller element, restart currLen count
      currLen = 1;
    }
  }
  return maxLen;
};