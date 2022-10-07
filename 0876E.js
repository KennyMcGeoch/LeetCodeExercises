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
 * Runtime: 99 ms, faster than 34.95% of JavaScript online submissions for Middle of the Linked List.
 * Memory Usage: 42.3 MB, less than 26.81% of JavaScript online submissions for Middle of the Linked List.
 */
 var middleNode = function(head) {

    let count = 0
    let currentNode = head
    let solution = head

    while(currentNode.next){
        currentNode = currentNode.next
        count++
    }

    iterations = Math.ceil(count/2)

    for (i=0; i<iterations; i++){
        solution = solution.next
    }

    return solution    
};

middleNode({
    val: 1,
    next: {val:2, next :{val:3, next : {val: 4, next:{ val:5, next :null}}}}})