var maximumBags = function (capacity, rocks, additionalRocks) {
  let arr = [];
  let ans = 0;

  for (let i = 0; i < capacity.length; i++) {
    let currDiff = capacity[i] - rocks[i];
    arr.push([capacity[i], rocks[i], currDiff]);
  }
  // sorting in ascending order on the based of remaining capacity (capacity[i] - rocks[i])
  arr.sort((a, b) => a[2] - b[2]);
  for (let i = 0; i < arr.length; i++) {
    let [cap, rock, currDiff] = arr[i];
    if (currDiff == 0) {
      // full capacity
      ans++;
      // remaining capacity
    } else if (additionalRocks > 0 && currDiff <= additionalRocks) {
      additionalRocks -= currDiff;
      ans++;
    }
  }

  return ans;
};

//Approach 2
// Time (n log n)
var maximumBags = function (capacity, rocks, additionalRocks) {
  let arr = [capacity.length];
  let bags = 0;
  for (let i = 0; i < capacity.length; i++) {
    if (capacity[i] === rocks[i]) {
      bags++;
    }
    arr[i] = capacity[i] - rocks[i];
  }

  arr.sort((a, b) => a - b);
  for (let i = 0; i < capacity.length; i++) {
    if (arr[i] != 0 && additionalRocks >= arr[i]) {
      additionalRocks -= arr[i];
      bags++;
    }
  }
  return bags;
};
