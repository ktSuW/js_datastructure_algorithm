// Approach - 1
// Use both List and Set O(n) Additional space for set a
// And sort 
class Solution {
    public List<Integer> findKDistantIndices(int[] nums, int key, int k) {
        int n = nums.length;
        List<Integer> jIndices = new ArrayList<>();
        Set<Integer> set = new HashSet<>();
        for(int j = 0; j < n; j++){
            if(nums[j] == key){
                jIndices.add(j);
            }
        }
        

        for(int i = 0; i < n; i++){
            for(int j : jIndices){
                if(Math.abs(i-j) <= k && nums[j] ==key){
                    set.add(i);
                }
            }
        }
        
        List<Integer> result = new ArrayList<>(set);
        Collections.sort(result);
        return result;
    }
}
// Approach - 2
// Time O(nk)
// Space O(n)
class Solution {
    public List<Integer> findKDistantIndices(int[] nums, int key, int k) {
        int n = nums.length;
        List<Integer> jIndices = new ArrayList<>();
    
        for(int j = 0; j < n; j++){
            if(nums[j] == key){
                jIndices.add(j);
            }
        }
        
        List<Integer> ans = new ArrayList<>();
        for(int i = 0; i < n; i++){
            for(int j : jIndices){
                if(Math.abs(i-j) <= k && nums[j] == key){
                    ans.add(i);
                    break;
                }
            }
        }
        return ans;
    }
}