/*
 * Key: using priority queue is a commonly used solution and it has N*O(logK)
 * However, in JavaScript, there is no existing priority queue implementation,
 * so the new idea is to merge two sorted list every time. divide the lists into two
 * halves (divide-and-conque), and merge the two halves. Recursively merge.
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
let mergeKLists = function (lists) {
  if (lists.length === 0) return lists;
  if (lists.length === 1) return lists[0];
  if (lists.length === 2) return mergeTwoLists(lists[0], lists[1]);
  let listNums = lists.length;
  let firstHalf = lists.slice(0, Math.floor(listNums / 2));
  let secondHalf = lists.slice(Math.floor(listNums / 2), listNums);
  return mergeTwoLists(mergeKLists(firstHalf), mergeKLists(secondHalf));
};

let mergeTwoLists = function (l1, l2) {
  let l3 = new ListNode();
  let l3Head = l3;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      l3.next = l1;
      l1 = l1.next;
    } else {
      l3.next = l2;
      l2 = l2.next;
    }
    l3 = l3.next;
  }
  if (!l1) l3.next = l2;
  if (!l2) l3.next = l1;

  return l3Head.next;
};
