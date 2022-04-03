// Approach - 1
// Time O(operations)
// Space O(1)
// NOTE: Code duplications
var convertTime = function (current, correct) {
  let curH = parseInt(current.slice(0, 2) * 60);
  let curM = parseInt(current.slice(3)) + curH;

  let corH = parseInt(correct.slice(0, 2) * 60);
  let corM = parseInt(correct.slice(3)) + corH;

  let diff = corM - curM;

  let final = 0;

  while (diff > 0) {
    if (diff >= 60) {
      let result = Math.floor(diff / 60);
      diff = diff % 60;
      final += result;
    }

    if (diff >= 14) {
      let result = Math.floor(diff / 15);
      diff = diff % 15;
      final += result;
    }

    if (diff >= 4) {
      let result = Math.floor(diff / 5);
      diff = diff % 5;
      final += result;
    }

    if (diff >= 0) {
      let result = Math.floor(diff / 1);
      diff = diff % 1;
      final += result;
    }
  }

  return final;
};


// Approach 2 
// Better runtime performance
// Runtime : O(1)
// This is greedy approach.
// https://leetcode.com/problems/minimum-number-of-operations-to-convert-time/discuss/1908782/C%2B%2B-Greedy 
var convertTime = function (current, correct) {
  // Convert current hours to minutes and add it to current minutes
  // parseInt to get the floor value (In JS, the number is float. There is no int type.)
  let curH = parseInt(current.slice(0, 2) * 60);
  let curM = parseInt(current.slice(3)) + curH;

  // Convert correct hours to minutes and add it to correct minutes
  // ========================
  // NOTE: I cannot simply substract between two hours and get the number of operations for hours for cases like below
  // E.g. 09:02
  //      10:01
  // ========================
  let corH = parseInt(correct.slice(0, 2) * 60);
  let corM = parseInt(correct.slice(3)) + corH;

  // Find difference betweeen them
  let diff = corM - curM;

  const operations = [60, 15, 5, 1];
  let final = 0;
  for (let i of operations) {
    let result = Math.floor(diff / i);
    diff %= i;
    final += result;
  }

  return final;
};