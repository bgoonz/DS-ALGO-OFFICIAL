def zeros(arr, n):
    count = 0
    for i in range(n):
        if arr[i] != 0:
            arr[count] = arr[i]
            count += 1

    while count < n:
        arr[count] = 0
        count += 1


def print_arr(arr, n):
    for i in range(n):
        print(arr[i], end=" ")


arr = [1, 0, 0, 2, 5, 0]
zeros(arr, len(arr))
print_arr(arr, len(arr))

# Simple function that will take a string of latin characters and return a unique hash
def hashString(str):
    # Map characters to prime numbers to multiply
    charMap = {
        "a": 2,
        "b": 3,
        "c": 5,
        "d": 7,
        "e": 11,
        "f": 13,
        "g": 17,
        "h": 19,
        "i": 23,
        "j": 29,
        "k": 31,
        "l": 37,
        "m": 41,
        "n": 43,
        "o": 47,
        "p": 53,
        "q": 59,
        "r": 61,
        "s": 67,
        "t": 71,
        "u": 73,
        "v": 79,
        "w": 83,
        "x": 89,
        "y": 97,
        "z": 101,
        "A": 103,
        "B": 107,
        "C": 109,
        "D": 113,
        "E": 127,
        "F": 131,
        "G": 137,
        "H": 139,
        "I": 149,
        "J": 151,
        "K": 163,
        "L": 167,
        "M": 173,
        "N": 179,
        "O": 181,
        "P": 191,
        "Q": 193,
        "R": 197,
        "S": 199,
        "T": 211,
        "U": 223,
        "V": 227,
        "W": 229,
        "X": 233,
        "Y": 239,
        "Z": 241,
    }

    return reduce(lambda memo, char: memo * charMap[char], list(str), 1)


def anagramDetection(parent, child):
    length = len(child)
    anagram = hashString(child)
    total = 0

    for i in range(0, len(parent) - length):
        if hashString(parent[i : i + length]) == anagram:
            total = total + 1

    return total

def SortAnagram(arr):
    temp = []
    stage = []
    dic = []

    for i in arr:
        for j in i:
            stage.append(j)
        stage.sort()
        temp.append("".join(stage))
        stage = []

    for index, value in enumerate(temp):
        dic.append([index, value])

    temp = []
    dic = sorted(dic, key=lambda x: x[1])
    for i in range(len(dic)):
        stage.append(dic[i][0])

    for i in stage:
        temp.append(arr[i])

    print(temp)


arr = ["cat", "dog", "tac", "god", "act"]

SortAnagram(arr)

import unittest

"""solution to the array pair sum problem"""


def array_pair_sum_iterative(arr, k):
    """
    returns the array of pairs using an iterative method.
    complexity: O(n^2)
    """

    result = []

    for i in range(len(arr)):
        for j in range(i + 1, len(arr)):
            if arr[i] + arr[j] == k:
                result.append([arr[i], arr[j]])

    return result


def array_pair_sum_sort(arr, k):
    """
    first sort the array and then use binary search to find pairs.
    complexity: O(nlogn)
    """

    result = []
    arr.sort()

    for i in range(len(arr)):
        if k - arr[i] in arr[i + 1 :]:
            result.append([arr[i], k - arr[i]])

    return result


def array_pair_sum_hash_table(arr, k):
    """
    Use a hash table to store array elements of pairs.
    complexity: O(n)
    """

    result = []
    hash_table = {}

    for e in arr:
        if e in hash_table:
            result.append([k - e, e])
        else:
            hash_table[k - e] = True
    result.reverse()

    return result


# Unit tests
class array_pair_sum_tests(unittest.TestCase):
    def setUp(self):
        self.arr1 = [3, 4, 5, 6, 7]
        self.arr2 = [3, 4, 5, 4, 4]
        self.result1 = [[3, 7], [4, 6]]
        self.result2 = [[3, 5], [4, 4], [4, 4], [4, 4]]

    def test_one(self):
        self.assertEqual(array_pair_sum_iterative(self.arr1, 10), self.result1)
        self.assertEqual(array_pair_sum_sort(self.arr1, 10), self.result1)
        self.assertEqual(array_pair_sum_hash_table(self.arr1, 10), self.result1)

    def test_two(self):
        self.assertEqual(array_pair_sum_iterative(self.arr2, 8), self.result2)
        self.assertEqual(array_pair_sum_sort(self.arr2, 8), self.result2)
        self.assertEqual(array_pair_sum_hash_table(self.arr2, 8), self.result2)


if __name__ == "__main__":
    unittest.main()

# Use a dictionary to map sets of brackets to their opposites
brackets = {"(": ")", "{": "}", "[": "]"}

# On each input string, process it using the balance checker
def balancedBrackets(string):
    stack = []
    # Process every character on input
    for char in string:
        # Assign an initial value in case the stack is empty
        last = 0
        # Assign the value of the last element if stack is not empty
        if stack:
            last = stack[len(stack) - 1]
        if stack and last in brackets and brackets[last] == char:
            stack.pop()
        else:
            stack.append(char)

    return not stack

def balance(arr):
    open_bracket = ["[", "{", "("]
    close_bracket = ["]", "}", ")"]
    stack = []
    for i in arr:
        if i in open_bracket:
            stack.append(i)
        elif i in close_bracket:
            pos = close_bracket.index(i)
            if len(stack) >= 0 and (open_bracket[pos] == stack[len(stack) - 1]):
                stack.pop()
            else:
                return "unbalanced"
    if len(stack) == 0:
        return "balanced"
    else:
        return "unbalanced"


arr = ["{", "[", "]", "}"]
print(balance(arr))

arr = [1, 2, 3, 4, 5, 6]
x = 5

print("iterative approach to find element using")


def binary_search_iterative(arr, l, r, x):
    while l <= r:
        mid = l + (r - l) // 2
        if arr[mid] == x:
            return mid
        elif arr[mid] < x:
            l = mid + 1
        else:
            l = r - 1
    return -1


result_iterative = binary_search_iterative(arr, 0, len(arr) - 1, x)
if result_iterative != -1:
    print("element found: " + str(result_iterative))
else:
    print("not found")


print("#########################################")
print("recursive approach to find element using")


def binary_search_recursive(arr, l, r, x):
    if l <= r:
        mid = l + (r - l) // 2
        if arr[mid] == x:
            return mid
        elif arr[mid] < x:
            return binary_search_recursive(arr, mid + 1, r, x)
        else:
            return binary_search_recursive(arr, l, mid - 1, x)
    else:
        return -1


result_recursive = binary_search_recursive(arr, 0, len(arr) - 1, x)

if result_iterative != -1:
    print("element found: " + str(result_recursive))
else:
    print("not found")

# sample input : 4
#                 -1,0,3,57,89,9
# output        : -1,0,3,9,57,89


def bubble_sort(arr, n):
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr


arr = [64, 34, 25, 12, 22, 11, 90]

result = bubble_sort(arr, len(arr))

print(result)

def orangesRotting(elemnts):
    if not elemnts or len(elemnts) == 0:
        return 0
    n = len(elemnts)
    m = len(elemnts[0])
    rotten = []
    for i in range(n):
        for j in range(m):
            if elemnts[i][j] == 2:
                rotten.append((i, j))
    mins = 0

    def dfs(rotten):
        count = []
        for i, j in rotten:
            if i > 0 and rotten[i - 1][j] == 1:
                count.append((i - 1, j))
                elemnts[i - 1][j] = 2

            if j > 0 and rotten[i][j - 1] == 1:
                count.append((i, j - 1))
                elemnts[i][j - 1] = 2

            if i < n - 1 and rotten[i][j] == 1:
                count.append((i, j))
                elemnts[i][j] = 2

            if j < m - 1 and rotten[i][j] == 1:
                count.append((i, j))
                elemnts[i][j] = 2

        return count

    while rotten:
        rotten = dfs(rotten)
        if not rotten:
            break
        mins += 1

    for i in range(n):
        for j in range(m):
            if elemnts[i][j] == 1:
                return -1

    return mins

"""solution to the convert array problem"""


def f(arr):
    """sorts the array by numbers in place using constant extra space"""

    position = 0
    for i in xrange(len(arr) / 3):
        gap = (len(arr) - position) / 3
        arr.insert(position + 1, arr.pop(position + gap * 1))
        arr.insert(position + 2, arr.pop(position + gap * 2))
        position += 3

    return arr

#!/bin/python3
import sys

#
# Complete the 'countingValleys' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER steps
#  2. STRING path
#


def countingValleys(steps, path):
    # Write your code here
    path = list(path)
    sealevel = valley = 0
    for paths in path:

        if paths == "U":
            sealevel += 1
        else:
            sealevel -= 1

        if paths == "U" and sealevel == 0:
            valley += 1
    return valley


path = "UDDDUDUU"
steps = 8
print(countingValleys(steps, path))

# Input:
# S = "geeksforgeeks", N = 2
# Output: 4
# Explanation: 'g', 'e', 'k' and 's' have
# 2 occurrences.


def CountChar(String, Occurance):
    STROCR = {}
    RESULT = []
    for i in range(len(String)):
        if String[i] in STROCR.keys():
            STROCR[String[i]] += 1
        else:
            STROCR[String[i]] = 1
    for j in STROCR.keys():
        if STROCR[j] == Occurance:
            RESULT.append(j)
        elif STROCR[j] > Occurance:
            RESULT.append(j)
        else:
            pass
    print(RESULT)


String = "geeksforgeeks"
Occurance = 2
CountChar(String, Occurance)

def cyclic_rotation(arr, n):
    temp = arr[n - 1]
    for i in range(n - 1, 0, -1):
        arr[i] = arr[i - 1]
    arr[0] = temp


def print_array(arr, n):
    for i in range(n):
        print(arr[i])


arr = [1, 2, 3, 4, 5]

cyclic_rotation(arr, 5)

print_array(arr, 5)

# Input: nums = [131, 11, 48]
# Output: 1 3 4 8
# Explanation: 1, 3, 4, and 8 are only distinct
# digits that can be extracted from the numbers
# of the array.


def Dis_array(arr):
    dup = []
    for i in arr:
        length = len(str(i))
        i = str(i)
        for j in range(length):
            if i[j] in dup:
                pass
            else:
                dup.append(i[j])

    print(dup)


arr = [131, 11, 48]
Dis_array(arr)

class Stack:
    def __init__(self, limit=10):
        self.stack = []
        self.limit = limit

    def push(self, n):
        if len(self.stack) > self.limit:
            self.doublelimit()
        else:
            self.stack.append(n)

    def pop(self):
        if len(self.stack) > 0:
            self.stack.pop()

    def is_empty(self):
        if len(self.stack) == 0:
            return True
        else:
            return False

    def PrintStack(self):
        for i in self.stack:
            print(i)

    def Length(self):
        n = len(self.stack)
        print(n)

    # logic for douling the stack
    def doublelimit(self):
        newStack = self.stack
        self.limit = 2 * self.limit
        self.stack = newStack


sta = Stack(5)


sta.push(1)
sta.push(2)
sta.push(1)
sta.push(2)
sta.push(2)
sta.push(2)


sta.PrintStack()


sta.Length()

def duplicate_removal(arr):
    dictonary = {}
    for i in arr:
        if i in dictonary:
            dictonary[i] = dictonary[i] + 1
        else:
            dictonary[i] = 1
    return dictonary.keys()


arr = [1, 2, 2, 3, 4, 5, 5, 6, 7]

print(int(len(list(duplicate_removal(arr)))))

def even_occuring_element(arr):
    """Returns the even occuring element within a list of integers"""

    dict = {}
    for num in arr:
        if num in dict:
            dict[num] += 1
        else:
            dict[num] = 1

    for num in dict:
        if not dict[num] & 1:  # bitwise check for parity.
            return num

def find(arr, search, n):
    for i in range(n):
        if arr[i] == search:
            return True
            break


arr = [1, 2, 3, 4, 5, 6]
search = 4

print(find(arr, search, 6))

import tarfile

fname = "spark-3.0.2-bin-hadoop2.7.tgz"

if fname.endswith("tgz"):
    tar = tarfile.open(
        "C:\\Users\\ag16000\Downloads\\spark-3.0.2-bin-hadoop2.7.tgz", "r:gz"
    )
    tar.extractall()
    tar.close()
elif fname.endswith("tar"):
    tar = tarfile.open(
        "C:\\Users\\ag16000\Downloads\\spark-3.0.2-bin-hadoop2.7.tgz", "r:"
    )
    tar.extractall()
    tar.close()

"""solutions to the factorial problem"""


def factorial_iterative(num):
    """returns the factorial of num using an iterative method."""

    factor = 1

    for i in xrange(1, num + 1):
        factor *= i

    return factor


def factorial_reduce(num):
    """returns the factorial of num using a reduce (shortest method)."""

    return reduce(lambda x, y: x * y, range(1, num + 1))


def factorial_recursive(num):
    """returns the factorial of num using a recursive method."""

    if num == 1:
        return 1

    return num * factorial_recursive(num - 1)

"""solutions to the fibonacci problem"""


def fibonacci_iterative(limit):
    """fibonacci sequence using an iterative approach."""

    a, b = 0, 1
    for i in xrange(limit):
        a, b = b, a + b

    return a


def fibonacci_recursive(limit):
    """fibonacci sequence using a recusive approach."""

    if limit <= 1:
        return limit

    return fibonacci_recursive(limit - 1) + fibonacci_recursive(limit - 2)


def fibonacci_reduce(limit):
    """fibonacci sequence using reduce (shortest option)."""

    return reduce(lambda x, y: x + [x[y] + x[y - 1]], range(1, limit), [0, 1])[-1]


def fibonacci_comprehension(limit):
    """fibonacci sequence using a list comprehension."""

    sequence = [0, 1]

    [sequence.append(sequence[i] + sequence[i - 1]) for i in range(1, limit)]

    return sequence[-1]

def fib_series(count):
    a = 0
    b = 1
    c = 1
    for i in range(count):
        a = b
        b = c
        c = a + b
        print(a)


fib_series(10)

"""finds the missing element in the shuffled list"""


def difference_set(orig, shuffled):
    """finds the missing element using a set."""

    return set(orig).difference(set(shuffled)).pop()


def difference_iterative(orig, shuffled):
    """finds the missing element by iterating over the list"""

    for x in orig:
        if not x in shuffled:
            return x

# Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

# There is only one repeated number in nums, return this repeated number.

# Example 1:

# Input: nums = [1,3,4,2,2]
# Output: 2


def findDuplicate(arr):
    for i in range(len(arr)):
        if arr[i] == arr[i + 1]:
            return arr[i]
        else:
            pass


arr = [1, 3, 4, 2, 2]

print(findDuplicate(arr))

"""solution for the first-non-repeated-character problem"""


def first_non_repeated_character(str):
    """finds the first character in a string that's not repreated"""

    for i, char in enumerate(str):
        if i - 1 >= 0 and char == str[i - 1]:
            continue
        if i + 1 < len(str) and char == str[i + 1]:
            continue

        return char

def left_search(arr, low, high, x):
    temp = -1

    while low <= high:
        mid = low + (high - low) // 2
        if arr[mid] > x:
            high = mid - 1
        elif arr[mid] < x:
            low = mid + 1
        else:
            temp = mid
            high = mid - 1
    return temp


def right_search(arr, low, high, x):
    temp = -1

    while low <= high:
        mid = low + (high - low) // 2
        if arr[mid] > x:
            high = mid - 1
        elif arr[mid] < x:
            low = mid + 1
        else:
            temp = mid
            low = mid + 1
    return temp


arr = [1, 4, 4, 4, 5, 6, 7]
l_result = left_search(arr, 0, len(arr), 4)
r_result = right_search(arr, 0, len(arr), 4)

print("first occurance:" + str(l_result))
print("last occurance: " + str(r_result))

"""accepts a multi dimensional array and returns a flattened version"""


def flatten_array(orig):
    """returns a new, flattened, list"""

    flattened_list = []

    for item in orig:
        if isinstance(item, list):
            flattened_list += flatten_array(item)
        else:
            flattened_list.append(item)

    return flattened_list


def flatten_in_place(orig):
    """flattens a given list in place"""

    is_flattened = False

    while not is_flattened:  # iterating until no more lists are found

        is_flattened = True
        for i, item in enumerate(orig):

            if isinstance(item, list):
                is_flattened = False
                orig = orig[:i] + item + orig[i + 1 :]

    return orig

def jumpingOnClouds(c):
    i = counter = 0
    length = len(c)

    while i < length - 1:
        if c[i + 2] == 0:
            i += 2
        else:
            i += 1
        counter += 1
    return counter


arr = [0, 0, 0, 0, 1, 0]

print(jumpingOnClouds(arr))

def kidsWithCandies(candies, extraCandies):
    temp_array = []
    max_element = max(candies)
    for i in candies:
        temp = i + extraCandies
        if max_element <= temp:
            temp_array.append(True)
        else:
            temp_array.append(False)

    return temp_array


candies = [2, 3, 5, 1, 3]
extraCandies = 3

print(kidsWithCandies(candies, extraCandies))

def kth_array(arr, n):
    arr.sort(reverse=True)

    for i in range(n):
        print(arr[i])


arr = [1, 23, 12, 9, 30, 2, 50]

kth_array(arr, 3)

# Input:
# N = 6
# arr[] = 7 10 4 3 20 15
# K = 3
# Output : 7
# Explanation :
# 3rd smallest element in the given
# array is 7.

# def kthSmallest(arr, l, r, k):
#     '''
#     arr : given array
#     l : starting index of the array i.e 0
#     r : ending index of the array i.e size-1
#     k : find kth smallest element and return using this function
#     '''
#     arr.sort()
#     return(arr[k-1])

# r=int(input())
# arr=input()
# array=list(map(int,arr.strip().split()))
# k=int(input())
# print(kthSmallest(array,0,r-1,k))


def kthSmallest(arr, l, r, k):

    if k > 0 and k <= r - l + 1:

        pos = randomPartition(arr, l, r)
        if pos - l == k - 1:
            return arr[pos]
        if pos - l > k - 1:

            return kthSmallest(arr, l, pos - 1, k)

        return kthSmallest(arr, pos + 1, r, k - pos + l - 1)

    return 999999999999


def swap(arr, a, b):
    temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp


def partition(arr, l, r):
    x = arr[r]
    i = l
    for j in range(l, r):
        if arr[j] <= x:
            swap(arr, i, j)
            i += 1
    swap(arr, i, r)
    return i


def randomPartition(arr, l, r):
    n = r - l + 1
    pivot = int(random.random() % n)
    swap(arr, l + pivot, r)
    return partition(arr, l, r)

"""solution to the largest-continuous-sum problem"""


def largest_continuous_sum(arr):
    """returns the highest sum of a continuous sequence in a given list"""

    largest = 0
    queue = []
    for num in arr:
        if len(queue) > 0 and queue[-1] + 1 != num:
            sum = reduce(lambda x, y: x + y, queue)
            if largest < sum:
                largest = sum
            queue = []

        queue.append(num)

    return largest

def addTwoNumbers(l1, l2):
    l1.reverse()
    l2.reverse()
    con_1 = ""
    con_2 = ""
    for i in l1:
        con_1 += str(i)
    for i in l2:
        con_2 += str(i)

    result = int(con_1) + int(con_2)

    temp = str(result)

    lis = []
    for i in temp:
        lis.append(i)

    lis.reverse()
    return lis


l1 = [2, 4, 3]
l2 = [5, 6, 4]
result = addTwoNumbers(l1, l2)
print(result)

# linked list creation
# singly linked list


class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    def PrintList(self):
        if self.head is not None:
            itr = self.head
            while itr:
                print(itr.data, end="-->")
                itr = itr.next


if __name__ == "__main__":
    # creating empty linked list
    l = LinkedList()
    # assigning the first node to head of linked list
    l.head = Node(1)
    # assigining the second node
    l2 = Node(2)
    # assigining the third node
    l3 = Node(3)

    # linking the first node to the second
    l.head.next = l2
    # linking the second node to the third
    l2.next = l3

    # printing the list
    l.PrintList()

from __future__ import division
from math import ceil
from itertools import combinations
from operator import mul

# Sum of multiples of 3 or 5 under 1000, simplified:
# print (3 * 333 * 334 / 2) + (5 * 199 * 200 / 2) - (15 * 66 * 67 / 2)


def getSumOfMultiple(num, limit):
    return int((ceil(limit / num) - 1) * ceil(limit / num) * num / 2)


def getSumOfMultiples(multiples, limit):
    result = 0
    sign = 1
    for i in range(1, len(multiples) + 1):
        for x in combinations(multiples, i):
            result += sign * getSumOfMultiple(reduce(mul, x, 1), limit)
        sign *= -1
    return result

class once:
    def __init__(self, func, times=1):
        self.times = int(times)
        self.func = func

    def __call__(self, *args, **kwargs):
        if self.times > 0:
            self.times -= 1
            return self.func(*args, **kwargs)

from math import sqrt


def is_prime(n):
    if n <= 1:
        return False
    elif n == 2:
        return True
    elif n % 2 == 0:
        return False
    for i in xrange(3, int(sqrt(n)) + 1, 2):
        if n % i == 0:
            return False
    return True

from random import randint


def quickSort(lst):
    # List of 0 or 1 items is already sorted
    if len(lst) <= 1:
        return lst
    else:
        # Pivot can be chosen randomly
        pivotIndex = randint(0, len(lst) - 1)
        pivot = lst[pivotIndex]
        # Elements lower than and greater than pivot
        lesser, greater = [], []

        for index in range(len(lst)):
            # Don't do anything if you're at the pivot
            if index == pivotIndex:
                pass
            else:
                # Sort elements into < pivot and >= pivot
                el = lst[index]
                if el < pivot:
                    lesser.append(el)
                else:
                    greater.append(el)

        # Sort lesser and greater, concatenate results
        return quickSort(lesser) + [pivot] + quickSort(greater)

def sort_num(arr, n):
    cnt0 = 0
    cnt1 = 0
    cnt2 = 0
    for i in range(n):
        if arr[i] == 0:
            cnt0 += 1
        elif arr[i] == 1:
            cnt1 += 1
        elif arr[i] == 2:
            cnt2 += 1

    i = 0

    while cnt0 > 0:
        arr[i] = 0
        i += 1
        cnt0 -= 1
    while cnt1 > 0:
        arr[i] = 1
        i += 1
        cnt1 -= 1
    while cnt2 > 0:
        arr[i] = 2
        i += 1
        cnt2 -= 1


def print_arr(arr, n):
    for i in range(n):
        print(arr[i], end=" ")


arr = [0, 1, 2, 0, 1, 2]
n = len(arr)
sort_num(arr, n)
print_arr(arr, n)

def sorted_rotation(arr, low, high, n):
    while low < high:
        if arr[low] <= arr[high]:
            return low
        mid = low + (high - low) // 2
        next = (mid + 1) % n
        prev = (mid + n - 1) % n
        if arr[mid] < arr[next] and arr[mid] < arr[prev]:
            return mid
        elif arr[mid] <= arr[high]:
            high = mid - 1
        elif arr[mid] >= arr[low]:
            low = mid + 1
    return -1


arr = [6, 7, 8, 9, 1, 2, 3, 4, 5]

result = sorted_rotation(arr, 0, len(arr) - 1, len(arr))

print("array is rotated by : " + result)

def sprialMatrix(arr, m, n):
    k = 0
    l = 0
    while k < m and l < n:

        for i in range(l, n):
            print(arr[k][i], end=" ")
        k += 1

        for i in range(k, m):
            print(arr[i][n - 1], end=" ")
        n -= 1

        if k < m:
            for i in range(n - 1, l - 1, -1):
                print(arr[m - 1][i], end=" ")
            m -= 1
        if l < n:
            for i in range(m - 1, k - 1, -1):
                print(arr[i][l], end=" ")
            l += 1


# function calling
sprialMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 3, 3)

import sys


class Stack:
    # initialize the constructor of empty array
    def __init__(self, arr, limit):
        self.arr = arr
        self.arr = []
        self.limit = limit

    # defining an method to get all the elements in the que
    def print_elements(self):
        for i in range(len(self.arr)):
            print(self.arr[i])

    # defining an method to append elements in a stack
    def push(self, i):
        # limiting the stack size
        if len(self.arr) <= self.limit - 1:
            self.arr.append(i)
        else:
            # limit of stack exceeds stack overflow
            print("elements are : ")
            for i in range(len(self.arr)):
                print(self.arr[i])
            print("stack overflow occurred")
            sys.exit()

    # defining an method to pop an element from the array
    def pop(self):
        self.arr.pop()

    # defining an method to check if the stack is empty
    def is_empty(self):
        n = len(self.arr)
        if n == 0:
            print("array is empty")
        else:
            print("array is not empty")

    # defining an method to get the top element
    def top(self):
        n = len(self.arr)
        return self.arr[n]


# initialize the object
sta = Stack([], 4)

# pushing an element to the array
sta.push(1)
sta.push(2)
sta.push(1)
sta.push(2)
sta.push(2)
sta.push(2)
# printing all the elements in the stack
sta.print_elements()
# popping the element from the array
sta.pop()

# printing all the elements in the stack
sta.print_elements()

# popping an element from the array
sta.pop()

# checking if the array is empty or not
sta.is_empty()

class Stack:
    # initialize the constructor of empty array
    def __init__(self, arr, limit):
        self.arr = arr
        self.arr = []
        self.limit = limit
        self.max_array = []

    # defining an method to get all the elements in the que
    def print_elements(self):
        for i in range(len(self.arr)):
            print(self.arr[i])

    # defining an method to append elements in a stack
    def push(self, i):
        # limiting the stack size
        if len(self.arr) <= self.limit - 1:
            self.arr.append(i)

    def maxPush(self):

        # if len(self.arr) <= self.limit - 1:
        if len(self.arr) == 1:
            self.max_array.append(self.arr[len(self.arr) - 1])
        elif self.arr[len(self.arr) - 1] < self.max_array[len(self.max_array) - 1]:
            self.max_array.append(self.max_array[len(self.max_array) - 1])
        else:
            self.max_array.append(self.arr[len(self.arr) - 1])

        print("max value is : " + str(self.max_array[len(self.max_array) - 1]))

    # defining an method to pop an element from the array
    def pop(self):
        self.arr.pop()
        max_array.pop()

    # defining an method to get the top element
    def top(self):
        n = len(self.arr)
        return self.arr[n]


# initialize the object
sta = Stack([], 6)


# pushing an element to the array
sta.push(10)
sta.maxPush()
print("-------------------")
sta.push(2)
sta.maxPush()
print("-------------------")
sta.push(3)
sta.maxPush()
print("-------------------")
sta.push(4)
sta.maxPush()
print("-------------------")
sta.push(5)
sta.maxPush()
print("-------------------")
sta.push(6)
sta.maxPush()
print("-------------------")
# printing all the elements in the stack
# sta.print_elements()
# popping the element from the array
# sta.pop()

class Solution:
    def strongPasswordChecker(self, s: str) -> int:
        len_passwd = len(s)
        lowercase, uppercase, digit = False, False, False
        repeating = []  # list of interval of consecutive char.
        for idx, char in enumerate(s):
            if not lowercase and 97 <= ord(char) <= 122:
                lowercase = True
            if not uppercase and 65 <= ord(char) <= 90:
                uppercase = True
            if not digit and char in {"1", "2", "3", "4", "5", "6", "7", "8", "9", "0"}:
                digit = True
            if (
                repeating
                and repeating[-1][1] + 1 == idx
                and s[repeating[-1][1]] == s[idx]
            ):
                repeating[-1][1] = idx  # extend the lastest interval
            if (
                0 < idx < len_passwd - 1
                and s[idx - 1] == s[idx] == s[idx + 1]
                and (not repeating or idx > repeating[-1][1])
            ):
                repeating.append([idx - 1, idx + 1])  # new an interval

        def helper(lenpass, case, repeat):
            if 6 <= lenpass <= 20 and case == 3 and repeat == ():
                return 0
            ans = inf

            if lenpass < 6:
                # Insertion
                if repeat:
                    add_repeat = [repeat[0] - 2] if repeat[0] > 4 else []
                    ans = min(
                        ans,
                        helper(
                            lenpass + 1,
                            min(case + 1, 3),
                            tuple(list(repeat[1:]) + add_repeat),
                        ),
                    )
                else:
                    ans = helper(lenpass + 1, min(case + 1, 3), ())
            elif lenpass > 20:
                # Deletion
                if repeat:
                    for i in range(len(repeat)):
                        repeat_del = list(repeat)
                        if repeat_del[i] > 3:
                            repeat_del[i] -= 1
                        else:
                            del repeat_del[i]
                        ans = min(ans, helper(lenpass - 1, case, tuple(repeat_del)))
                else:
                    ans = helper(lenpass - 1, case, ())
            else:
                # Replace
                if repeat:
                    add_repeat = [repeat[0] - 3] if repeat[0] > 5 else []
                    ans = min(
                        ans,
                        helper(
                            lenpass,
                            min(case + 1, 3),
                            tuple(list(repeat[1:]) + add_repeat),
                        ),
                    )
                else:
                    ans = helper(lenpass, min(case + 1, 3), ())
            return 1 + ans

        return helper(
            len_passwd,
            sum([lowercase, uppercase, digit]),
            tuple([term[1] - term[0] + 1 for term in repeating]),
        )


Sol = Solution()
print(Sol.strongPasswordChecker("a"))

# Recursive Python3 program to find if a given pattern is
# present in a text


def exactMatch(text, pat, text_index, pat_index):
    if text_index == len(text) and pat_index != len(pat):
        return 0

    # Else If last character of pattern reaches
    if pat_index == len(pat):
        return 1

    if text[text_index] == pat[pat_index]:
        return exactMatch(text, pat, text_index + 1, pat_index + 1)

    return 0


# This function returns true if 'text' contain 'pat'
def contains(text, pat, text_index, pat_index):
    # If last character of text reaches
    if text_index == len(text):
        return 0

    # If current characters of pat and text match
    if text[text_index] == pat[pat_index]:
        if exactMatch(text, pat, text_index, pat_index):
            return 1
        else:
            return contains(text, pat, text_index + 1, pat_index)

        # If current characters of pat and tex don't match
    return contains(text, pat, text_index + 1, pat_index)


# Driver program to test the above function

print(contains("geeksforgeeks", "geeks", 0, 0))
print(contains("geeksforgeeks", "geeksquiz", 0, 0))
print(contains("geeksquizgeeks", "quiz", 0, 0))

# def twoSum(arr,n,target):
#     for i in range(n):
#         for j in range(1,n):
#             result=arr[i]+arr[j]
#             if result==target:
#                 print("["+str(i)+","+str(j)+"]")


# arr=[2,7,11,15]

# twoSum(arr,len(arr),9)


class Solution:
    # def __init__(self,arr,n,target):
    #     self.arr=arr
    #     self.n=n
    #     self.target=target
    def twoSum(self, arr, n, target):
        for i in range(self.n):
            for j in range(1, self.n):
                result = self.arr[i] + self.arr[j]
                if result == self.target:
                    print("[" + str(i) + "," + str(j) + "]")


temp = Solution([2, 7, 11, 15], len([2, 7, 11, 15]), 9)

temp.twoSum()

import psutil
import json


def getListOfProcessSortedByMemory():
    listOfProcObjects = []

    for proc in psutil.process_iter():
        pinfo = proc.as_dict(attrs=["pid", "name"])
        pinfo["CPU_USAGE"] = proc.memory_info().vms / (1024 * 1024)
        # Append dict to list
        listOfProcObjects.append(pinfo)

    listOfProcObjects = sorted(
        listOfProcObjects, key=lambda procObj: procObj["CPU_USAGE"], reverse=True
    )
    result = json.dumps(listOfProcObjects)
    lis = result.split("}")
    lst = [e[3:] for e in lis]
    start_text = """
    <html>
        <body>"""
    end_text = """
        </body>
    </html>
    """
    f = open("dump.html", "w+")
    f.write(start_text)
    for elem in lst:
        print(elem + str(" MB"))
        f.write("<p>" + str(elem) + " MB" + "</p>")
    f.write(end_text)
    f.close()


def main():

    print("##### Create a list of all running processes #######")
    getListOfProcessSortedByMemory()


if __name__ == "__main__":
    main()

# class human():
#     def __init__(self,name,age):
#         self.name=name
#         self.age=age


# class rohan(human):
#     def __init__(self, name, age,year):
#         super().__init__(name,age)
#         self.year=year

#     def welcome(self):
#         print("hello "+str(self.name) + " "+str(self.age)+" " + str(self.year))



# ron=rohan("rohan",22,2019)
# ron.welcome()


# class incr():
#     def itr(self):
#         self.a=1

    
#     def next(self):
#         if self.a <=5:
#             print(self.a)
#             self.a+=1
#         else:
#             raise StopIteration

# zip=incr()
# zip.itr()
# zip.next()
# zip.next()
# zip.next()
# zip.next()
# zip.next()
theBoard = [' '] * 10

print(theBoard)



((bo[7] == le and bo[8] == le and bo[9] == le) or # across the top
    (bo[4] == le and bo[5] == le and bo[6] == le) or # across the middle
    (bo[1] == le and bo[2] == le and bo[3] == le) or # across the bottom
    (bo[7] == le and bo[4] == le and bo[1] == le) or # down the left side
    (bo[8] == le and bo[5] == le and bo[2] == le) or # down the middle
    (bo[9] == le and bo[6] == le and bo[3] == le) or # down the right side
    (bo[7] == le and bo[5] == le and bo[3] == le) or # diagonal
    (bo[9] == le and bo[5] == le and bo[1] == le)) 


    print('   |   |')
    print(' ' + board[7] + ' | ' + board[8] + ' | ' + board[9])
    print('   |   |')
    print('-----------')
    print('   |   |')
    print(' ' + board[4] + ' | ' + board[5] + ' | ' + board[6])
    print('   |   |')
    print('-----------')
    print('   |   |')
    print(' ' + board[1] + ' | ' + board[2] + ' | ' + board[3])
    print('   |   |')    
import random


def drawBoard(board):

    # This function prints out the board that it was passed.
    # "board" is a list of 10 strings representing the board (ignore index 0)
    print("   |   |")
    print(" " + board[7] + " | " + board[8] + " | " + board[9])
    print("   |   |")
    print("-----------")
    print("   |   |")
    print(" " + board[4] + " | " + board[5] + " | " + board[6])
    print("   |   |")
    print("-----------")
    print("   |   |")
    print(" " + board[1] + " | " + board[2] + " | " + board[3])
    print("   |   |")


def inputPlayerLetter():
    # Lets the player type which letter they want to be.
    # Returns a list with the player’s letter as the first item, and the computer's letter as the second.
    letter = ""
    while not (letter == "X" or letter == "O"):
        print("Do you want to be X or O?")
        letter = input().upper()
    # the first element in the list is the player’s letter, the second is the computer's letter.
    if letter == "X":
        return ["X", "O"]
    else:
        return ["O", "X"]


def whoGoesFirst():
    # Randomly choose the player who goes first.
    if random.randint(0, 1) == 0:
        return "computer"
    else:
        return "player"


def playAgain():
    # This function returns True if the player wants to play again, otherwise it returns False.
    print("Do you want to play again? (yes or no)")
    return input().lower().startswith("y")


def makeMove(board, letter, move):
    board[move] = letter


def isWinner(bo, le):
    # Given a board and a player’s letter, this function returns True if that player has won.
    # We use bo instead of board and le instead of letter so we don’t have to type as much.
    return (
        (bo[7] == le and bo[8] == le and bo[9] == le)
        or (bo[4] == le and bo[5] == le and bo[6] == le)  # across the top
        or (bo[1] == le and bo[2] == le and bo[3] == le)  # across the middle
        or (bo[7] == le and bo[4] == le and bo[1] == le)  # across the bottom
        or (bo[8] == le and bo[5] == le and bo[2] == le)  # down the left side
        or (bo[9] == le and bo[6] == le and bo[3] == le)  # down the middle
        or (bo[7] == le and bo[5] == le and bo[3] == le)  # down the right side
        or (bo[9] == le and bo[5] == le and bo[1] == le)  # diagonal
    )  # diagonal


def getBoardCopy(board):
    # Make a duplicate of the board list and return it the duplicate.
    dupeBoard = []
    for i in board:
        dupeBoard.append(i)

    return dupeBoard


def isSpaceFree(board, move):
    # Return true if the passed move is free on the passed board.
    return board[move] == " "


def getPlayerMove(board):
    # Let the player type in their move.
    move = " "
    while move not in "1 2 3 4 5 6 7 8 9".split() or not isSpaceFree(board, int(move)):
        print("What is your next move? (1-9)")
        move = input()
    return int(move)


def chooseRandomMoveFromList(board, movesList):
    # Returns a valid move from the passed list on the passed board.
    # Returns None if there is no valid move.
    possibleMoves = []
    for i in movesList:
        if isSpaceFree(board, i):
            possibleMoves.append(i)
    if len(possibleMoves) != 0:
        return random.choice(possibleMoves)
    else:
        return None


def getComputerMove(board, computerLetter):
    # Given a board and the computer's letter, determine where to move and return that move.
    if computerLetter == "X":
        playerLetter = "O"
    else:
        playerLetter = "X"
    # Here is our algorithm for our Tic Tac Toe AI:
    # First, check if we can win in the next move
    for i in range(1, 10):
        copy = getBoardCopy(board)
        if isSpaceFree(copy, i):
            makeMove(copy, computerLetter, i)
            if isWinner(copy, computerLetter):
                return i

    # Check if the player could win on their next move, and block them.
    for i in range(1, 10):
        copy = getBoardCopy(board)
        if isSpaceFree(copy, i):
            makeMove(copy, playerLetter, i)
            if isWinner(copy, playerLetter):
                return i

    # Try to take one of the corners, if they are free.
    move = chooseRandomMoveFromList(board, [1, 3, 7, 9])
    if move != None:
        return move
    # Try to take the center, if it is free.
    if isSpaceFree(board, 5):
        return 5
    # Move on one of the sides.
    return chooseRandomMoveFromList(board, [2, 4, 6, 8])


def isBoardFull(board):
    # Return True if every space on the board has been taken. Otherwise return False.
    for i in range(1, 10):
        if isSpaceFree(board, i):
            return False
    return True


print("Welcome to Tic Tac Toe!")

while True:
    # Reset the board
    theBoard = [" "] * 10
    playerLetter, computerLetter = inputPlayerLetter()
    turn = whoGoesFirst()
    print("The " + turn + " will go first.")
    gameIsPlaying = True

    while gameIsPlaying:
        if turn == "player":
            # Player’s turn.
            drawBoard(theBoard)
            move = getPlayerMove(theBoard)
            makeMove(theBoard, playerLetter, move)
            if isWinner(theBoard, playerLetter):
                drawBoard(theBoard)
                print("Hooray! You have won the game!")
                gameIsPlaying = False
            else:
                if isBoardFull(theBoard):
                    drawBoard(theBoard)
                    print("The game is a tie!")
                    break
                else:
                    turn = "computer"
        else:

            # Computer’s turn.
            move = getComputerMove(theBoard, computerLetter)
            makeMove(theBoard, computerLetter, move)
            if isWinner(theBoard, computerLetter):
                drawBoard(theBoard)
                print("The computer has beaten you! You lose.")
                gameIsPlaying = False
            else:
                if isBoardFull(theBoard):
                    drawBoard(theBoard)
                    print("The game is a tie!")
                    break
                else:
                    turn = "player"

    if not playAgain():
        break

# Recursive Python function to solve the tower of hanoi


def TowerOfHanoi(n, source, destination, auxiliary):
    if n == 1:
        print("Move disk 1 from source", source, "to destination", destination)
        return
    TowerOfHanoi(n - 1, source, auxiliary, destination)
    print("Move disk", n, "from source", source, "to destination", destination)
    TowerOfHanoi(n - 1, auxiliary, destination, source)


# Driver code
n = 4
TowerOfHanoi(n, "A", "B", "C")

def LeftMax(array, i):
    left = array[i]
    for j in range(i):
        # left=max(left,array[j])
        if left < array[j]:
            left = array[j]
        else:
            left = left
    return left


def RightMax(array, i):
    right = array[i]
    for j in range(i + 1, len(array)):
        # right=max(right,array[j])
        if right < array[j]:
            right = array[j]
        else:
            right = right
    return right


def TrappingWater(array):
    totalwater = 0
    for i in range(1, len(array) - 1):
        leftMax = LeftMax(array, i)
        rightMax = RightMax(array, i)
        totalwater = totalwater + (min(leftMax, rightMax) - array[i])
    return totalwater


array = [2, 0, 2]

print(TrappingWater(array))

class node:
    def __init__(self, val):
        self.right = None
        self.left = None
        self.val = val


root = node(1)
root.left = node(2)
root.right = node(3)
root.left.right = node(5)
root.left.left = node(4)


def inorder_traversal(root):
    if root:
        inorder_traversal(root.left)
        print(root.val)
        inorder_traversal(root.right)


def preorder_traversal(root):
    if root:
        print(root.val)
        preorder_traversal(root.left)
        preorder_traversal(root.right)


def postorder_traversal(root):
    if root:
        postorder_traversal(root.left)
        postorder_traversal(root.right)
        print(root.val)


print("########################")
print("inorder traversal: L N R ")
inorder_traversal(root)

print("########################")
print("preorder traversal: N L R ")
preorder_traversal(root)

print("########################")
print("postorder traversal: N R L")
postorder_traversal(root)

class Tree:
    def __init__(self, data):
        self.data = data
        self.children = []
        self.parent = None

    def add_child(self, child):
        child.parent = self
        self.children.append(child)

    def print_elements(self):
        print(self.data)
        for i in self.children:
            print("  !-" + i.data)
            for j in i.children:
                print("    !----" + j.data)


root = Tree("electronics")

laptop = Tree("laptop")
laptop.add_child(Tree("mac"))
laptop.add_child(Tree("windows"))

cell = Tree("cell")
cell.add_child(Tree("LG"))
cell.add_child(Tree("apple"))

root.add_child(laptop)
root.add_child(cell)

root.print_elements()

class Node(object):
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def traverse_levelorder(root):
    if not root:
        return
    q = [root, True]  # Use True as sentinel for end of row
    while len(q) > 0:
        node = q.pop(0)
        print node.value,
        if node.left:
            q.append(node.left)
        if node.right:
            q.append(node.right)
        if q[0] is True:  # End of row
            q.pop(0)
            if len(q) > 0:
                q.append(True)
            print

# https://www.geeksforgeeks.org/find-triplets-array-whose-sum-equal-zero/

# o(n^3)

# def Triplet(arr):
#     n = len(arr)
#     found = False
#     for i in range(0, n - 2):
#         for j in range(i + 1, n - 1):
#             for k in range(j + 1, n):
#                 if arr[i] + arr[j] + arr[k] == 0:
#                     print(arr[i], arr[j], arr[k])
#                     found=True
#
#     if not found:
#         print("element not found")
#
#
# arr=[0, -1, 2, -3, 1]
#
# Triplet(arr)

# optimal soultion
# o(n^2)


def Triplet(arr):
    n = len(arr)
    found = True
    for i in range(n - 1):
        l = i + 1
        r = n - 1
        x = arr[i]
        while l < r:
            if arr[l] + arr[r] + x == 0:
                print(arr[l], arr[r], x)
                l += 1
                r -= 1
                found = True
            elif arr[l] + arr[r] + x < 0:
                l += 1
            else:
                r -= 1

    if not found:
        print("triplet not found")


arr = [0, -1, 2, -3, 1]

Triplet(arr)

# Time complexity O(M*N)
# Space Complexity O(M+N)
# Method 1
class Solution:
    # Function to return the count of number of elements in union of two arrays.
    def doUnion(self, a, n, b, m):
        c = a + b
        c.sort()

        d = []
        for i in c:
            if i not in d:
                d.append(i)
            else:
                pass

        return len(d)


if __name__ == "__main__":
    t = int(input())
    for _ in range(t):
        n, m = [int(x) for x in input().strip().split()]

        a = [int(x) for x in input().strip().split()]
        b = [int(x) for x in input().strip().split()]
        ob = Solution()

        print(ob.doUnion(a, n, b, m))


# Time complexity  O(M)+O(N)+O(Mlog(M)+Nlog(N))
# Space Complexity O(n+m)
# Method 2


class Solution:
    # Function to return the count of number of elements in union of two arrays.
    def doUnion(self, a, n, b, m):
        c = a + b
        c.sort()  # O(Mlog(M))+O(Nlog(N))
        sample_dict = {}

        for i in c:  # O(M)+O(N)
            if i in sample_dict.keys():
                sample_dict[i] += 1
            else:
                sample_dict[i] = 1

        return len([int(x) for x in sample_dict.values()])


if __name__ == "__main__":
    t = int(input())
    for _ in range(t):
        n, m = [int(x) for x in input().strip().split()]

        a = [int(x) for x in input().strip().split()]
        b = [int(x) for x in input().strip().split()]
        ob = Solution()

        print(ob.doUnion(a, n, b, m))

def wave(arr, n):
    arr.sort()
    for i in range(0, n - 1, 2):
        arr[i], arr[i + 1] = arr[i + 1], arr[i]


arr = [10, 90, 49, 2, 1, 5, 23]

wave(arr, len(arr))

for i in range(len(arr)):
    print(arr[i], end=" ")

file = open("sample.txt", "r")

d = dict()
for lines in file:
    lines = lines.strip()
    lines = lines.lower()
    words = lines.split(" ")
    for word in words:
        if word in d:
            d[word] = d[word] + 1
        else:
            d[word] = 1

find = str(input("enter the word to count: "))
find = find.lower()
if find in list(d.keys()):
    print(f"{find} : " + str(d.get(find)))
else:
    print("word not present!! ")

def xor(arr, n):

    xor_val = 0
    for i in range(n):
        xor_val = xor_val ^ arr[i]
    return xor_val


arr = [3, 9, 12, 13, 15]
n = len(arr)
print(xor(arr, n))

import pafy

url = "https://www.youtube.com/watch?v=OE7wUUpJw6I&list=PL2_aWCzGMAwLPEZrZIcNEq9ukGWPfLT4A"
video = pafy.new(url)
print(video.title)

stream = pafy.new(url).streams

best = video.getbest()
for i in stream:
    print(i)

print(best.resolution, best.extension)
print(best.url)
best.download(quiet=False)

