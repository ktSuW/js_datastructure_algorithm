// Two pointers approach 
// Time O(n^2)
// Space O(1)
class Solution {
    public int countHillValley(int[] nums) {
        int result = 0;
        int n = nums.length;
        for(int i = 1; i < n; i++){
            if(nums[i] == nums[i-1]){
                continue;
            }
            
            int p1 = i -1, p2 = i+1;
            while(p1 >= 0 && nums[i] == nums[p1]){
                p1--;
            }
            if(p1 < 0) continue;
            
            while(p2 < n && nums[i] == nums[p2]){
                p2++; 
            }
            if(p2 == n) continue;
            
            if(nums[p1] < nums[i] && nums[p2] < nums[i] ||
               nums[p1] > nums[i] && nums[p2] > nums[i]){
                result++;
            }
        }
        return result;
    }
}


// Additional Space 
// Time O(n)
// Space O(1)

class Solution {
    public int countHillValley(int[] nums) {
        int result = 0; 
        List<Integer> list = new ArrayList<>();
        list.add(nums[0]);
        
        for(int i : nums){
            if(i == list.get(list.size()-1)){
                continue;
            }
            list.add(i);
        }
        
        
        for(int i = 1; i < list.size()-1; i++){
            int prev = list.get(i-1), curr = list.get(i), next = list.get(i+1);
            // Check for hills
            if((prev < curr && next < curr) || 
            // check for valleys
               (prev > curr && next > curr)
              ){
                result++;
            }
        }
        return result;
    }
}