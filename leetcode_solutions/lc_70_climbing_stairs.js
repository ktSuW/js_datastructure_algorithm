// Iterative Approach
// Fibonacci Number - DP with optimisation
// Instead of using an array to store previous values, use previous two values 
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

// dynamic programming
// bottom up approach
var climbStairs = function (n) {
  if (n <= 1) return 1;
  // let dp = new Array(n+1);
  let dp = [n + 1];
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};


// Using Map

var climbStairs = function (n) {
  let map = new Map();
  map.set(1, 1);
  map.set(2, 2);
  let sum = 0;
  for (let i = 3; i <= n; i++) {
    sum = map.get(i - 1) + map.get(i - 2);
    map.set(i, sum);
  }
  return map.get(n);
};

// recursive top down (memoization)
var climbStairs = function (n) {
  let memo = new Map();
  return climb(n, memo);
};

var climb = function (n, memo) {
  if (n <= 2) return n;
  if (!memo.has(n)) {
    memo.set(n, climb(n - 1, memo) + climb(n - 2, memo));
  }
  return memo.get(n);
};

// Top down memoisation 
var climbStairs = function (n, memo) {
  memo = memo || new Map();
  if (memo.has(n)) return memo.get(n);

  //Base cases
  if (n === 1) return 1;
  if (n === 2) return 2;
  let result = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  memo.set(n, result);
  return result;
};

