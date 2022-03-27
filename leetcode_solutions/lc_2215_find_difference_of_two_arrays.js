// Approach using set
// nums1 = [ 1, 2, 3, 3]
// nums2 = [ 1, 1, 2, 2]

// set1 = 1, 2, 3
// set2 = 1, 2

// Go through items in set1, add to array only if that element is not in set2
// Go through items in set2, add to array only if that element is not in set1

// return [ans1, ans2]

var findDifference = function (nums1, nums2) {
  let set1 = new Set();
  let set2 = new Set();

  for (let i of nums1) {
    set1.add(i);
  }

  for (let i of nums2) {
    set2.add(i);
  }

  let ans1 = new Array();
  let ans2 = new Array();

  for (let i of set1) {
    if (!set2.has(i)) {
      ans1.push(i);
    }
  }

  for (let i of set2) {
    if (!set1.has(i)) {
      ans2.push(i);
    }
  }
  return [ans1, ans2];
};
