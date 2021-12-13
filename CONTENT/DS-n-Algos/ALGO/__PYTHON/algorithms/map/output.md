class HashTable(object):
"""
HashMap Data Type
HashMap() Create a new, empty map. It returns an empty map collection.
put(key, val) Add a new key-value pair to the map. If the key is already in the map then replace
the old value with the new value.
get(key) Given a key, return the value stored in the map or None otherwise.
del\_(key) or del map[key] Delete the key-value pair from the map using a statement of the form del map[key].
len() Return the number of key-value pairs stored in the map.
in Return True for a statement of the form key in map, if the given key is in the map, False otherwise.
"""

    _empty = object()
    _deleted = object()

    def __init__(self, size=11):
        self.size = size
        self._len = 0
        self._keys = [self._empty] * size  # keys
        self._values = [self._empty] * size  # values

    def put(self, key, value):
        initial_hash = hash_ = self.hash(key)

        while True:
            if self._keys[hash_] is self._empty or self._keys[hash_] is self._deleted:
                # can assign to hash_ index
                self._keys[hash_] = key
                self._values[hash_] = value
                self._len += 1
                return
            elif self._keys[hash_] == key:
                # key already exists here, assign over
                self._keys[hash_] = key
                self._values[hash_] = value
                return

            hash_ = self._rehash(hash_)

            if initial_hash == hash_:
                # table is full
                raise ValueError("Table is full")

    def get(self, key):
        initial_hash = hash_ = self.hash(key)
        while True:
            if self._keys[hash_] is self._empty:
                # That key was never assigned
                return None
            elif self._keys[hash_] == key:
                # key found
                return self._values[hash_]

            hash_ = self._rehash(hash_)
            if initial_hash == hash_:
                # table is full and wrapped around
                return None

    def del_(self, key):
        initial_hash = hash_ = self.hash(key)
        while True:
            if self._keys[hash_] is self._empty:
                # That key was never assigned
                return None
            elif self._keys[hash_] == key:
                # key found, assign with deleted sentinel
                self._keys[hash_] = self._deleted
                self._values[hash_] = self._deleted
                self._len -= 1
                return

            hash_ = self._rehash(hash_)
            if initial_hash == hash_:
                # table is full and wrapped around
                return None

    def hash(self, key):
        return key % self.size

    def _rehash(self, old_hash):
        """
        linear probing
        """
        return (old_hash + 1) % self.size

    def __getitem__(self, key):
        return self.get(key)

    def __delitem__(self, key):
        return self.del_(key)

    def __setitem__(self, key, value):
        self.put(key, value)

    def __len__(self):
        return self._len

class ResizableHashTable(HashTable):
MIN_SIZE = 8

    def __init__(self):
        super().__init__(self.MIN_SIZE)

    def put(self, key, value):
        rv = super().put(key, value)
        # increase size of dict * 2 if filled >= 2/3 size (like python dict)
        if len(self) >= (self.size * 2) / 3:
            self.__resize()

    def __resize(self):
        keys, values = self._keys, self._values
        self.size *= 2  # this will be the new size
        self._len = 0
        self._keys = [self._empty] * self.size
        self._values = [self._empty] * self.size
        for key, value in zip(keys, values):
            if key is not self._empty and key is not self._deleted:
                self.put(key, value)

from .hashtable import _
from .separate_chaining_hashtable import _
from .word*pattern import *
from .is*isomorphic import *
from .is_anagram import \*

"""
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

Note:
You may assume the string contains only lowercase alphabets.

Reference: https://leetcode.com/problems/valid-anagram/description/
"""

def is_anagram(s, t):
"""
:type s: str
:type t: str
:rtype: bool
"""
maps = {}
mapt = {}
for i in s:
maps[i] = maps.get(i, 0) + 1
for i in t:
mapt[i] = mapt.get(i, 0) + 1
return maps == mapt

"""
Given two strings s and t, determine if they are isomorphic.
Two strings are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while
preserving the order of characters. No two characters may map to the same
character but a character may map to itself.

Example 1:
Input: s = "egg", t = "add"
Output: true

Example 2:
Input: s = "foo", t = "bar"
Output: false

Example 3:
Input: s = "paper", t = "title"
Output: true
Reference: https://leetcode.com/problems/isomorphic-strings/description/
"""

def is_isomorphic(s, t):
"""
:type s: str
:type t: str
:rtype: bool
"""
if len(s) != len(t):
return False
dict = {}
set_value = set()
for i in range(len(s)):
if s[i] not in dict:
if t[i] in set_value:
return False
dict[s[i]] = t[i]
set_value.add(t[i])
else:
if dict[s[i]] != t[i]:
return False
return True

"""
Given string a and b, with b containing all distinct characters,
find the longest common sub sequence's length.

Expected complexity O(n logn).
"""

def max_common_sub_string(s1, s2): # Assuming s2 has all unique chars
s2dic = {s2[i]: i for i in range(len(s2))}
maxr = 0
subs = ""
i = 0
while i < len(s1):
if s1[i] in s2dic:
j = s2dic[s1[i]]
k = i
while j < len(s2) and k < len(s1) and s1[k] == s2[j]:
k += 1
j += 1
if k - i > maxr:
maxr = k - i
subs = s1[i:k]
i = k
else:
i += 1
return subs

def longest_palindromic_subsequence(str):
n = len(str)

    # Create a table to store results of subproblems
    L = [[0 for x in range(n)] for x in range(n)]

    for i in range(n):
        L[i][i] = 1

    for sub_string_length in range(2, n + 1):
        for i in range(n - sub_string_length + 1):
            j = i + sub_string_length - 1
            if str[i] == str[j] and sub_string_length == 2:
                L[i][j] = 2
            elif str[i] == str[j]:
                L[i][j] = L[i + 1][j - 1] + 2
            else:
                L[i][j] = max(L[i][j - 1], L[i + 1][j])

    return L[0][n - 1]

"""
Design a data structure that supports all following operations
in average O(1) time.

insert(val): Inserts an item val to the set if not already present.
remove(val): Removes an item val from the set if present.
getRandom: Returns a random element from current set of elements.
Each element must have the same probability of being returned.
"""

import random

class RandomizedSet:
def **init**(self):
self.nums = []
self.idxs = {}

    def insert(self, val):
        if val not in self.idxs:
            self.nums.append(val)
            self.idxs[val] = len(self.nums) - 1
            return True
        return False

    def remove(self, val):
        if val in self.idxs:
            idx, last = self.idxs[val], self.nums[-1]
            self.nums[idx], self.idxs[last] = last, idx
            self.nums.pop()
            self.idxs.pop(val, 0)
            return True
        return False

    def get_random(self):
        idx = random.randint(0, len(self.nums) - 1)
        return self.nums[idx]

if **name** == "**main**":
rs = RandomizedSet()
print("insert 1: ", rs.insert(1))
print("insert 2: ", rs.insert(2))
print("insert 3: ", rs.insert(3))
print("insert 4: ", rs.insert(4))
print("remove 3: ", rs.remove(3))
print("remove 3: ", rs.remove(3))
print("remove 1: ", rs.remove(1))
print("random: ", rs.get_random())
print("random: ", rs.get_random())
print("random: ", rs.get_random())
print("random: ", rs.get_random())

import unittest

class Node(object):
def **init**(self, key=None, value=None, next=None):
self.key = key
self.value = value
self.next = next

class SeparateChainingHashTable(object):
"""
HashTable Data Type:
By having each bucket contain a linked list of elements that are hashed to that bucket.

    Usage:
    >>> table = SeparateChainingHashTable() # Create a new, empty map.
    >>> table.put('hello', 'world') # Add a new key-value pair.
    >>> len(table) # Return the number of key-value pairs stored in the map.
    1
    >>> table.get('hello') # Get value by key.
    'world'
    >>> del table['hello'] # Equivalent to `table.del_('hello')`, deleting key-value pair.
    >>> table.get('hello') is None # Return `None` if a key doesn't exist.
    True
    """

    _empty = None

    def __init__(self, size=11):
        self.size = size
        self._len = 0
        self._table = [self._empty] * size

    def put(self, key, value):
        hash_ = self.hash(key)
        node_ = self._table[hash_]
        if node_ is self._empty:
            self._table[hash_] = Node(key, value)
        else:
            while node_.next is not None:
                if node_.key == key:
                    node_.value = value
                    return
                node_ = node_.next
            node_.next = Node(key, value)
        self._len += 1

    def get(self, key):
        hash_ = self.hash(key)
        node_ = self._table[hash_]
        while node_ is not self._empty:
            if node_.key == key:
                return node_.value
            node_ = node_.next
        return None

    def del_(self, key):
        hash_ = self.hash(key)
        node_ = self._table[hash_]
        pre_node = None
        while node_ is not None:
            if node_.key == key:
                if pre_node is None:
                    self._table[hash_] = node_.next
                else:
                    pre_node.next = node_.next
                self._len -= 1
            pre_node = node_
            node_ = node_.next

    def hash(self, key):
        return hash(key) % self.size

    def __len__(self):
        return self._len

    def __getitem__(self, key):
        return self.get(key)

    def __delitem__(self, key):
        return self.del_(key)

    def __setitem__(self, key, value):
        self.put(key, value)

"""
Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.

The Sudoku board could be partially filled, where empty cells are filled with
the character '.'.
"""

def is_valid_sudoku(self, board):
seen = []
for i, row in enumerate(board):
for j, c in enumerate(row):
if c != ".":
seen += [(c, j), (i, c), (i / 3, j / 3, c)]
return len(seen) == len(set(seen))

"""
Given a pattern and a string str, find if str follows the same pattern.
Here follow means a full match, such that there is a bijection between a
letter in pattern and a non-empty word in str.

Example 1:
Input: pattern = "abba", str = "dog cat cat dog"
Output: true

Example 2:
Input:pattern = "abba", str = "dog cat cat fish"
Output: false

Example 3:
Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false

Example 4:
Input: pattern = "abba", str = "dog dog dog dog"
Output: false
Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.
Reference: https://leetcode.com/problems/word-pattern/description/
"""

def word_pattern(pattern, str):
dict = {}
set_value = set()
list_str = str.split()
if len(list_str) != len(pattern):
return False
for i in range(len(pattern)):
if pattern[i] not in dict:
if list_str[i] in set_value:
return False
dict[pattern[i]] = list_str[i]
set_value.add(list_str[i])
else:
if dict[pattern[i]] != list_str[i]:
return False
return True
