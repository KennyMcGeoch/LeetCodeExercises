/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 * Runtime: 165 ms, faster than 8.41% of JavaScript online submissions for Linked List Cycle II.
 * Memory Usage: 45.3 MB, less than 36.76% of JavaScript online submissions for Linked List Cycle II.
 */
 var detectCycle = function(head) {  

    let node = head
    let nodeIndex = head
    let nodeVisited = []
    if (head === null)return null
    
    for (i=0; i<10001; i++){
        if (head.next === null)return null
        head = head.next
        if (node.next === null || node.next.next === null)return null
        node = node.next.next
        if (head === node) break
    }
    node = nodeIndex
    while(node.next !== null){
        if (nodeVisited.includes(node) === true){
            return node
        }
        else{
            nodeVisited.push(node)
        }
        node = node.next
    }
    return
};