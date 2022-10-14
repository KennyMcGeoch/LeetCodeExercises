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
 * Runtime: 686 ms, faster than 99.84% of JavaScript online submissions for Delete the Middle Node of a Linked List.
 * Memory Usage: 127.9 MB, less than 18.27% of JavaScript online submissions for Delete the Middle Node of a Linked List.
 */
 var deleteMiddle = function(head) {

    let depth = 0
    let currentNode = head
    let solution = head

    while(currentNode.next){
        currentNode = currentNode.next
        depth++
    }
    if (depth === 0) return null
    if (depth === 1){
        head.next = null
        return head
    }

    iterations = Math.ceil(depth/2)

    for (i=0; i<iterations; i++){
        solution = solution.next
    }
    solution.val = solution.next.val
    solution.next = solution.next.next

    return head
    
};