p, s = eval(dir()[0])
r = -1
l = len(p)
for i in range(l):
    for j in range(l):
        d = p[j] - p[i]
        f = s[i] - s[j]

        if d * f < 1:
            continue

        c = sum(p[k] * f + s[k] * d == p[i] * f + s[i] * d for k in range(l))
        if c > r:
            r = c
return r
