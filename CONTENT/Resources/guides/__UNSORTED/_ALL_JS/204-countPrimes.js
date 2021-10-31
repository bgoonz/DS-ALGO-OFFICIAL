/**
 * @param {number} n
 * @return {number}
 */
let countPrimes = function (n) {
  let count = 0;
  for (let i = 1; i < n; i++) {
    if (isPrime(i)) count++;
  }
  return count;
};

// traditional approach, to determine a number is prime or not,
// only need to consider factors up to √n
let isPrime = function (num) {
  if (num <= 1) return false;
  // Loop's ending condition is i * i <= num instead of i <= sqrt(num)
  // to avoid repeatedly calling an expensive function sqrt().
  for (let i = 2; i * i <= num; i++) {
    if (num % i == 0) return false;
  }
  return true;
};

/**
 * A better solution using Sieve of Eratosthenes
 * if the current number is p,
 * mark off multiples of p starting at p^2, then in increments of p: p^2 + p, p^2 + 2p, ...
 * these above numbers are not prime numbers
 *
 * @param {number} n
 * @return {number}
 */
let countPrimes = function (n) {
  let count = 0;
  let isPrime = [];
  for (let i = 2; i < n; i++) isPrime[i] = true;
  for (let i = 2; i * i < n; i++) {
    if (isPrime[i]) {
      let start = i * i;
      while (start <= n) {
        isPrime[start] = false;
        start = start + i;
      }
    }
  }
  for (let j = 2; j < n; j++) {
    if (isPrime[j]) count++;
  }

  return count;
};
