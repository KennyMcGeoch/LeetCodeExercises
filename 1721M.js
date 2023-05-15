/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * Runtime: 422 ms, faster than 94.76% of JavaScript online submissions for Swapping Nodes in a Linked List.
 * Memory Usage: 101.1 MB, less than 21.77% of JavaScript online submissions for Swapping Nodes in a Linked List.
 */
var swapNodes = function(head, k) {
    let length = 0
    let node = head
    while (node !== null) {
        length++
        node = node.next
    }
    firstNum = k--
    secondNum = length - k
    if (length < 2 || firstNum === secondNum)return head
    depth = 1
    node = head
    while (node !== null) {
        if (depth === firstNum){
            firstNum = node
        }
        else if (depth === secondNum){
            secondNum = node
        }
        node = node.next
        depth++
    }
    firstVal = firstNum.val
    firstNum.val = secondNum.val
    secondNum.val = firstVal
    return head    
};