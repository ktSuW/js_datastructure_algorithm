"use Strict";
/**
 * https://en.wikipedia.org/wiki/Permutation#Generation_in_lexicographic_order
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    // Find the largest index k such that a[k] < a[k + 1]. If no such index exists, the permutation is the last permutation.
    for(let i = nums.length -1; i>=0; i--){
        if(nums[i] < nums[i+1]){
            const nextLarger = findNextLargerNumber(i);
            swap(i, nextLarger);
            reverseSubArray(i+1);
            return;
        }
    }
    // e.g. 5 4 3 2 1 , There is no next permutation
    // reverse the array nums
    nums.reverse();

    // Find next larger element after finding the first decreasing index
    function findNextLargerNumber(index){
        for(let i = nums.length -1; i > index; i--){
            if(nums[i] > nums[index]){
                return i;
            }
        }
    }

    // Swap first decreasing element and next greater number
    function swap(i, nextLarger){
        [nums[i], nums[nextLarger]] = [nums[nextLarger], nums[i]];
    }

    // After swapping
    // e.g. 1 5 4 3 2 1
    //      -         -
    //      2 1 1 3 4 5
    // Reverse the sequence from a[k + 1] up to and including the final element a[n].
    function reverseSubArray(index){
        let start = index;
        let end = nums.length -1;
        while(start < end){
            swap(start, end);
            start++;
            end--;
        }
    }

};




