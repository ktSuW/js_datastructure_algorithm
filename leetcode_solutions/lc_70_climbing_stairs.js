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


// Recursion Approach 
/**
 * Brute force approach - Top down approach 
 * ====================================
 * Climb a staircase. Takes n steps to reach to the top
 * Each time you can either climb 1 or 2 steps. Fibonacci sequence
 * Recursion base case. 
 * You climb from bottom of the stairs 
 * if(n === 0) return 0;
if(n === 1) return 1;
if(n === 2) return 2;

  Time Complexity - O(2^n)
  Space Complexity - O(n) - Recursive depth
  TLE for input 45 due to very deep recursive tree
 */

var climbStairs = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  return climbStairs(n - 1) + climbStairs(n - 2);
};
