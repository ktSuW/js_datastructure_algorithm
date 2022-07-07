/*
 Example runthrough
        0  1  2  3  4  5  <= index 
       -1, 0, 3, 5, 9, 12  <= nums array, target = 9
       start           end
       mid = 0 + 5 / 2 = 5/2 =2
       nums[2] = 3
       3 is less than 9. So It must be on the right side of mid
       Move start to mid + 1.
       
       Therefore start = 2 + 1 = 3, end = 5
       mid = 3 + 5/2 = 8/2 = 4 
       nums[mid] = 9 
       9 == 9
       Therefore return 

Generalised approach 
1. Initialise start = beginning of the nums array
   Initialise end = end of the nums array 
   Find mid = start + end / 2; 

2. Three conditions
    2.1 nums[mid ] == target, best case. return the index value
    2.2 if nums[mid] < target, then move start => mid + 1
    2.3 if nums[mid] > target , then move end => mid - 1
3. At the end of nums array iteration, if there is no answer, return -1
        
        ---------------------
        
   8  n/2   n   n   n   n   n   n   n  n    
   4  n/4   n   n   n   n                   8 * 1/2 = 4
   2  n/8   n   n                           4 * 1/2 = 2
   1     n                                  2 * 1/2 = 1
                                            
                                            8 * (1/2)^3 = 1
   Generalisation ========================> n * (1/2)^k = 1
                                            n * 1/2^k   = 1
                                            n = 2*k
  Take log base 2 on both sides 
   
   n = 2^k
   log(base 2) n = log(base 2) 2^k
   log(base 2) n = k 
   
*/
// Time O(log n)
// Space O(1)

class Solution {
    public int search(int[] nums, int target) {
        int start = 0;
        int end = nums.length -1;
        // start <= end - constraint 
        while(start <= end){
            //int mid = (start + end)/2;
            // To prevent the integer overflow 
            int mid = start + (end - start) / 2;
            if(target == nums[mid]){
                return mid;
            }else if(target < nums[mid]){
                end = mid -1;
            }else if (target > nums[mid]){
                start = mid + 1;
            }
        }
        return -1;
    }
}