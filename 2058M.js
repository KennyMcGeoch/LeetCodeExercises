/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 * Runtime: 118 ms, faster than 97.87% of JavaScript online submissions for Find the Minimum and Maximum Number of Nodes Between Critical Points.
 * Memory Usage: 77.7 MB, less than 85.11% of JavaScript online submissions for Find the Minimum and Maximum Number of Nodes Between Critical Points.
 */
var nodesBetweenCriticalPoints = function(head) {
    
    let crit = []
    let ind = 0
    
    let prev = head.val
    let node = head.next
    
    while(node.next !== null){
        if (prev < node.val){
            if (node.next.val < node.val){
                crit.push(ind)
            }
        }
        else if (prev > node.val){
            if (node.next.val > node.val){
                crit.push(ind)
            }
        }
        ind++
        prev = node.val
        node = node.next
    }
    if (crit.length < 2) return [-1,-1]
    
    let ans = [Infinity, crit[crit.length-1]-crit[0]]
    
    for (let i=1; i<crit.length; i++) ans[0] = Math.min(ans[0], crit[i]-crit[i-1])
    
    return ans
};