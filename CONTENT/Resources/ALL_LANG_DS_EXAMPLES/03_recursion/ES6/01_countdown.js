/**
 * Countdown
 * @param {number} i Number
 */
const countdown = i => {
  console.log(i);
  // base case
  if (i <= 0) return;
  countdown(i - 1);
};

countdown(5);
