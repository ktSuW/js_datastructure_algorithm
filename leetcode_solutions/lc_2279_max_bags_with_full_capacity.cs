public int MaximumBags(int[] capacity, int[] rocks, int additionalRocks){
  int bags = 0;
  int[] diff = new int[capacity.length];
  for(int i = 0; i < capacity.legnth; i++){
    // if bags is full, increment it
    if(capacity[i] == rocks[i]){
      bags++;
    }
    // find out the differences
    diff[i] = capacity[i] - rocks[i];
  }

  // Sort the diff array to find out the smallest diff
  // Greedy approach
  Array.Sort(diff);
  for(int i = 0; i < capacity.length; i++){
    if(diff[i] != 0 && additionalRocks>= diff[i]){
      additionalRocks -= diff[i];
      bags++;
    }
  }
  return bags;
}