// Approach - 1 - Two passes
// Time O(n) - however iterate through the nums array two times
// Space is O(1) as result is the answer and not considered O(n);
var sortArrayByParity = function (nums) {
  let result = [nums.length];
  let p = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      result[p++] = nums[i];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      result[p++] = nums[i];
    }
  }
  return result;
};

// Approach -2 - Quick Sort
// Even thought it is quicksort, since it is only one pass,
// Time O(n)
// Space O(1)
var sortArrayByParity = function (nums) {
  let p1 = 0,
    p2 = nums.length - 1;
  while (p1 < p2) {
    if (nums[p1] % 2 > nums[p2] % 2) {
      let temp = nums[p1];
      nums[p1] = nums[p2];
      nums[p2] = temp;
    }

    if (nums[p1] % 2 === 0) p1++;
    if (nums[p2] % 2 !== 0) p2--;
  }
  return nums;
};

// Approach - 3 - one pointer and one pass
// Time O(n)
// Space O(1)
// Shortest runtime out of three
var sortArrayByParity = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let lastEvenIndex = 0;
    if (nums[i] % 2 === 0) {
      let temp = nums[lastEvenIndex];
      nums[lastEvenIndex++] = nums[i];
      nums[i] = temp;
    }
  }
  return nums;
};
