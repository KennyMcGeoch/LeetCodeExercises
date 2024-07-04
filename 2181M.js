/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * Runtime: 401 ms, faster than 95.61% of JavaScript online submissions for Merge Nodes in Between Zeros.
 * Memory Usage: 94.4 MB, less than 94.15% of JavaScript online submissions for Merge Nodes in Between Zeros.
 */
var mergeNodes = function(head) {
    
    let node = head
    
    while (node.next !== null){
        if (node.next.val === 0){
            if (node.next.next === null) node.next = null
            else node = node.next
        }
        else{
            node.val += node.next.val
            node.next = node.next.next
        }
    }
    
    return head
    
};