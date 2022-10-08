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
 * Runtime: 111 ms, faster than 16.39% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.
 * Memory Usage: 41.9 MB, less than 72.10% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.
 */
 var getDecimalValue = function(head) {

    let solution = []
    let currentNode = head
    let count = 0
    
    while (currentNode){
        solution.push(currentNode.val)
        currentNode = currentNode.next
    }

    solution.reverse()

    for (i=0; i < solution.length; i++){
        count += (Math.pow(2,i) * solution[i])
    }
    return count
};
