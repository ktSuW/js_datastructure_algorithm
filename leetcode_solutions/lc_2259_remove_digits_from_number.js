// Approach - 1 
var removeDigit = function (number, digit) {
  let ans = "";
  let index;
  for (let i = 0; i < number.length; i++) {
    if (number[i] === digit && number[i] < number[i + 1]) {
      index = i;
      ans = number.slice(0, index) + number.slice(index + 1);
      return ans;
    }
    if (number[i] === digit) {
      index = i;
    }
  }
  ans = number.slice(0, index) + number.slice(index + 1);
  return ans;
};


// Approach - 2
// cannot use Math.max(), find out why??
var removeDigit = function (number, digit) {
  let globalMax = Number.MIN_VALUE;

  for (let i = 0; i < number.length; i++) {
    if (number[i] === digit) {
      let localMax = number.slice(0, i) + number.slice(i + 1);
      if (globalMax < localMax) {
        globalMax = localMax;
      }
    }
  }
  return globalMax.toString();
};

