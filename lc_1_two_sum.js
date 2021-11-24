// Time O(n) - Iterate through the array
// Space O(n) - Map

var twoSum = function (nums, target) {
  // Map to store key and value
  // nums[i] as key
  // i as value
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    }
    // if not in the map, then add it to the map
    map.set(nums[i], i);
  }
  // Once complete the list, if cannot find it, return empty array
  return [];
};
