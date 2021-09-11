# Problem 274: Divisibility Multipliers

[FCC link](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-274-divisibility-multipliers)

For each integer p > 1 coprime to 10 there is a positive divisibility multiplier
m < p which preserves divisibility by p for the following function on any
positive integer, n:

f(n) = (all but the last digit of n) + (the last digit of n) \* m

That is, if m is the divisibility multiplier for p, then f(n) is divisible by p
if and only if n is divisible by p.

(When n is much larger than p, f(n) will be less than n and repeated application
of f provides a multiplicative divisibility test for p.)

For example, the divisibility multiplier for 113 is 34.

f(76275) = 7627 + 5 _34 = 7797 : 76275 and 7797 are both divisible by
113f(12345) = 1234 + 5_ 34 = 1404 : 12345 and 1404 are both not divisible by 113

The sum of the divisibility multipliers for the primes that are coprime to 10
and less than 1000 is 39517. What is the sum of the divisibility multipliers for
the primes that are coprime to 10 and less than 107?
