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
 * Runtime: 246 ms, faster than 88.64% of JavaScript online submissions for Remove Nodes From Linked List.
 * Memory Usage: 86.4 MB, less than 97.73% of JavaScript online submissions for Remove Nodes From Linked List.
 */
var removeNodes = function(head) {
    
    let arrVal = []
    
    let node = head
    while (node !== null){
        arrVal.push(node.val)
        node = node.next
    }
    for (let i=arrVal.length-2; i >= 0; i--) arrVal[i] = Math.max(arrVal[i], arrVal[i+1])
    let count = 0
    while (head.val !== arrVal[count++]) head = head.next
    
    let newHead = head
    node = head.next
    while (node !== null){
        if (node.val === arrVal[count++]){
            newHead.next = node
            newHead = newHead.next
        }
        node = node.next
    }
    
    return head
    
};