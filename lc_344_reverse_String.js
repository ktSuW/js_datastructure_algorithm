// Brute Force
// Time O(n)
// Space O(n)
var reverseString1 = function (string) {
  const reversed = [];
  const totalItems = string.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    reversed.push(string[i]); // split()
  }
  return reversed.join("");
};

//console.log(reverseString1("hello"));

var reverseString2 = function (string) {
  return string.split("").reverse().join("");
};

//console.log(reverseString2("hello"));

// Optimised Space Complexity
// Time O(n)
// Space O(1)
/**
 *
 * @param {string} some string
 * @returns reversed string
 */
var reverseString3 = function (string) {
  // check for input
  // if (!string || string.length < 2 || typeof string !== "string") return string;
  let start = 0;
  let end = string.length - 1;

  while (start < end) {
    let temp = string[start];
    string[start] = string[end];
    string[end] = temp;
    start++;
    end--;
  }
  return string;
};

console.log(reverseString3("hello"));
// olleh

const reverseString4 = (string) => string.split("").reverse("").join("");
// console.log(reverseString4("hello"));

var reverseString3 = function (string) {
  let s = 0;
  let e = string.length;
  while (s < e) {
    s++;
    end--;
  }
};
