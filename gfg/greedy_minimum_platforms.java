// https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1/?page=1&category[]=Greedy&sortBy=submissions
// Question to ask interview - is the arival time sorted?
// When the train arrives and when it leaves
/**
Variables
-------------------
number of platforms
max number of platforms 
STEP 1 - Sort arrival time and department time in ascending order
    
    900    940    0950    1100    1500    1800
    910    1120    1130    1200    1900    2000

STEP 2 - What is the max number of platform that is required throughout the day
    - Check if one of the trains is leaving before another train arrival (EMPTY PLATFORM)
    
            1       1       1   = max number 
        move the pointer

**/ 

// Time Complexity 
// (2 n log n) - sort arr and dep + O(2n) for two arrays
// Space Complexity 
// O(1)
class Solution
{
    //Function to find the minimum number of platforms required at the
    //railway station such that no train waits.
    // n is size of the array 
    static int findPlatform(int arr[], int dep[], int n)
    {
        Arrays.sort(arr);
        Arrays.sort(dep);
        
        int platforms_needed = 1, max_platforms_num = 1;
        // Two pointers
        int p1 = 1; // Second arrival train therefore, starts at 1
        int p2 = 0; // first department train
        
        while (p1 < n && p2 < n){
            if(arr[p1] <= dep[p2]){
                platforms_needed++;
                p1++;
            }else if (arr[p1] > dep[p2]){
                platforms_needed--;
                p2++;
            }
            
            // if(platforms_needed > max_platforms_num){
            //     max_platforms_num = platforms_needed;
            // }
            
            max_platforms_num = Math.max(max_platforms_num,platforms_needed );
        }
        return max_platforms_num;
    }
    
}