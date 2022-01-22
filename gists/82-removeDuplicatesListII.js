/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let deleteDuplicates = function (head) {
  if (!head || !head.next) return head;
  let pre = new ListNode(null);
  pre.next = head;
  let preCopy = pre;
  while (head.next) {
    if (pre.next.val !== head.next.val) {
      pre = pre.next;
    } else {
      while (head.next && pre.next.val === head.next.val) {
        head = head.next;
      }
      pre.next = head.next;
    }

    if (head.next) head = head.next;
  }

  return preCopy.next;
};
