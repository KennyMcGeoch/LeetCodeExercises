/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * Runtime: 105 ms, faster than 69.40% of JavaScript online submissions for Linked List Cycle.
 * Memory Usage: 44.7 MB, less than 83.25% of JavaScript online submissions for Linked List Cycle.
 */
 var hasCycle = function(head) {
    
    let node = head
    if (head === null)return false
    
    for (i=0; i<10001; i++){
        if (head.next === null)return false
        head = head.next
        if (node.next === null || node.next.next === null)return false
        node = node.next.next
        if (head === node)return true
    }
    return true
    
};