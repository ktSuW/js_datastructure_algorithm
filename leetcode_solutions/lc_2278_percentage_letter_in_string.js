/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
  let result = 0;
  let map = new Map();
  let totalLen = s.length;
  for (let i = 0; i < s.length; i++) {
    // if(map.has(s.charAt(i))){
    //     map.set(s.charAt(i), (map.get(s.charAt(i))+1));
    // }else{
    //     map.set(s.charAt(i), 1);
    // }
    map.set(s.charAt(i), (map.get(s.charAt(i)) ?? 0) + 1);
  }

  for (const [key, value] of map) {
    if (key === letter) {
      result = Math.floor((value / totalLen) * 100);
      // console.log(key, value);
    }
  }
  // console.log(map);
  // console.log(totalLen);

  return result;
};
