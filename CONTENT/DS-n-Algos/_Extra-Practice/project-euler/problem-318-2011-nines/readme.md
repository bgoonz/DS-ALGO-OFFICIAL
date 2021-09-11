# Problem 318: 2011 nines

[FCC link](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-318-2011-nines)

Consider the real number √2+√3.

When we calculate the even powers of √2+√3

we get:

(√2+√3)2 = 9.898979485566356...

(√2+√3)4 = 97.98979485566356...

(√2+√3)6 = 969.998969071069263...

(√2+√3)8 = 9601.99989585502907...

(√2+√3)10 = 95049.999989479221...

(√2+√3)12 = 940897.9999989371855...

(√2+√3)14 = 9313929.99999989263...

(√2+√3)16 = 92198401.99999998915...

It looks like that the number of consecutive nines at the beginning of the
fractional part of these powers is non-decreasing. In fact it can be proven that
the fractional part of (√2+√3)2n approaches 1 for large n.

Consider all real numbers of the form √p+√q with p and q positive integers and
p<q, such that the fractional part of (√p+√q)2n approaches 1 for large n.

Let C(p,q,n) be the number of consecutive nines at the beginning of the
fractional part of (√p+√q)2n.

Let N(p,q) be the minimal value of n such that C(p,q,n) ≥ 2011.

Find ∑N(p,q) for p+q ≤ 2011.
