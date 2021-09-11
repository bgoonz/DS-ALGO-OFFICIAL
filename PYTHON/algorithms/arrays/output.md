"""
Given a list lst and a number N, create a new list
that contains each number of the list at most N times without reordering.

For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], 
drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, 
which leads to [1,2,3,1,2,3]
"""
import collections


# Time complexity O(n^2)
def delete_nth_naive(array, n):
    ans = []
    for num in array:
        if ans.count(num) < n:
            ans.append(num)
    return ans


# Time Complexity O(n), using hash tables.
def delete_nth(array, n):
    result = []
    counts = collections.defaultdict(int)  # keep track of occurrences

    for i in array:

        if counts[i] < n:
            result.append(i)
            counts[i] += 1

    return result

"""
Implement Flatten Arrays.
Given an array that may contain nested arrays,
produce a single resultant array.
"""
from collections.abc import Iterable


# return list
def flatten(input_arr, output_arr=None):
    if output_arr is None:
        output_arr = []
    for ele in input_arr:
        if not isinstance(ele, str) and isinstance(ele, Iterable):
            flatten(ele, output_arr)  # tail-recursion
        else:
            output_arr.append(ele)  # produce the result
    return output_arr


# returns iterator
def flatten_iter(iterable):
    """
    Takes as input multi dimensional iterable and
    returns generator which produces one dimensional output.
    """
    for element in iterable:
        if not isinstance(element, str) and isinstance(element, Iterable):
            yield from flatten_iter(element)
        else:
            yield element

"""
There is a parking lot with only one empty spot. Given the initial state
of the parking lot and the final state. Each step we are only allowed to
move a car
out of its place and move it into the empty spot.
The goal is to find out the least movement needed to rearrange
the parking lot from the initial state to the final state.

Say the initial state is an array:

[1, 2, 3, 0, 4],
where 1, 2, 3, 4 are different cars, and 0 is the empty spot.

And the final state is

[0, 3, 2, 1, 4].
We can swap 1 with 0 in the initial array to get [0, 2, 3, 1, 4] and so on.
Each step swap with 0 only.

Edit:
Now also prints the sequence of changes in states.
Output of this example :-

initial: [1, 2, 3, 0, 4]
final:   [0, 3, 2, 1, 4]
Steps =  4
Sequence : 
0 2 3 1 4
2 0 3 1 4
2 3 0 1 4
0 3 2 1 4
"""


def garage(initial, final):

    initial = initial[::]  # prevent changes in original 'initial'
    seq = []  # list of each step in sequence
    steps = 0
    while initial != final:
        zero = initial.index(0)
        if zero != final.index(0):  # if zero isn't where it should be,
            car_to_move = final[zero]  # what should be where zero is,
            pos = initial.index(car_to_move)  # and where is it?
            initial[zero], initial[pos] = initial[pos], initial[zero]
        else:
            for i in range(len(initial)):
                if initial[i] != final[i]:
                    initial[zero], initial[i] = initial[i], initial[zero]
                    break
        seq.append(initial[::])
        steps += 1

    return steps, seq
    # e.g.:  4, [{0, 2, 3, 1, 4}, {2, 0, 3, 1, 4},
    #            {2, 3, 0, 1, 4}, {0, 3, 2, 1, 4}]


"""
thus:
1 2 3 0 4 -- zero = 3, true, car_to_move = final[3] = 1,
             pos = initial.index(1) = 0, switched [0], [3]
0 2 3 1 4 -- zero = 0, f, initial[1] != final[1], switched 0,1
2 0 3 1 4 -- zero = 1, t, car_to_move = final[1] = 3,
             pos = initial.index(3) = 2, switched [1], [2]
2 3 0 1 4 -- zero = 2, t, car_to_move = final[2] = 2, 
             pos = initial.index(2) = 0, switched [0], [2]
0 3 2 1 4 -- initial == final
"""

from .delete_nth import *
from .flatten import *
from .garage import *
from .josephus import *
from .longest_non_repeat import *
from .max_ones_index import *
from .merge_intervals import *
from .missing_ranges import *
from .move_zeros import *
from .plus_one import *
from .rotate import *
from .summarize_ranges import *
from .three_sum import *
from .trimmean import *
from .top_1 import *
from .two_sum import *
from .limit import *
from .n_sum import *

"""
There are people sitting in a circular fashion,
print every third member while removing them,
the next counter starts immediately after the member is removed.
Print till all the members are exhausted.

For example:
Input: consider 123456789 members sitting in a circular fashion,
Output: 369485271
"""


def josephus(int_list, skip):
    skip = skip - 1  # list starts with 0 index
    idx = 0
    len_list = len(int_list)
    while len_list > 0:
        idx = (skip + idx) % len_list  # hash index to every 3rd
        yield int_list.pop(idx)
        len_list -= 1

"""
Sometimes you need to limit array result to use. Such as you only need the 
 value over 10 or, you need value under than 100. By use this algorithms, you
 can limit your array to specific value

If array, Min, Max value was given, it returns array that contains values of 
 given array which was larger than Min, and lower than Max. You need to give
 'unlimit' to use only Min or Max.

ex) limit([1,2,3,4,5], None, 3) = [1,2,3]

Complexity = O(n)
"""

# tl:dr -- array slicing by value
def limit(arr, min_lim=None, max_lim=None):
    min_check = lambda val: True if min_lim is None else (min_lim <= val)
    max_check = lambda val: True if max_lim is None else (val <= max_lim)

    return [val for val in arr if min_check(val) and max_check(val)]

"""
Given a string, find the length of the longest substring
without repeating characters.

Examples:
Given "abcabcbb", the answer is "abc", which the length is 3.
Given "bbbbb", the answer is "b", with the length of 1.
Given "pwwkew", the answer is "wke", with the length of 3.
Note that the answer must be a substring,
"pwke" is a subsequence and not a substring.
"""


def longest_non_repeat_v1(string):
    """
    Find the length of the longest substring
    without repeating characters.
    """
    if string is None:
        return 0
    dict = {}
    max_length = 0
    j = 0
    for i in range(len(string)):
        if string[i] in dict:
            j = max(dict[string[i]], j)
        dict[string[i]] = i + 1
        max_length = max(max_length, i - j + 1)
    return max_length


def longest_non_repeat_v2(string):
    """
    Find the length of the longest substring
    without repeating characters.
    Uses alternative algorithm.
    """
    if string is None:
        return 0
    start, max_len = 0, 0
    used_char = {}
    for index, char in enumerate(string):
        if char in used_char and start <= used_char[char]:
            start = used_char[char] + 1
        else:
            max_len = max(max_len, index - start + 1)
        used_char[char] = index
    return max_len


# get functions of above, returning the max_len and substring
def get_longest_non_repeat_v1(string):
    """
    Find the length of the longest substring
    without repeating characters.
    Return max_len and the substring as a tuple
    """
    if string is None:
        return 0, ""
    sub_string = ""
    dict = {}
    max_length = 0
    j = 0
    for i in range(len(string)):
        if string[i] in dict:
            j = max(dict[string[i]], j)
        dict[string[i]] = i + 1
        if i - j + 1 > max_length:
            max_length = i - j + 1
            sub_string = string[j : i + 1]
    return max_length, sub_string


def get_longest_non_repeat_v2(string):
    """
    Find the length of the longest substring
    without repeating characters.
    Uses alternative algorithm.
    Return max_len and the substring as a tuple
    """
    if string is None:
        return 0, ""
    sub_string = ""
    start, max_len = 0, 0
    used_char = {}
    for index, char in enumerate(string):
        if char in used_char and start <= used_char[char]:
            start = used_char[char] + 1
        else:
            if index - start + 1 > max_len:
                max_len = index - start + 1
                sub_string = string[start : index + 1]
        used_char[char] = index
    return max_len, sub_string

"""
Find the index of 0 to be replaced with 1 to get
longest continuous sequence
of 1s in a binary array.
Returns index of 0 to be
replaced with 1 to get longest
continuous sequence of 1s.
If there is no 0 in array, then
it returns -1.

e.g.
let input array = [1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1]
If we replace 0 at index 3 with 1, we get the longest continuous
sequence of 1s in the array.
So the function return => 3
"""


def max_ones_index(arr):

    n = len(arr)
    max_count = 0
    max_index = 0
    prev_zero = -1
    prev_prev_zero = -1

    for curr in range(n):

        # If current element is 0,
        # then calculate the difference
        # between curr and prev_prev_zero
        if arr[curr] == 0:
            if curr - prev_prev_zero > max_count:
                max_count = curr - prev_prev_zero
                max_index = prev_zero

            prev_prev_zero = prev_zero
            prev_zero = curr

    if n - prev_prev_zero > max_count:
        max_index = prev_zero

    return max_index

"""
In mathematics, a (real) interval is a set of real
 numbers with the property that any number that lies
 between two numbers in the set is also included in the set.
"""


class Interval:
    """
    A set of real numbers with methods to determine if other
     numbers are included in the set.
    Includes related methods to merge and print interval sets.
    """

    def __init__(self, start=0, end=0):
        self.start = start
        self.end = end

    def __repr__(self):
        return "Interval ({}, {})".format(self.start, self.end)

    def __iter__(self):
        return iter(range(self.start, self.end))

    def __getitem__(self, index):
        if index < 0:
            return self.end + index
        return self.start + index

    def __len__(self):
        return self.end - self.start

    def __contains__(self, item):
        if self.start >= item >= self.end:
            return True
        return False

    def __eq__(self, other):
        if self.start == other.start and self.end == other.end:
            return True
        return False

    def as_list(self):
        """ Return interval as list. """
        return list(self)

    @staticmethod
    def merge(intervals):
        """ Merge two intervals into one. """
        out = []
        for i in sorted(intervals, key=lambda i: i.start):
            if out and i.start <= out[-1].end:
                out[-1].end = max(out[-1].end, i.end)
            else:
                out += (i,)
        return out

    @staticmethod
    def print_intervals(intervals):
        """ Print out the intervals. """
        res = []
        for i in intervals:
            res.append(repr(i))
        print("".join(res))


def merge_intervals(intervals):
    """ Merge intervals in the form of a list. """
    if intervals is None:
        return None
    intervals.sort(key=lambda i: i[0])
    out = [intervals.pop(0)]
    for i in intervals:
        if out[-1][-1] >= i[0]:
            out[-1][-1] = max(out[-1][-1], i[-1])
        else:
            out.append(i)
    return out

"""
Find missing ranges between low and high in the given array.
Ex) [3, 5] lo=1 hi=10 => answer: [(1, 2), (4, 4), (6, 10)]
"""


def missing_ranges(arr, lo, hi):

    res = []
    start = lo

    for n in arr:

        if n == start:
            start += 1
        elif n > start:
            res.append((start, n - 1))
            start = n + 1

    if start <= hi:  # after done iterating thru array,
        res.append((start, hi))  # append remainder to list

    return res

"""
Write an algorithm that takes an array and moves all of the zeros to the end,
preserving the order of the other elements.
    move_zeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])
    returns => [false, 1, 1, 2, 1, 3, "a", 0, 0]

The time complexity of the below algorithm is O(n).
"""


# False == 0 is True
def move_zeros(array):
    result = []
    zeros = 0

    for i in array:
        if i == 0 and type(i) != bool:  # not using `not i` to avoid `False`, `[]`, etc.
            zeros += 1
        else:
            result.append(i)

    result.extend([0] * zeros)
    return result


print(move_zeros([False, 1, 0, 1, 2, 0, 1, 3, "a"]))

"""
Given an array of n integers, are there elements a, b, .. , n in nums
such that a + b + .. + n = target?

Find all unique n-tuplets in the array which gives the sum of target.

Example:
    basic:
        Given:
            n = 4
            nums = [1, 0, -1, 0, -2, 2]
            target = 0,
        return [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]

    advanced:
        Given:
            n = 2
            nums = [[-3, 0], [-2, 1], [2, 2], [3, 3], [8, 4], [-9, 5]]
            target = -5
            def sum(a, b):
                return [a[0] + b[1], a[1] + b[0]]
            def compare(num, target):
                if num[0] < target:
                    return -1
                elif if num[0] > target:
                    return 1
                else:
                    return 0
        return [[-9, 5], [8, 4]]
(TL:DR) because -9 + 4 = -5
"""


def n_sum(n, nums, target, **kv):
    """
    n: int
    nums: list[object]
    target: object
    sum_closure: function, optional
        Given two elements of nums, return sum of both.
    compare_closure: function, optional
        Given one object of nums and target, return -1, 1, or 0.
    same_closure: function, optional
        Given two object of nums, return bool.
    return: list[list[object]]

    Note:
    1. type of sum_closure's return should be same 
       as type of compare_closure's first param
    """

    def sum_closure_default(a, b):
        return a + b

    def compare_closure_default(num, target):
        """ above, below, or right on? """
        if num < target:
            return -1
        elif num > target:
            return 1
        else:
            return 0

    def same_closure_default(a, b):
        return a == b

    def n_sum(n, nums, target):
        if n == 2:  # want answers with only 2 terms? easy!
            results = two_sum(nums, target)
        else:
            results = []
            prev_num = None
            for index, num in enumerate(nums):
                if prev_num is not None and same_closure(prev_num, num):
                    continue

                prev_num = num
                n_minus1_results = n_sum(  # recursive call
                    n - 1, nums[index + 1 :], target - num  # a  # b  # c
                )  # x = n_sum( a, b, c )  # n_minus1_results = x

                n_minus1_results = append_elem_to_each_list(num, n_minus1_results)
                results += n_minus1_results
        return union(results)

    def two_sum(nums, target):
        nums.sort()
        lt = 0
        rt = len(nums) - 1
        results = []
        while lt < rt:
            sum_ = sum_closure(nums[lt], nums[rt])
            flag = compare_closure(sum_, target)
            if flag == -1:
                lt += 1
            elif flag == 1:
                rt -= 1
            else:
                results.append(sorted([nums[lt], nums[rt]]))
                lt += 1
                rt -= 1
                while lt < len(nums) and same_closure(nums[lt - 1], nums[lt]):
                    lt += 1
                while 0 <= rt and same_closure(nums[rt], nums[rt + 1]):
                    rt -= 1
        return results

    def append_elem_to_each_list(elem, container):
        results = []
        for elems in container:
            elems.append(elem)
            results.append(sorted(elems))
        return results

    def union(duplicate_results):
        results = []

        if len(duplicate_results) != 0:
            duplicate_results.sort()
            results.append(duplicate_results[0])
            for result in duplicate_results[1:]:
                if results[-1] != result:
                    results.append(result)

        return results

    sum_closure = kv.get("sum_closure", sum_closure_default)
    same_closure = kv.get("same_closure", same_closure_default)
    compare_closure = kv.get("compare_closure", compare_closure_default)
    nums.sort()
    return n_sum(n, nums, target)

"""
Given a non-negative number represented as an array of digits,
adding one to each numeral.

The digits are stored big-endian, such that the most significant
digit is at the head of the list.
"""


def plus_one_v1(digits):
    """
    :type digits: List[int]
    :rtype: List[int]
    """
    digits[-1] = digits[-1] + 1
    res = []
    ten = 0
    i = len(digits) - 1
    while i >= 0 or ten == 1:
        summ = 0
        if i >= 0:
            summ += digits[i]
        if ten:
            summ += 1
        res.append(summ % 10)
        ten = summ // 10
        i -= 1
    return res[::-1]


def plus_one_v2(digits):
    n = len(digits)
    for i in range(n - 1, -1, -1):
        if digits[i] < 9:
            digits[i] += 1
            return digits
        digits[i] = 0
    digits.insert(0, 1)
    return digits


def plus_one_v3(num_arr):

    for idx in reversed(list(enumerate(num_arr))):
        num_arr[idx[0]] = (num_arr[idx[0]] + 1) % 10
        if num_arr[idx[0]]:
            return num_arr
    return [1] + num_arr

"""
Rotate an array of n elements to the right by k steps.

For example, with n = 7 and k = 3,
the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

Note:
Try to come up as many solutions as you can,
there are at least 3 different ways to solve this problem.
"""


def rotate_v1(array, k):
    """
    Rotate the entire array 'k' times
    T(n)- O(nk)

    :type array: List[int]
    :type k: int
    :rtype: void Do not return anything, modify array in-place instead.
    """
    array = array[:]
    n = len(array)
    for i in range(k):  # unused variable is not a problem
        temp = array[n - 1]
        for j in range(n - 1, 0, -1):
            array[j] = array[j - 1]
        array[0] = temp
    return array


def rotate_v2(array, k):
    """
    Reverse segments of the array, followed by the entire array
    T(n)- O(n)
    :type array: List[int]
    :type k: int
    :rtype: void Do not return anything, modify nums in-place instead.
    """
    array = array[:]

    def reverse(arr, a, b):
        while a < b:
            arr[a], arr[b] = arr[b], arr[a]
            a += 1
            b -= 1

    n = len(array)
    k = k % n
    reverse(array, 0, n - k - 1)
    reverse(array, n - k, n - 1)
    reverse(array, 0, n - 1)
    return array


def rotate_v3(array, k):
    if array is None:
        return None
    length = len(array)
    k = k % length
    return array[length - k :] + array[: length - k]

"""
Given a sorted integer array without duplicates,
return the summary of its ranges.

For example, given [0, 1, 2, 4, 5, 7], return [(0, 2), (4, 5), (7, 7)].
"""


def summarize_ranges(array):
    """
    :type array: List[int]
    :rtype: List[]
    """
    res = []
    if len(array) == 1:
        return [str(array[0])]
    i = 0
    while i < len(array):
        num = array[i]
        while i + 1 < len(array) and array[i + 1] - array[i] == 1:
            i += 1
        if array[i] != num:
            res.append((num, array[i]))
        else:
            res.append((num, num))
        i += 1
    return res

"""
Given an array S of n integers, are there three distinct elements
a, b, c in S such that a + b + c = 0?
Find all unique triplets in the array which gives the sum of zero.

Note: The solution set must not contain duplicate triplets.

For example, given array S = [-1, 0, 1, 2, -1, -4],

A solution set is:
{
  (-1, 0, 1),
  (-1, -1, 2)
}
"""


def three_sum(array):
    """
    :param array: List[int]
    :return: Set[ Tuple[int, int, int] ]
    """
    res = set()
    array.sort()
    for i in range(len(array) - 2):
        if i > 0 and array[i] == array[i - 1]:
            continue
        l, r = i + 1, len(array) - 1
        while l < r:
            s = array[i] + array[l] + array[r]
            if s > 0:
                r -= 1
            elif s < 0:
                l += 1
            else:
                # found three sum
                res.add((array[i], array[l], array[r]))

                # remove duplicates
                while l < r and array[l] == array[l + 1]:
                    l += 1

                while l < r and array[r] == array[r - 1]:
                    r -= 1

                l += 1
                r -= 1
    return res

"""
This algorithm receives an array and returns most_frequent_value
Also, sometimes it is possible to have multiple 'most_frequent_value's,
so this function returns a list. This result can be used to find a 
representative value in an array.

This algorithm gets an array, makes a dictionary of it,
 finds the most frequent count, and makes the result list.

For example: top_1([1, 1, 2, 2, 3, 4]) will return [1, 2]

(TL:DR) Get mathematical Mode
Complexity: O(n)
"""


def top_1(arr):
    values = {}
    # reserve each value which first appears on keys
    # reserve how many time each value appears by index number on values
    result = []
    f_val = 0

    for i in arr:
        if i in values:
            values[i] += 1
        else:
            values[i] = 1

    f_val = max(values.values())

    for i in values.keys():
        if values[i] == f_val:
            result.append(i)
        else:
            continue

    return result

"""
When make reliable means, we need to neglect best and worst values.
For example, when making average score on athletes we need this option.
So, this algorithm affixes some percentage to neglect when making mean.
For example, if you suggest 20%, it will neglect the best 10% of values
and the worst 10% of values.

This algorithm takes an array and percentage to neglect. After sorted,
if index of array is larger or smaller than desired ratio, we don't
compute it.

Compleity: O(n)
"""


def trimmean(arr, per):
    ratio = per / 200
    # /100 for easy calculation by *, and /2 for easy adaption to best and worst parts.
    cal_sum = 0
    # sum value to be calculated to trimmean.
    arr.sort()
    neg_val = int(len(arr) * ratio)
    arr = arr[neg_val : len(arr) - neg_val]
    for i in arr:
        cal_sum += i
    return cal_sum / len(arr)

"""
Given an array of integers, return indices of the two numbers
such that they add up to a specific target.

You may assume that each input would have exactly one solution,
and you may not use the same element twice.

Example:
    Given nums = [2, 7, 11, 15], target = 9,

    Because nums[0] + nums[1] = 2 + 7 = 9,
    return (0, 1)
"""


def two_sum(array, target):
    dic = {}
    for i, num in enumerate(array):
        if num in dic:
            return dic[num], i
        else:
            dic[target - num] = i
    return None

