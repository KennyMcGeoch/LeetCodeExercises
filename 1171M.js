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
 * Runtime: 62 ms, faster than 39.13% of JavaScript online submissions for Remove Zero Sum Consecutive Nodes from Linked List.
 * Memory Usage: 51.9 MB, less than 26.09% of JavaScript online submissions for Remove Zero Sum Consecutive Nodes from Linked List.
 */
var removeZeroSumSublists = function(head) {
    
    let hash = [0]
    let freq = {0:1}
    
    let count = 0
    let sum = 0
    
    let node = head
    
    while(node !== null){
        count++
        sum += node.val
        hash.push(sum)
        node = node.next
        freq[sum] = (freq[sum] || 0) + 1
    }
    let start = 0
    if (freq[0] > 1){
        let loops = hash.lastIndexOf(0)
        for (let i=0; i<loops; i++) head = head.next
        start = loops
    }
    node = head
    while (node !== null){
        start++
        if (freq[hash[start]] > 1){
            let loops = hash.lastIndexOf(hash[start])
            for (let i=0; i<loops-start; i++) node.next = node.next.next
            start = loops
            
        }
        node = node.next        
    }
    
    return head
};