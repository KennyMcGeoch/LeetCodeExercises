/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 * Runtime: 86 ms, faster than 80.51% of JavaScript online submissions for Delete Node in a Linked List.
 * Memory Usage: 43.7 MB, less than 96.98% of JavaScript online submissions for Delete Node in a Linked List.
 */
 var deleteNode = function(node) {
    
    node.val = node.next.val
    node.next = node.next.next
    return     
};