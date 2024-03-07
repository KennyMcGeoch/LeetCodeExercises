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
 * Runtime: 50 ms, faster than 65.74% of JavaScript online submissions for Middle of the Linked List.
 * Memory Usage: 48.9 MB, less than 37.27% of JavaScript online submissions for Middle of the Linked List.
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
 * Runtime: 46 ms, faster than 84.75% of JavaScript online submissions for Middle of the Linked List.
 * Memory Usage: 49.2 MB, less than 9.66% of JavaScript online submissions for Middle of the Linked List.
 */
var middleNode = function(head) {

    let fast = head
    
    while (true){
        if (fast.next === null) return head
        if (fast.next.next === null) return head.next
        head = head.next
        fast = fast.next.next
    }
     
    return
     
    
};