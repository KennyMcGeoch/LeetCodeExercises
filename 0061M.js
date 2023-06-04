/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * Runtime: 67 ms, faster than 65.54% of JavaScript online submissions for Rotate List.
 * Memory Usage: 44.4 MB, less than 27.19% of JavaScript online submissions for Rotate List.
 */
var rotateRight = function(head, k) {
    
    let temp = []
    
    let node = head
    
    while (node !== null){
        temp.push(node.val)
        node = node.next
    }
    
    if (k > temp.length) k = k % temp.length
    
    for (let i=0; i<k; i++){
        let val = temp.pop()
        temp.unshift(val)
    }
    
    node = head
    let i = 0
    while (node!== null){
        node.val = temp[i++]
        node = node.next
    }
    
    return head
    
};