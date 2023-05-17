/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 * Runtime: 175 ms, faster than 49.46% of JavaScript online submissions for Maximum Twin Sum of a Linked List.
 * Memory Usage: 95.4 MB, less than 5.02% of JavaScript online submissions for Maximum Twin Sum of a Linked List.
 */
var pairSum = function(head) {
    
    let vals = []
    
    node = head
    
    while (node !== null){
        vals.push(node.val)
        node = node.next
    }
    
    let loops = vals.length / 2
    let last = vals.length - 1
    let max = 0
    let temp = 0
    
    
    for (i=0; i< loops; i++){
        temp = vals[i] + vals[last--]
        if (temp > max) max = temp
    }
    
    return max
    
};