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
 * Runtime: 166 ms, faster than 100.00% of JavaScript online submissions for Double a Number Represented as a Linked List.
 * Memory Usage: 61.5 MB, less than 72.80% of JavaScript online submissions for Double a Number Represented as a Linked List.
 */
var doubleIt = function(head) {
    
    let num = []
    
    let node = head
    
    while (node !== null){
        num.push(node.val)
        node = node.next
    }
    
    let carry = 0
    for (let i=num.length-1; i>=0; i--){
        num[i] *= 2
        num[i] += carry
        if (num[i] > 9){
            num[i] %= 10
            carry = 1
        }
        else carry = 0
    }
    
    node = head
    let count = 0
    if (carry === 0){
        while (node !== null){
        node.val = num[count++]
        node = node.next
        }
    }
    else{
        node.val = 1
        if (!node.next){
            node.next = {val : Number(num[count]), next : null}
            return head
        }
        node = node.next
        while (node.next !== null){
        node.val = num[count++]
        node = node.next
        }
        node.val = num[count++]
        node.next = {val : num[count], next : null}
    }
    
    return head
    
};