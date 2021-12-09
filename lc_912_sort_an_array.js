"use Strict";
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Merge Sort
// Time (n log n)
// Space O(n) due to two subarrays creation in the merge function
var sortArray_MergeSort = function (nums) {
  let n = nums.length;
  //recurisvely divide the elements
  mergeSort(nums, 0, n - 1);
  return nums;
};

let mergeSort = function (nums, left, right) {
  // edge case
  if (nums.length < 2) return;
  //  base case
  if (left >= right) return;
  let mid = Math.floor(left + (right - left) / 2);
  // Recursively divide
  mergeSort(nums, left, mid);
  mergeSort(nums, mid + 1, right);
  merge(nums, left, mid, right);
};

var merge = function (nums, left, mid, right) {
  let leftSubArrayLen = mid - left + 1;
  let rightSubArrayLen = right - mid;

  let leftSubArray = new Array(leftSubArrayLen);
  let rightSubArray = new Array(rightSubArrayLen);

  for (let i = 0; i < leftSubArrayLen; i++) {
    leftSubArray[i] = nums[left + i];
  }

  for (let j = 0; j < rightSubArrayLen; j++) {
    rightSubArray[j] = nums[mid + 1 + j];
  }

  let i = 0;
  let j = 0;
  let k = left;

  while (i < leftSubArrayLen && j < rightSubArrayLen) {
    if (leftSubArray[i] < rightSubArray[j]) {
      nums[k++] = leftSubArray[i++];
    } else {
      nums[k++] = rightSubArray[j++];
    }
  }

  while (i < leftSubArrayLen) {
    nums[k++] = leftSubArray[i++];
  }

  while (j < rightSubArrayLen) {
    nums[k++] = rightSubArray[j++];
  }
};
nums = [2, -1, 0, 5, 6, 3, 1];
console.log(sortArray_MergeSort(nums));

/*
================================================================
Approach 2: Quicksort 
Time O(n^2) worst case
Time O(n log n) Average and best cases
It is in-place algorithm
Space O(1)
================================================================
*/

var sortArray_QuickSort = function (nums) {
  let n = nums.length;
  quickSort(nums, 0, n - 1);
  return nums;
};

const quickSort = (nums, start, end) => {
  // Base case
  if (start >= end) return;
  const mid = partition(nums, start, end);
  //Recursively divide
  quickSort(nums, start, mid);
  quickSort(nums, mid + 1, end);
};

const partition = (nums, start, end) => {
  let pivot = nums[start];
  while (start < end) {
    while (start < end && nums[end] > pivot) {
      end--;
    }
    swap(nums, start, end);
    while (start < end && nums[start] <= pivot) {
      start++;
    }
    swap(nums, start, end);
  }
  nums[start] = pivot;
  return start;
};

const swap = (nums, start, end) => {
  let temp = nums[start];
  nums[start] = nums[end];
  nums[end] = temp;
};

/*
================================================================
Approach 2: Quicksort 
Time O(n^2) worst case
Time O(n log n) Average and best cases
It is in-place algorithm
Space O(1)
Slightly different implementation
================================================================
*/
var sortArray = function (nums) {
  let n = nums.length;
  if (n < 2) return nums;
  quickSort2(nums, 0, nums.length - 1);
  return nums;
};

var quickSort2 = (nums, start, end) => {
  if (start >= end) return;
  const mid = start + Math.floor((end - start) / 2);
  const pivotIndex = partition2(nums, start, end, nums[mid]);
  quickSort2(nums, start, pivotIndex - 1);
  quickSort2(nums, pivotIndex, end);
};

const partition2 = (nums, start, end, pivot) => {
  let left = start;
  let right = end;
  while (left <= right) {
    while (left <= end && nums[left] < pivot) {
      left++;
    }
    while (left <= right && right >= start && nums[right] > pivot) {
      right--;
    }
    if (left <= right) {
      swap(nums, left, right);
      left++;
      right--;
    }
  }
  return left;
};

const swap2 = (nums, start, end) => {
  [nums[start], nums[end]] = [nums[end], nums[start]];
};

/**
 * Approach 3 : Bubble sort
 * Time O(n^2), not efficient compared to the first two
 */

var sortArray_BubbleSort = function (nums) {
  for (let i = nums.length - 1; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        swapBubbleSort(nums, j, j + 1);
      }
    }
  }
  return nums;
};

let swapBubbleSort = (nums, i, j) => {
  nums[i] = nums[i] ^ nums[j];
  nums[j] = nums[i] ^ nums[j];
  nums[i] = nums[i] ^ nums[j];
};

