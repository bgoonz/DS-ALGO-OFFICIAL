/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
let sortedListToBST = function (head) {
  if (!head) return head;
  let slow = head;
  let fast = head;
  let prev = null;

  while (fast && fast.next) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }

  let node = new TreeNode(slow.val);
  // if prev is null, it means, slow and fast did not move, it means this half is done.
  // otherwise, prev is the end of the first half (left sub tree). And set prev.next = null.
  if (!prev) {
    head = null;
  } else {
    prev.next = null;
  }

  node.left = sortedListToBST(head);
  node.right = sortedListToBST(slow.next);

  return node;
};
