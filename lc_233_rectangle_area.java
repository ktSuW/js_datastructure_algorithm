// Time O(1)
// Space O(1)
public int computeArea(int ax1, int ay1, int ax2, int ay2, 
int bx1, int by1, int bx2, int by2) {

// Calculate areas for each rectangle 
int areaA = (ax2- ax1) * (ay2 - ay1);
int areaB = (bx2 - bx1) * (by2 - by1);

// Calculate Length 
int left = Math.max(bx1, ax1);
int right  = Math.min(ax2, bx2);
// Calculate Width
int top = Math.min(ay2,by2);
int bottom = Math.max(ay1, by1);

// Find if there is any overlap
int overlap = 0;
if (right > left  && top > bottom){
overlap = (right - left) * (top - bottom);
}

return areaA + areaB - overlap;
}