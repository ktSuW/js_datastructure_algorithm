'use Strict';

function reverseString(str){
  // const charArr = Array.from(str);
  const charArr = str.split("");
  let start = 0, end = charArr.length -1;
  while(start < end){
    let temp  = charArr[start];
    charArr[start] = charArr[end];
    charArr[end] = temp;
    start++;
    end--;
  }
  return charArr.join("");
}

function reverseString1(str){
  const newStr = str.split("");
  return newStr.reverse().join("");
}

console.log(reverseString("apple"));