// Approach - 1
// Time O(n) to generate map
// Time O(n) to transform map into array
// Time O(n log n) to sort the frequencies in ascending order
// Time O(k) to iterate through result till k
// Space O(n) for map
// Space O(n) for array 
var topKFrequent = function (nums, k) {
  let map = new Map();
  for (const n of nums) {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1);
    }
  }

  let array = [];
  for (const [key, value] of map.entries()) {
    array.push([key, value]);
  }

  // array.sort(function(a, b){
  //     return b[1] - a[1];
  // })
  array.sort((a, b) => b[1] - a[1]);

  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(array[i][0]);
  }

  return result;
};

// Need to learn the following approaches 
// Need to learn Quick select
// Priority Queue 
// Bucket sort 