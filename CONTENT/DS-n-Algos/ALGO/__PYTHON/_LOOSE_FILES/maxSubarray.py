def maxSubarray(A):
    # A: inputArray
    # m: Max
    #
    #
    m = e = 0
    for i in A:
        e += i
        e = max(e, 0)
        m = max(m, e)
    return m
