/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * Runtime: 66 ms, faster than 94.25% of JavaScript online submissions for Remove Nth Node From End of List.
 * Memory Usage: 42.9 MB, less than 48.86% of JavaScript online submissions for Remove Nth Node From End of List.
 */
 var removeNthFromEnd = function(head, n) {
    

    let count = 1
    let currentNode = head
    
    while(currentNode.next){
        currentNode = currentNode.next
        count++
    }
    if (count === 1) return null
    
    if (count === 2){
        if (n === 1){
            head.next = null
            return head
        }
        else{
            head = head.next
            return head
        }
    }
    
    let node = head
    
    if (n===1){
        while (node.next){
        if (count-1 === n){
            node.next = null
            return head
        }
        count--
        node = node.next
        }        
    }  

    while (node.next){
        if (count === n){
            node.val = node.next.val
            node.next = node.next.next

            return head
        }
        count--
        node = node.next
    }     
};