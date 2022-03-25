/**
 *
 * @param {number} n
 * @returns {number}
 * Sieve of Eratosthenes
 */

var countPrimes_1 = function (n) {
  // Assume: fill 0 to n with true
  let isPrime = new Array(n).fill(true, 2);
  for (let i = 2; i * i < n; i++) {
    if (!isPrime[i]) continue;
    for (let j = i * i; j < n; j += i) {
      isPrime[j] = false;
    }
  }
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      count++;
    }
  }
  return count;
};

//===============================================

var countPrimes_3 = function (n) {
  let isPrime = Array(n).fill(true, 2);
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      count++;
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return count;
};
console.log(countPrimes_3(10));

//============================================
console.log(countPrimes_1(10)); // n = 4

var countPrimes_2 = function (n) {
  // initialise seen array as 0
  let seen = new Uint8Array(n);
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (seen[i]) continue;
    count++;
    for (let j = i * i; j < n; j += i) {
      seen[j] = 1;
    }
  }
  return count;
};

console.log(countPrimes_2(10));
