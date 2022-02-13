// Approach 1 - HashMap Approch 
// Time O(n)
// Space O(n)
class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        Map<Integer,Integer> map = new HashMap<Integer, Integer>();
        List<Integer> result = new ArrayList<Integer>();
        
        for(int i : nums1){
            if(map.containsKey(i)){
                map.put(i, map.get(i) + 1);
            }else{
                map.put(i, 1);
            }
        }
        
        for(int j : nums2){
            if(map.containsKey(j) && map.get(j) > 0){
                result.add(j);
                map.put(j, map.get(j)-1);
            }
        }
        
        int[] finalResult = new int[result.size()];
        int k = 0;
        for(int i : result){
            finalResult[k++] = i;
        }
        return finalResult;
    }
}


//Approach 2 - Optimised Approach 
// Time O(n log n)
// Space O(1)
class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        Arrays.sort(nums1);
        Arrays.sort(nums2);
        
        List<Integer> result = new ArrayList<Integer>();
        int i = 0, j = 0;
         while (i < nums1.length && j < nums2.length){
            if(nums1[i] < nums2[j]){
                i++;
            }else if (nums1[i] > nums2[j]){
                j++;
            }else{
                result.add(nums1[i]);
                i++;
                j++;
            }
        };           
        int k = 0;
        int[] finalResult = new int[result.size()];
        for(int num : result){
            finalResult[k++] = num;
        }
        return finalResult;
    }
}