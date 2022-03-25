public boolean isRectangleOverlap(int[] rec1, int[] rec2) {
    // Calculate Length
    int left = Math.max(rec2[0], rec1[0]);
    int right = Math.min(rec2[2], rec1[2]);
    // Calculate Width 
    int top = Math.min(rec2[3], rec1[3]);
    int bottom = Math.max(rec2[1], rec1[1]);
    
    if (right > left && top > bottom) return true;
    else return false;
}