# expected to rotate an array in-place without using additional memory
# O(1) space requirement!


def rotateImage(a):
    n = len(a)
    # reflect about the diagonal
    for i in range(n):
        for j in range(i, n):
            a[i][j], a[j][i] = a[j][i], a[i][j]

    # now flip the columns about the center
    for i in range(n):
        for j in range(n // 2):
            a[i][j], a[i][n - 1 - j] = a[i][n - 1 - j], a[i][j]

    return a
