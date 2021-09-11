# Problem 405: A rectangular tiling

[FCC link](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-405-a-rectangular-tiling)

We wish to tile a rectangle whose length is twice its width.

Let T(0) be the tiling consisting of a single rectangle.

For n > 0, let T(n) be obtained from T(n-1) by replacing all tiles in the
following manner:

The following animation demonstrates the tilings T(n) for n from 0 to 5:

Let f(n) be the number of points where four tiles meet in T(n). For example,
f(1) = 0, f(4) = 82 and f(109) mod 177 = 126897180.

Find f(10k) for k = 1018, give your answer modulo 177.
