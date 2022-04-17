// Time complexity - O(n)
// Space - O(n) - worst case for hashMap 

var minimumRounds = function (tasks) {
  let hashMap = new Map();
  for (let i = 0; i < tasks.length; i++) {
    if (hashMap.has(tasks[i])) {
      hashMap.set(tasks[i], hashMap.get(tasks[i]) + 1);
    } else {
      hashMap.set(tasks[i], 1);
    }
  }

  // In the hashMap, we will have
  //  Key     | Value
  //   2          3
  //   3          2
  //   4          5
  let result = 0;
  for (let frequency of hashMap.values()) {
    if (frequency === 1) return -1;
    if (frequency % 3 === 0) {
      result += Math.floor(frequency / 3);
    } else {
      result += Math.floor(frequency / 3);
      // 2 is the quantity left
      // It can be completed in one round.
      // Therefore increment the result
      result++;
    }
  }

  // 2 % 3 === 0 , no,
  return result;
};
/**
 * 2 => 2 % 3 !== 0, result += 2/3= 0 + 1= 1
 * 3 => 3 % 3 === 0, result += 3/3 = 2
 * 5 => 5 % 3 !== 0, result += 2 + 5/3 = 3 + 1 = 4 
 */