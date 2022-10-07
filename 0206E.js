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
 * Runtime: 116 ms, faster than 23.30% of JavaScript online submissions for Reverse Linked List.
 * Memory Usage: 43.9 MB, less than 87.04% of JavaScript online submissions for Reverse Linked List.
 */
 var reverseList = function(head) {

    let nextNode = null
    let previousNode = null
    let currentNode = head

    while (currentNode){
        nextNode = currentNode.next
        currentNode.next = previousNode
        previousNode = currentNode
        currentNode = nextNode
    }

    return previousNode
    
};

reverseList({
    val: 1,
    next: {val:2, next :{val:3, next : {val: 4, next:{ val:5, next :null}}}}})