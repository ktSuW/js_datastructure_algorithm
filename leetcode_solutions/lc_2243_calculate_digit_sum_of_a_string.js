// Time complexity - O(n)
// Space Complexity - O(1)
var digitSum = function (s, k) {
  while (s.length > k) {
    let sum = 0;
    let count = 0;
    let t = "";
    for (let i = 0; i < s.length; i++) {
      sum += s[i] - "0";
      count++;

      if (count === k) {
        t += sum;
        //Reset both sum and count
        //for next consecutive groups
        count = 0;
        sum = 0;
      }
    }
    // To hand the case :
    // The last group size can be smaller than k
    if (count > 0) {
      t += sum;
    }
    // Once we finish iterating through
    // assign new string t to s
    s = t;
  }
  return s;
};
