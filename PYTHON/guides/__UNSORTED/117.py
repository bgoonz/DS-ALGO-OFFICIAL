"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""


class Solution:
    def connect(self, root: "Node") -> "Node":
        if not root:
            return None
        result = curr = root
        head = root
        while head:
            curr = head
            head = None
            prev = None
            while curr:
                if curr.left:
                    if prev:
                        prev.next = curr.left
                    else:
                        head = curr.left
                    prev = curr.left
                if curr.right:
                    if prev:
                        prev.next = curr.right
                    else:
                        head = curr.right
                    prev = curr.right
                curr = curr.next
        return result
