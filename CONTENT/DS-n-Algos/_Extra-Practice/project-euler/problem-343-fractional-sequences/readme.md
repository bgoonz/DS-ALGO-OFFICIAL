# Problem 343: Fractional Sequences

[FCC link](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-343-fractional-sequences)

For any positive integer k, a finite sequence ai of fractions xi/yi is defined
by:

a1 = 1/k and

ai = (xi-1+1)/(yi-1-1) reduced to lowest terms for i>1.

When ai reaches some integer n, the sequence stops. (That is, when yi=1.)

Define f(k) = n.

For example, for k = 20:

1/20 → 2/19 → 3/18 = 1/6 → 2/5 → 3/4 → 4/3 → 5/2 → 6/1 = 6

So f(20) = 6.

Also f(1) = 1, f(2) = 2, f(3) = 1 and Σf(k3) = 118937 for 1 ≤ k ≤ 100.

Find Σf(k3) for 1 ≤ k ≤ 2×106.
