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
 * Runtime: 103 ms, faster than 65.42% of JavaScript online submissions for Remove Duplicates from Sorted List II.
 * Memory Usage: 44.2 MB, less than 77.70% of JavaScript online submissions for Remove Duplicates from Sorted List II.
 */
 var deleteDuplicates = function(head) {
    
    let prev = {val:-101, next:head}
    let solution = prev
    
    traverse(prev.next)
    
    function traverse (node){
        if (node === null || node.next === null) return        
        
        if (node.val === node.next.val){
            if (node.next.next === null) prev.next = null
            else if (node.val === node.next.next.val){
                prev.next = node.next
            }
            else{
                prev.next = node.next.next
            }
        }
        else{
            prev = node
        }
        return traverse(prev.next)        
    }
    
    return solution.next
    
};