"""
Binary Heap. A min heap is a complete binary tree where each node is smaller than
its children. The root, therefore, is the minimum element in the tree. The min
heap uses an array to represent the data and operation. For example a min heap:

     4

/ \
 50 7
/ \ /
55 90 87

Heap [0, 4, 50, 7, 55, 90, 87]

Method in class: insert, remove_min
For example insert(2) in a min heap:

     4                     4                     2

/ \ / \ / \
 50 7 --> 50 2 --> 50 4
/ \ / \ / \ / \ / \ / \
55 90 87 2 55 90 87 7 55 90 87 7

For example remove_min() in a min heap:

     4                     87                    7

/ \ / \ / \
 50 7 --> 50 7 --> 50 87
/ \ / / \ / \
55 90 87 55 90 55 90

"""
from abc import ABCMeta, abstractmethod

class AbstractHeap(metaclass=ABCMeta):
"""Abstract Class for Binary Heap."""

    def __init__(self):
        pass

    @abstractmethod
    def perc_up(self, i):
        pass

    @abstractmethod
    def insert(self, val):
        pass

    @abstractmethod
    def perc_down(self, i):
        pass

    @abstractmethod
    def min_child(self, i):
        pass

    @abstractmethod
    def remove_min(self):
        pass

class BinaryHeap(AbstractHeap):
def **init**(self):
self.currentSize = 0
self.heap = [(0)]

    def perc_up(self, i):
        while i // 2 > 0:
            if self.heap[i] < self.heap[i // 2]:
                # Swap value of child with value of its parent
                self.heap[i], self.heap[i // 2] = self.heap[i // 2], self.heap[i]
            i = i // 2

    """
        Method insert always start by inserting the element at the bottom.
        It inserts rightmost spot so as to maintain the complete tree property.
        Then, it fixes the tree by swapping the new element with its parent,
        until it finds an appropriate spot for the element. It essentially
        perc_up the minimum element
        Complexity: O(logN)
    """

    def insert(self, val):
        self.heap.append(val)
        self.currentSize = self.currentSize + 1
        self.perc_up(self.currentSize)

    """
        Method min_child returns the index of smaller of 2 children of parent at index i
    """

    def min_child(self, i):
        if 2 * i + 1 > self.currentSize:  # No right child
            return 2 * i
        else:
            # left child > right child
            if self.heap[2 * i] > self.heap[2 * i + 1]:
                return 2 * i + 1
            else:
                return 2 * i

    def perc_down(self, i):
        while 2 * i < self.currentSize:
            min_child = self.min_child(i)
            if self.heap[min_child] < self.heap[i]:
                # Swap min child with parent
                self.heap[min_child], self.heap[i] = self.heap[i], self.heap[min_child]
            i = min_child

    """
        Remove Min method removes the minimum element and swap it with the last
        element in the heap( the bottommost, rightmost element). Then, it
        perc_down this element, swapping it with one of its children until the
        min heap property is restored
        Complexity: O(logN)
    """

    def remove_min(self):
        ret = self.heap[1]  # the smallest value at beginning
        self.heap[1] = self.heap[self.currentSize]  # Replace it by the last value
        self.currentSize = self.currentSize - 1
        self.heap.pop()
        self.perc_down(1)
        return ret

from .binary_heap import _
from .skyline import _
from .sliding_window_max import _
from .merge_sorted_k_lists import _
from .k_closest_points import \*

"""Given a list of points, find the k closest to the origin.

Idea: Maintain a max heap of k elements.
We can iterate through all points.
If a point p has a smaller distance to the origin than the top element of a heap, we add point p to the heap and remove the top element.
After iterating through all points, our heap contains the k closest points to the origin.
"""

from heapq import heapify, heappushpop

def k_closest(points, k, origin=(0, 0)): # Time: O(k+(n-k)logk) # Space: O(k)
"""Initialize max heap with first k points.
Python does not support a max heap; thus we can use the default min heap where the keys (distance) are negated.
"""
heap = [(-distance(p, origin), p) for p in points[:k]]
heapify(heap)

    """
    For every point p in points[k:],
    check if p is smaller than the root of the max heap;
    if it is, add p to heap and remove root. Reheapify.
    """
    for p in points[k:]:
        d = distance(p, origin)

        heappushpop(heap, (-d, p))  # heappushpop does conditional check
        """Same as:
            if d < -heap[0][0]:
                heappush(heap, (-d,p))
                heappop(heap)

        Note: heappushpop is more efficient than separate push and pop calls.
        Each heappushpop call takes O(logk) time.
        """

    return [p for nd, p in heap]  # return points in heap

def distance(point, origin=(0, 0)):
return (point[0] - origin[0]) ** 2 + (point[1] - origin[1]) ** 2

"""
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
"""

from heapq import heappop, heapreplace, heapify
from queue import PriorityQueue

# Definition for singly-linked list.

class ListNode(object):
def **init**(self, x):
self.val = x
self.next = None

def merge_k_lists(lists):
dummy = node = ListNode(0)
h = [(n.val, n) for n in lists if n]
heapify(h)
while h:
v, n = h[0]
if n.next is None:
heappop(h) # only change heap size when necessary
else:
heapreplace(h, (n.next.val, n.next))
node.next = n
node = node.next

    return dummy.next

def merge_k_lists(lists):
dummy = ListNode(None)
curr = dummy
q = PriorityQueue()
for node in lists:
if node:
q.put((node.val, node))
while not q.empty():
curr.next = q.get()[1] # These two lines seem to
curr = curr.next # be equivalent to :- curr = q.get()[1]
if curr.next:
q.put((curr.next.val, curr.next))
return dummy.next

"""
I think my code's complexity is also O(nlogk) and not using heap or priority queue,
n means the total elements and k means the size of list.

The mergeTwoLists function in my code comes from the problem Merge Two Sorted Lists
whose complexity obviously is O(n), n is the sum of length of l1 and l2.

To put it simpler, assume the k is 2^x, So the progress of combination is like a full binary tree,
from bottom to top. So on every level of tree, the combination complexity is n,
because every level have all n numbers without repetition.
The level of tree is x, ie log k. So the complexity is O(n log k).

for example, 8 ListNode, and the length of every ListNode is x1, x2,
x3, x4, x5, x6, x7, x8, total is n.

on level 3: x1+x2, x3+x4, x5+x6, x7+x8 sum: n

on level 2: x1+x2+x3+x4, x5+x6+x7+x8 sum: n

on level 1: x1+x2+x3+x4+x5+x6+x7+x8 sum: n
"""

# -_- coding: utf-8 -_-

"""
A city's skyline is the outer contour of the silhouette formed by all the buildings
in that city when viewed from a distance.
Now suppose you are given the locations and height of all the buildings
as shown on a cityscape photo (Figure A),
write a program to output the skyline formed by these buildings collectively (Figure B).

The geometric information of each building is represented by a triplet of integers [Li, Ri, Hi],
where Li and Ri are the x coordinates of the left and right edge of the ith building, respectively,
and Hi is its height. It is guaranteed that 0 ≤ Li, Ri ≤ INT_MAX, 0 < Hi ≤ INT_MAX, and Ri - Li > 0.
You may assume all buildings are perfect rectangles grounded on an absolutely flat surface at height 0.

For instance, the dimensions of all buildings in Figure A are recorded as:
[ [2 9 10], [3 7 15], [5 12 12], [15 20 10], [19 24 8] ] .

The output is a list of "key points" (red dots in Figure B) in the format of
[ [x1,y1], [x2, y2], [x3, y3], ... ]
that uniquely defines a skyline.
A key point is the left endpoint of a horizontal line segment. Note that the last key point,
where the rightmost building ends,
is merely used to mark the termination of the skyline, and always has zero height.
Also, the ground in between any two adjacent buildings should be considered part of the skyline contour.

For instance, the skyline in Figure B should be represented as:[ [2 10], [3 15], [7 12], [12 0], [15 10], [20 8], [24, 0] ].

Notes:

The number of buildings in any input list is guaranteed to be in the range [0, 10000].
The input list is already sorted in ascending order by the left x position Li.
The output list must be sorted by the x position.
There must be no consecutive horizontal lines of equal height in the output skyline. For instance,
[...[2 3], [4 5], [7 5], [11 5], [12 7]...] is not acceptable; the three lines of height 5 should be merged
into one in the final output as such: [...[2 3], [4 5], [12 7], ...]

"""
import heapq

def get_skyline(lrh):
"""
Wortst Time Complexity: O(NlogN)
:type buildings: List[List[int]]
:rtype: List[List[int]]
"""
skyline, live = [], []
i, n = 0, len(lrh)
while i < n or live:
if not live or i < n and lrh[i][0] <= -live[0][1]:
x = lrh[i][0]
while i < n and lrh[i][0] == x:
heapq.heappush(live, (-lrh[i][2], -lrh[i][1]))
i += 1
else:
x = -live[0][1]
while live and -live[0][1] <= x:
heapq.heappop(live)
height = len(live) and -live[0][0]
if not skyline or height != skyline[-1][1]:
skyline += ([x, height],)
return skyline

"""
Given an array nums, there is a sliding window of size k
which is moving from the very left of the array to the very right.
You can only see the k numbers in the window.
Each time the sliding window moves right by one position.

For example,
Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.

Window position Max

---

[1 3 -1] -3 5 3 6 7 3
1 [3 -1 -3] 5 3 6 7 3
1 3 [-1 -3 5] 3 6 7 5
1 3 -1 [-3 5 3] 6 7 5
1 3 -1 -3 [5 3 6] 7 6
1 3 -1 -3 5 [3 6 7] 7
Therefore, return the max sliding window as [3,3,5,5,6,7].
"""
import collections

def max_sliding_window(nums, k):
"""
:type nums: List[int]
:type k: int
:rtype: List[int]
"""
if not nums:
return nums
queue = collections.deque()
res = []
for num in nums:
if len(queue) < k:
queue.append(num)
else:
res.append(max(queue))
queue.popleft()
queue.append(num)
res.append(max(queue))
return res
