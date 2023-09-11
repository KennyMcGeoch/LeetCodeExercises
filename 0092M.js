/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 * Runtime: 45 ms, faster than 88.73% of JavaScript online submissions for Reverse Linked List II.
 * Memory Usage: 42.6 MB, less than 11.27% of JavaScript online submissions for Reverse Linked List II.
 */
var reverseBetween = function(head, left, right) {
    
    let vals = []
    let node = head
    let depth = 1
    while (depth <= right){
        if (depth >= left && depth <= right) vals.push(node.val)
        depth++
        node = node.next
    }
    vals.reverse()
    node = head
    depth = 1
    let j = 0
    while (depth <= right){
        if (depth >= left)node.val = vals[j++]
        node = node.next
        depth++
    }
    return head
    
};