// Q: Given a list, rotate the list to the right by k places, where k is non-negative.
// k places means k steps ?? So, if k is bigger than the length, rotate at length - k % length

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
let rotateRight = function (head, k) {
  if (!head || !head.next) return head;
  let headCopy = head;
  let first = head;
  let second = head;
  let i = 1;
  while (first.next) {
    first = first.next;
    i++;
  }
  let j = i - (k % i);
  // if the steps eqauls to i (the length) return original list.
  if (j === i) return head;

  while (j > 1) {
    second = second.next;
    j--;
  }
  head = second.next;
  second.next = first.next;
  first.next = headCopy;

  return head;
};
