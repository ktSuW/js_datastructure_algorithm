/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
// Time O(1)
// Space O(1)
var isRectangleOverlap = function (rec1, rec2) {
  // Find for overlapped area
  // Area = Length X Width
  // Calculate Length
  let left = rec2[0] > rec1[0] ? rec2[0] : rec1[0];
  let right = rec2[2] < rec1[2] ? rec2[2] : rec1[2];
  // Calculate Width
  let top = rec2[3] < rec1[3] ? rec2[3] : rec1[3];
  let bottom = rec2[1] > rec1[1] ? rec2[1] : rec1[1];

  // If overlap,
  if (right > left && top > bottom) return true;
  else return false;
};
