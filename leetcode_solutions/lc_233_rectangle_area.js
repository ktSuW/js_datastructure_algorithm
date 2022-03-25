/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  //                      0    1    2    3    0    1    2    3
  // Area1 & Area 2
  let area1 = (ax2 - ax1) * (ay2 - ay1);
  let area2 = (bx2 - bx1) * (by2 - by1);

  // Find for overlapped area
  // Area = Length X Width
  // Calculate Length
  let left = bx1 > ax1 ? bx1 : ax1;
  let right = bx2 < ax2 ? bx2 : ax2;
  // Calculate Width
  let top = by2 < ay2 ? by2 : ay2;
  let bottom = by1 > ay1 ? by1 : ay1;

  // If overlap,
  let overlapArea = 0;
  if (right > left && top > bottom) {
    overlapArea = (right - left) * (top - bottom);
  }

  return area1 + area2 - overlapArea;
};
