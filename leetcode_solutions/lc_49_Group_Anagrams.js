/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// Approach -1 
// Time O(n*m)
// n is the number of words in the given strs
// m is the number of characters in each word
// Space O(n)
var groupAnagrams = function (strs) {
  // Map is used instead of Object. Since map has O(1) lookup, insert, delete
  const map = new Map();

  // Get each word from the strs array
  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];
    // What we get is string. Turn it into array
    // Sort each character and join them
    // destructing is used to turn string into array
    const wordSorted = [...word].sort().join("");

    // Add each wordSorted as key and original word as value
    if (map.size > 0 && map.has(wordSorted)) {
      // get the key (wordSorted) and push the original word into the array
      map.get(wordSorted).push(word);
    } else {
      //if wordSorted is not in the map, add it and value as array
      map.set(wordSorted, [word]);
    }
  }
  // Method -1
  // const result = [];
  // // Since map is an iterable object, I can use entries(), or values()
  // for(const [key, value] of map.entries()){
  //     result.push(value);
  // }
  // return result;

  // Method -2
  // destructure items in the map and get each list
  return [...map.values()];
};

//Approach - 2
// Very similar to above approach 
// The only difference is the key creation. 
// Here charCodeAt is used.
// For every character, calculate the decimal
// Therefore, performance time is lower compared to approach -1. 
var groupAnagrams = function(strs) {
    const map = new Map();
    for(const word of strs){
       
        const alphabets = Array(26).fill(0);
        // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        for(const c of word){
            alphabets[c.charCodeAt(0) - 97]++;
        }
        // const key = [...word].sort().join("");
        
        const key = alphabets.join("#");
        let values = [];
        if(map.has(key)){
            values = map.get(key);   
        }
        values.push(word);
        map.set(key, values);
    }
    return Array.from(map.values());
};