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
 * @return {ListNode[]}
 * Runtime: 53 ms, faster than 95.96% of JavaScript online submissions for Split Linked List in Parts.
 * Memory Usage: 44.3 MB, less than 67.68% of JavaScript online submissions for Split Linked List in Parts.
 */
var splitListToParts = function(head, k) {
    let depth = 0
    let node = head
    let ans = []
    while (node !== null){
        depth++
        node = node.next
    }
    let segment = []
    let split = 0
    while (k > 0){
        let temp = Math.ceil(depth/k--)
        segment.push(temp)
        depth -= temp
    }
    for (let i=0; i<segment.length; i++){
        if (head === null){
            i = segment.length
            continue
        }
        node = head
        for (let j=1; j<segment[i]; j++){
            if (node.next !== null){
                node = node.next
            }
        }
        let curr = node.next
        node.next = null
        ans.push(head)
        head = curr
        
    }
    while (ans.length < segment.length){
        ans.push(null)
    }
    
    return ans
    
};