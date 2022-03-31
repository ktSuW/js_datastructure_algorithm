class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        int sumCost = 0;
        int sumGas = 0;
        int start = 0;
        int tank = 0; // diffence 
        
        for(int i = 0; i < gas.length; i++){
            sumCost += cost[i];
            sumGas += gas[i];
            tank += gas[i] - cost[i];
            if (tank < 0){
                start = i + 1;
                tank = 0;
            }
            
        }
        if (sumGas < sumCost){
                return -1;
        }
        return start;
            
        
    }