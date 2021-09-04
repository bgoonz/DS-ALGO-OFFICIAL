import requests
import pandas as pd


def productExceptSelf(nums, m, first=True):
    # uses divide and conquer approach from Khan academy!
    # may need to upgrade with prime factorization
    # and fast modular exponents using binary!

    # make map of prime factors and their exponents (number of each factor)
    # by breaking down individual array items
    # remove individual values from map for each item in array (reduce number of each factor present in current item)
    # convert exponent to binary and get modular exponents for each factor (see here: https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/fast-modular-exponentiation)
    # finally, combine all different prime factors for the number and add to array
    # reduce array by summing and final mod as shown
    if len(nums) == 1:
        return nums[0] % m
    if first:
        output = []
        j = len(nums)
        mid = (j - 1) // 2
        # left_mod = productExceptSelf(nums[0:mid], m, False)
        # right_mod = productExceptSelf(nums[mid:], m, False)
        for i in range(j):
            arr = nums[:]
            arr.pop(i)
            # print(arr)
            # if(i<mid):
            #     mult_val = right_mod
            # else:
            #     mult_val = left_mod
            output.append(productExceptSelf(arr, m, False))

        # print(output)
        return sum(output) % m

    else:
        mid = len(nums) // 2
        left = productExceptSelf(nums[0:mid], m, False)
        right = productExceptSelf(nums[mid:], m, False)
        return (left * right) % m


arr = pd.read_json("./test-16.json").loc["nums", "input"]

# print(arr)

print(productExceptSelf(arr, 9999, first=True))


# works for small cases, need to use divide and conquer according to Khan
# causes overflow issues
# #first, get the number of all nums multiplied
# largest_num = 1
# for num in nums:
#     largest_num*=num

# print(largest_num)

# #get the array of modulo m elements
# fg_arr = [(largest_num/num) % m for num in nums]

# print(fg_arr)
# total = sum(fg_arr) % m

# return total
