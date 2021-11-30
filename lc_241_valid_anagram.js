/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//Approach : Brute Force
// Use inbuilt string methods
// split => 'a', 'p', 'p','l', 'e'
// sort  => a   e   l   p   p
// join => aelpp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
var isAnagram_1 = function (s, t) {
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");
  return s === t;
};

//Approach : Use Array and ASCII 26 characters
// charCodeAt() - The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

// for ...of statement creates a loop iterating over iterable objects
// Builtin iterables : String, Array, TypedArray, Map, Set
// Time O(m + n + anagramArray)
// Space O(n) for Array
var isAnagram_2 = function (s, t) {
  if (s.length !== t.length) return false;
  let anagramArray = Array(26).fill(0);
  // increment for characters from s string
  for (let c of s) {
    anagramArray[c.charCodeAt(0) - 97]++;
  }
  // decrement for characters from t string
  for (let c of t) {
    anagramArray[c.charCodeAt(0) - 97]--;
  }

  for (let c of anagramArray) {
    if (c !== 0) return false;
    return true;
  }
};

// Approach : Map
// Map object holds key-value pairs and remembers the original insertion order of the keys
// Any value (both objects or primitive values) may be used either a key or a value
// Time O(m+n)
var isAnagram_3 = function (s, t) {
  if (s.length !== t.length) return false;
  const map = {};
  for (let c of s) {
    if (map[c] == null) {
      map[c] = 0;
    }
    map[c]++;
  }

  for (let c of t) {
    if (map[c] > 0) {
      map[c]--;
    } else {
      return false;
    }
  }
  return true;
};

// Approach : Map + Ternary Operator
// Time O(m) + O(n)
// Space O(n) for map
var isAnagram_4 = function (s, t) {
  if (s.length !== t.length) return false;
  let aArray = {};
  for (let i = 0; i < s.length; i++) {
    aArray[s[i]] = aArray[s[i]] ? aArray[s[i]] + 1 : 1;
    aArray[t[i]] = aArray[t[i]] ? aArray[t[i]] - 1 : -1;
  }

  for (let c in aArray) {
    if (aArray[c] !== 0) {
      return false;
    }
  }
  return true;
};
