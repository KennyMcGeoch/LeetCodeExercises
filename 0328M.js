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
 * Runtime: 115 ms, faster than 55.17% of JavaScript online submissions for Odd Even Linked List.
 * Memory Usage: 45.2 MB, less than 10.93% of JavaScript online submissions for Odd Even Linked List.
 */
 var oddEvenList = function(head) {
    
    let arrayOdd = []
    let arrayEven = []
    let count = 0
    
    sortArray(head)
    
    function sortArray(node){
        if (node === null) return 0
        if (count++ % 2 === 0) arrayOdd.push(node.val)
        else arrayEven.push(node.val)
        return sortArray(node.next)
    }
    
    let combinedArray = arrayOdd.concat(arrayEven)
    changeList(head, 0)
    
    function changeList (node, depth){
        if (node === null) return 0
        node.val = combinedArray[depth]
        return changeList(node.next, depth+1)
    }
    
    return head  
};