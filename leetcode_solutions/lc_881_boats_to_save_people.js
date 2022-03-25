/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
// Time Complexity - O(n log n)
// Space Complexity - O(n)
var numRescueBoats = function (people, limit) {
  //Greedy Approach
  // Sort the people Array
  people.sort((a, b) => a - b); // O(n log n - runtime)
  // Two Pointers
  let start = 0,
    end = people.length - 1,
    boats = 0;
  while (start <= end) {
    boats++;
    if (people[start] + people[end] <= limit) {
      start++;
    }
    // If not, decrement end to allow for heaviest person
    // to sit alone under the limit
    end--;
  }
  return boats;
};
