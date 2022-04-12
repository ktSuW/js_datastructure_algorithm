// Iterative Approach
// Fibonacci Number
// Time complexity : O(n)
// Space Complexity : O(1)
var climbStairs = function (n) {
  let oneStep = 1;
  let twoSteps = 1;
  for (let i = 2; i <= n; i++) {
    let sum = oneStep + twoSteps;
    oneStep = twoSteps;
    twoSteps = sum;
  }
  return twoSteps;
};


// Pending 
//==========================================
// Recursion
// Recursion with memoisation
// DP 