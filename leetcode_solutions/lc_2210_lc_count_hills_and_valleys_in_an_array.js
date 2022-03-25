// Two pointers approach 
// Time complexity - O(n2)
// Space complexity - O(1)
var countHillValley = function (nums) {
  let result = 0;
  let n = nums.length;
  for (let i = 1; i < n; i++) {
    if (nums[i] == nums[i - 1]) continue;

    let p1 = i - 1,
      p2 = i + 1;

    while (p1 >= 0 && nums[p1] == nums[i]) p1--;
    if (p1 < 0) continue;

    while (p2 < n && nums[p2] == nums[i]) p2++;
    if (p2 == n) continue;

    if (
      (nums[p1] < nums[i] && nums[p2] < nums[i]) ||
      (nums[p1] > nums[i] && nums[p2] > nums[i])
    ) {
      result++;
    }
  }
  return result;
};
