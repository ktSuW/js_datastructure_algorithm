'use Strict'
nums = [5, 4, 6, 7, 3, 1, 9, 10];
// 5 4 6 7              3 1 9 10
// 5 4    6 7           3 1   9 10
// 5  4   6   7         3   1       9   10
// 4 5    6 7           1 3     9 10
// 4 5 6 7              1 3 9 10 
// 1 3 4 5 6 7 9 10

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Merge Sort 
// Recursive Approach : Divide and Conquer
var sortArray = function(nums){
    let len = nums.length;
    // edge case
    if(len < 2) return nums;

    const mid = Math.floor(len/2);
    // Split the left part 
    let left = Array(mid).fill(0);

};

