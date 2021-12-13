"""
You are given two non-empty linked lists representing
two non-negative integers. The digits are stored in reverse order
and each of their nodes contain a single digit.
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero,
except the number 0 itself.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
"""

import unittest

class Node:
def **init**(self, x):
self.val = x
self.next = None

def add_two_numbers(left: Node, right: Node) -> Node:
head = Node(0)
current = head
sum = 0
while left or right:
print("adding: ", left.val, right.val)
sum //= 10
if left:
sum += left.val
left = left.next
if right:
sum += right.val
right = right.next
current.next = Node(sum % 10)
current = current.next
if sum // 10 == 1:
current.next = Node(1)
return head.next

def convert_to_list(number: int) -> Node:
"""
converts a positive integer into a (reversed) linked list.
for example: give 112
result 2 -> 1 -> 1
"""
if number >= 0:
head = Node(0)
current = head
remainder = number % 10
quotient = number // 10

        while quotient != 0:
            current.next = Node(remainder)
            current = current.next
            remainder = quotient % 10
            quotient //= 10
        current.next = Node(remainder)
        return head.next
    else:
        print("number must be positive!")

def convert_to_str(l: Node) -> str:
"""
converts the non-negative number list into a string.
"""
result = ""
while l:
result += str(l.val)
l = l.next
return result

class TestSuite(unittest.TestCase):
"""
testsuite for the linked list structure and
the adding function, above.
"""

    def test_convert_to_str(self):
        number1 = Node(2)
        number1.next = Node(4)
        number1.next.next = Node(3)
        self.assertEqual("243", convert_to_str(number1))

    def test_add_two_numbers(self):
        # 1. test case
        number1 = Node(2)
        number1.next = Node(4)
        number1.next.next = Node(3)
        number2 = Node(5)
        number2.next = Node(6)
        number2.next.next = Node(4)
        result = convert_to_str(add_two_numbers(number1, number2))
        self.assertEqual("708", result)

        # 2. test case
        number3 = Node(1)
        number3.next = Node(1)
        number3.next.next = Node(9)
        number4 = Node(1)
        number4.next = Node(0)
        number4.next.next = Node(1)
        result = convert_to_str(add_two_numbers(number3, number4))
        self.assertEqual("2101", result)

        # 3. test case
        number5 = Node(1)
        number6 = Node(0)
        result = convert_to_str(add_two_numbers(number5, number6))
        self.assertEqual("1", result)

        # 4. test case
        number7 = Node(9)
        number7.next = Node(1)
        number7.next.next = Node(1)
        number8 = Node(1)
        number8.next = Node(0)
        number8.next.next = Node(1)
        result = convert_to_str(add_two_numbers(number7, number8))
        self.assertEqual("022", result)

    def test_convert_to_list(self):
        result = convert_to_str(convert_to_list(112))
        self.assertEqual("211", result)

if **name** == "**main**":
unittest.main()

"""
A linked list is given such that each node contains an additional random
pointer which could point to any node in the list or null.

Return a deep copy of the list.
"""
from collections import defaultdict

class RandomListNode(object):
def **init**(self, label):
self.label = label
self.next = None
self.random = None

def copy_random_pointer_v1(head):
"""
:type head: RandomListNode
:rtype: RandomListNode
"""
dic = dict()
m = n = head
while m:
dic[m] = RandomListNode(m.label)
m = m.next
while n:
dic[n].next = dic.get(n.next)
dic[n].random = dic.get(n.random)
n = n.next
return dic.get(head)

# O(n)

def copy_random_pointer_v2(head):
"""
:type head: RandomListNode
:rtype: RandomListNode
"""
copy = defaultdict(lambda: RandomListNode(0))
copy[None] = None
node = head
while node:
copy[node].label = node.label
copy[node].next = copy[node.next]
copy[node].random = copy[node.random]
node = node.next
return copy[head]

"""
Write a function to delete a node (except the tail)
in a singly linked list, given only access to that node.

Supposed the linked list is 1 -> 2 -> 3 -> 4 and
you are given the third node with value 3,
the linked list should become 1 -> 2 -> 4 after calling your function.
"""
import unittest

class Node:
def **init**(self, x):
self.val = x
self.next = None

def delete_node(node):
if node is None or node.next is None:
raise ValueError
node.val = node.next.val
node.next = node.next.next

class TestSuite(unittest.TestCase):
def test_delete_node(self):

        # make linkedlist 1 -> 2 -> 3 -> 4
        head = Node(1)
        curr = head
        for i in range(2, 6):
            curr.next = Node(i)
            curr = curr.next

        # node3 = 3
        node3 = head.next.next

        # after delete_node => 1 -> 2 -> 4
        delete_node(node3)

        curr = head
        self.assertEqual(1, curr.val)

        curr = curr.next
        self.assertEqual(2, curr.val)

        curr = curr.next
        self.assertEqual(4, curr.val)

        curr = curr.next
        self.assertEqual(5, curr.val)

        tail = curr
        self.assertIsNone(tail.next)

        self.assertRaises(ValueError, delete_node, tail)
        self.assertRaises(ValueError, delete_node, tail.next)

if **name** == "**main**":

    unittest.main()

"""
Given a linked list, find the first node of a cycle in it.
1 -> 2 -> 3 -> 4 -> 5 -> 1 => 1
A -> B -> C -> D -> E -> C => C

    Note: The solution is a direct implementation
          Floyd's cycle-finding algorithm (Floyd's Tortoise and Hare).

"""
import unittest

class Node:
def **init**(self, x):
self.val = x
self.next = None

def first_cyclic_node(head):
"""
:type head: Node
:rtype: Node
"""
runner = walker = head
while runner and runner.next:
runner = runner.next.next
walker = walker.next
if runner is walker:
break

    if runner is None or runner.next is None:
        return None

    walker = head
    while runner is not walker:
        runner, walker = runner.next, walker.next
    return runner

class TestSuite(unittest.TestCase):
def test_first_cyclic_node(self):

        # create linked list => A -> B -> C -> D -> E -> C
        head = Node("A")
        head.next = Node("B")
        curr = head.next

        cyclic_node = Node("C")
        curr.next = cyclic_node

        curr = curr.next
        curr.next = Node("D")
        curr = curr.next
        curr.next = Node("E")
        curr = curr.next
        curr.next = cyclic_node

        self.assertEqual("C", first_cyclic_node(head).val)

if **name** == "**main**":

    unittest.main()

from .reverse import _
from .is_sorted import _
from .remove*range import *
from .swap*in_pairs import *
from .rotate*list import *
from .is*cyclic import *
from .merge*two_list import *
from .is*palindrome import *
from .copy_random_pointer import \*

"""
This function takes two lists and returns the node they have in common, if any.
In this example:
1 -> 3 -> 5
\
 7 -> 9 -> 11
/
2 -> 4 -> 6
...we would return 7.
Note that the node itself is the unique identifier, not the value of the node.
"""
import unittest

class Node(object):
def **init**(self, val=None):
self.val = val
self.next = None

def intersection(h1, h2):

    count = 0
    flag = None
    h1_orig = h1
    h2_orig = h2

    while h1 or h2:
        count += 1

        if not flag and (h1.next is None or h2.next is None):
            # We hit the end of one of the lists, set a flag for this
            flag = (count, h1.next, h2.next)

        if h1:
            h1 = h1.next
        if h2:
            h2 = h2.next

    long_len = count  # Mark the length of the longer of the two lists
    short_len = flag[0]

    if flag[1] is None:
        shorter = h1_orig
        longer = h2_orig
    elif flag[2] is None:
        shorter = h2_orig
        longer = h1_orig

    while longer and shorter:

        while long_len > short_len:
            # force the longer of the two lists to "catch up"
            longer = longer.next
            long_len -= 1

        if longer == shorter:
            # The nodes match, return the node
            return longer
        else:
            longer = longer.next
            shorter = shorter.next

    return None

class TestSuite(unittest.TestCase):
def test_intersection(self):

        # create linked list as:
        # 1 -> 3 -> 5
        #            \
        #             7 -> 9 -> 11
        #            /
        # 2 -> 4 -> 6
        a1 = Node(1)
        b1 = Node(3)
        c1 = Node(5)
        d = Node(7)
        a2 = Node(2)
        b2 = Node(4)
        c2 = Node(6)
        e = Node(9)
        f = Node(11)

        a1.next = b1
        b1.next = c1
        c1.next = d
        a2.next = b2
        b2.next = c2
        c2.next = d
        d.next = e
        e.next = f

        self.assertEqual(7, intersection(a1, a2).val)

if **name** == "**main**":

    unittest.main()

"""
Given a linked list, determine if it has a cycle in it.

Follow up:
Can you solve it without using extra space?
"""

class Node:
def **init**(self, x):
self.val = x
self.next = None

def is_cyclic(head):
"""
:type head: Node
:rtype: bool
"""
if not head:
return False
runner = head
walker = head
while runner.next and runner.next.next:
runner = runner.next.next
walker = walker.next
if runner == walker:
return True
return False

def is_palindrome(head):
if not head:
return True # split the list to two parts
fast, slow = head.next, head
while fast and fast.next:
fast = fast.next.next
slow = slow.next
second = slow.next
slow.next = None # Don't forget here! But forget still works! # reverse the second part
node = None
while second:
nxt = second.next
second.next = node
node = second
second = nxt # compare two parts # second part has the same or one less node
while node:
if node.val != head.val:
return False
node = node.next
head = head.next
return True

def is_palindrome_stack(head):
if not head or not head.next:
return True

    # 1. Get the midpoint (slow)
    slow = fast = cur = head
    while fast and fast.next:
        fast, slow = fast.next.next, slow.next

    # 2. Push the second half into the stack
    stack = [slow.val]
    while slow.next:
        slow = slow.next
        stack.append(slow.val)

    # 3. Comparison
    while stack:
        if stack.pop() != cur.val:
            return False
        cur = cur.next

    return True

def is_palindrome_dict(head):
"""
This function builds up a dictionary where the keys are the values of the list,
and the values are the positions at which these values occur in the list.
We then iterate over the dict and if there is more than one key with an odd
number of occurrences, bail out and return False.
Otherwise, we want to ensure that the positions of occurrence sum to the
value of the length of the list - 1, working from the outside of the list inward.
For example:
Input: 1 -> 1 -> 2 -> 3 -> 2 -> 1 -> 1
d = {1: [0,1,5,6], 2: [2,4], 3: [3]}
'3' is the middle outlier, 2+4=6, 0+6=6 and 5+1=6 so we have a palindrome.
"""
if not head or not head.next:
return True
d = {}
pos = 0
while head:
if head.val in d.keys():
d[head.val].append(pos)
else:
d[head.val] = [pos]
head = head.next
pos += 1
checksum = pos - 1
middle = 0
for v in d.values():
if len(v) % 2 != 0:
middle += 1
else:
step = 0
for i in range(0, len(v)):
if v[i] + v[len(v) - 1 - step] != checksum:
return False
step += 1
if middle > 1:
return False
return True

"""
Given a linked list, is_sort function returns true if the list is in sorted
(increasing) order and return false otherwise. An empty list is considered
to be sorted.

For example:
Null :List is sorted
1 2 3 4 :List is sorted
1 2 -1 3 :List is not sorted
"""

def is_sorted(head):
if not head:
return True
current = head
while current.next:
if current.val > current.next.val:
return False
current = current.next
return True

class Node:
def **init**(self, val=None):
self.val = val
self.next = None

def kth_to_last_eval(head, k):
"""
This is a suboptimal, hacky method using eval(), which is not
safe for user input. We guard against danger by ensuring k in an int
"""
if not isinstance(k, int) or not head.val:
return False

    nexts = ".".join(["next" for n in range(1, k + 1)])
    seeker = str(".".join(["head", nexts]))

    while head:
        if eval(seeker) is None:
            return head
        else:
            head = head.next

    return False

def kth_to_last_dict(head, k):
"""
This is a brute force method where we keep a dict the size of the list
Then we check it for the value we need. If the key is not in the dict,
our and statement will short circuit and return False
"""
if not (head and k > -1):
return False
d = dict()
count = 0
while head:
d[count] = head
head = head.next
count += 1
return len(d) - k in d and d[len(d) - k]

def kth_to_last(head, k):
"""
This is an optimal method using iteration.
We move p1 k steps ahead into the list.
Then we move p1 and p2 together until p1 hits the end.
"""
if not (head or k > -1):
return False
p1 = head
p2 = head
for i in range(1, k + 1):
if p1 is None: # Went too far, k is not valid
raise IndexError
p1 = p1.next
while p1:
p1 = p1.next
p2 = p2.next
return p2

def print_linked_list(head):
string = ""
while head.next:
string += head.val + " -> "
head = head.next
string += head.val
print(string)

def test(): # def make_test_li # A A B C D C F G
a1 = Node("A")
a2 = Node("A")
b = Node("B")
c1 = Node("C")
d = Node("D")
c2 = Node("C")
f = Node("F")
g = Node("G")
a1.next = a2
a2.next = b
b.next = c1
c1.next = d
d.next = c2
c2.next = f
f.next = g
print_linked_list(a1)

    # test kth_to_last_eval
    kth = kth_to_last_eval(a1, 4)
    try:
        assert kth.val == "D"
    except AssertionError as e:
        e.args += ("Expecting D, got %s" % kth.val,)
        raise

    # test kth_to_last_dict
    kth = kth_to_last_dict(a1, 4)
    try:
        assert kth.val == "D"
    except AssertionError as e:
        e.args += ("Expecting D, got %s" % kth.val,)
        raise

    # test kth_to_last
    kth = kth_to_last(a1, 4)
    try:
        assert kth.val == "D"
    except AssertionError as e:
        e.args += ("Expecting D, got %s" % kth.val,)
        raise
    print("all passed.")

if **name** == "**main**":
test()

# Pros

# Linked Lists have constant-time insertions and deletions in any position,

# in comparison, arrays require O(n) time to do the same thing.

# Linked lists can continue to expand without having to specify

# their size ahead of time (remember our lectures on Array sizing

# from the Array Sequence section of the course!)

# Cons

# To access an element in a linked list, you need to take O(k) time

# to go from the head of the list to the kth element.

# In contrast, arrays have constant time operations to access

# elements in an array.

class DoublyLinkedListNode(object):
def **init**(self, value):
self.value = value
self.next = None
self.prev = None

class SinglyLinkedListNode(object):
def **init**(self, value):
self.value = value
self.next = None

"""
Merge two sorted linked lists and return it as a new list. The new list should
be made by splicing together the nodes of the first two lists.

For example:
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
"""

class Node:
def **init**(self, x):
self.val = x
self.next = None

def merge_two_list(l1, l2):
ret = cur = Node(0)
while l1 and l2:
if l1.val < l2.val:
cur.next = l1
l1 = l1.next
else:
cur.next = l2
l2 = l2.next
cur = cur.next
cur.next = l1 or l2
return ret.next

# recursively

def merge_two_list_recur(l1, l2):
if not l1 or not l2:
return l1 or l2
if l1.val < l2.val:
l1.next = merge_two_list_recur(l1.next, l2)
return l1
else:
l2.next = merge_two_list_recur(l1, l2.next)
return l2

"""
Write code to partition a linked list around a value x, such that all nodes less
than x come before all nodes greater than or equal to x. If x is contained
within the list, the values of x only need to be after the elements less than x.
The partition element x can appear anywhere in the "right partition";
it does not need to appear between the left and right partitions.

3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition=5]
3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

We assume the values of all linked list nodes are int and that x in an int.
"""

class Node:
def **init**(self, val=None):
self.val = int(val)
self.next = None

def print_linked_list(head):
string = ""
while head.next:
string += str(head.val) + " -> "
head = head.next
string += str(head.val)
print(string)

def partition(head, x):
left = None
right = None
prev = None
current = head
while current:
if int(current.val) >= x:
if not right:
right = current
else:
if not left:
left = current
else:
prev.next = current.next
left.next = current
left = current
left.next = right
if prev and prev.next is None:
break # cache previous value in case it needs to be pointed elsewhere
prev = current
current = current.next

def test():
a = Node("3")
b = Node("5")
c = Node("8")
d = Node("5")
e = Node("10")
f = Node("2")
g = Node("1")

    a.next = b
    b.next = c
    c.next = d
    d.next = e
    e.next = f
    f.next = g

    print_linked_list(a)
    partition(a, 5)
    print_linked_list(a)

if **name** == "**main**":
test()

class Node:
def **init**(self, val=None):
self.val = val
self.next = None

def remove_dups(head):
"""
Time Complexity: O(N)
Space Complexity: O(N)
"""
hashset = set()
prev = Node()
while head:
if head.val in hashset:
prev.next = head.next
else:
hashset.add(head.val)
prev = head
head = head.next

def remove_dups_wothout_set(head):
"""
Time Complexity: O(N^2)
Space Complexity: O(1)
"""
current = head
while current:
runner = current
while runner.next:
if runner.next.val == current.val:
runner.next = runner.next.next
else:
runner = runner.next
current = current.next

def print_linked_list(head):
string = ""
while head.next:
string += head.val + " -> "
head = head.next
string += head.val
print(string)

# A A B C D C F G

a1 = Node("A")
a2 = Node("A")
b = Node("B")
c1 = Node("C")
d = Node("D")
c2 = Node("C")
f = Node("F")
g = Node("G")

a1.next = a2
a2.next = b
b.next = c1
c1.next = d
d.next = c2
c2.next = f
f.next = g

remove_dups(a1)
print_linked_list(a1)
remove_dups_wothout_set(a1)
print_linked_list(a1)

"""
Given a linked list, remove_range function accepts a starting and ending index
as parameters and removes the elements at those indexes (inclusive) from the list

For example:
List: [8, 13, 17, 4, 9, 12, 98, 41, 7, 23, 0, 92]
remove_range(list, 3, 8);
List becomes: [8, 13, 17, 23, 0, 92]

legal range of the list (0 < start index < end index < size of list).
"""

def remove_range(head, start, end):
assert start <= end # Case: remove node at head
if start == 0:
for i in range(0, end + 1):
if head != None:
head = head.next
else:
current = head # Move pointer to start position
for i in range(0, start - 1):
current = current.next # Remove data until the end
for i in range(0, end - start + 1):
if current != None and current.next != None:
current.next = current.next.next
return head

"""
Reverse a singly linked list. For example:

1 --> 2 --> 3 --> 4
After reverse:
4 --> 3 --> 2 --> 1
"""

#

# Iterative solution

# T(n)- O(n)

#

def reverse_list(head):
"""
:type head: ListNode
:rtype: ListNode
"""
if not head or not head.next:
return head
prev = None
while head:
current = head
head = head.next
current.next = prev
prev = current
return prev

#

# Recursive solution

# T(n)- O(n)

#

def reverse_list_recursive(head):
"""
:type head: ListNode
:rtype: ListNode
"""
if head is None or head.next is None:
return head
p = head.next
head.next = None
revrest = reverse_list_recursive(p)
p.next = head
return revrest

"""
Given a list, rotate the list to the right by k places,
where k is non-negative.

For example:
Given 1->2->3->4->5->NULL and k = 2,
return 4->5->1->2->3->NULL.
"""

# Definition for singly-linked list.

# class ListNode(object):

# def **init**(self, x):

# self.val = x

# self.next = None

def rotate_right(head, k):
"""
:type head: ListNode
:type k: int
:rtype: ListNode
"""
if not head or not head.next:
return head
current = head
length = 1 # count length of the list
while current.next:
current = current.next
length += 1 # make it circular
current.next = head
k = k % length # rotate until length-k
for i in range(length - k):
current = current.next
head = current.next
current.next = None
return head

"""
Given a linked list, swap every two adjacent nodes
and return its head.

For example,
Given 1->2->3->4, you should return the list as 2->1->4->3.

Your algorithm should use only constant space.
You may not modify the values in the list,
only nodes itself can be changed.
"""

class Node(object):
def **init**(self, x):
self.val = x
self.next = None

def swap_pairs(head):
if not head:
return head
start = Node(0)
start.next = head
current = start
while current.next and current.next.next:
first = current.next
second = current.next.next
first.next = second.next
current.next = second
current.next.next = first
current = current.next.next
return start.next
