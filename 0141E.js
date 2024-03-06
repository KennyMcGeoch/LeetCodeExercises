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
 * Runtime: 66 ms, faster than 46.54% of JavaScript online submissions for Linked List Cycle.
 * Memory Usage: 52.2 MB, less than 72.75% of JavaScript online submissions for Linked List Cycle.
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
 * Runtime: 56 ms, faster than 90.52% of JavaScript online submissions for Linked List Cycle.
 * Memory Usage: 52.6 MB, less than 62.94% of JavaScript online submissions for Linked List Cycle.
 */
var hasCycle = function(head) {
    
    if (head === null || head.next === null)return false
    let fast = head
    
    while (fast.next !== null && fast.next.next !== null){
        head = head.next
        fast = fast.next.next
        if (fast === null) return false
        if (fast === head) return true
    }
    
    return false
    
};