var findKDistantIndices = function (nums, key, k) {
  const n = nums.length;
  let jIndices = new Array();
  for (let j = 0; j < n; j++) {
    if (nums[j] === key) {
      jIndices.push(j);
    }
  }

  let ans = new Array();
  for (let i = 0; i < n; i++) {
    for (let j of jIndices) {
      if (Math.abs(i - j) <= k && nums[j] === key) {
        ans.push(i);
        break;
      }
    }
  }
  return ans;
};
