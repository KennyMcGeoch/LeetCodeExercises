/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 * Runtime: 328 ms, faster than 95.72% of JavaScript online submissions for Delete Nodes From Linked List Present in Array.
 * Memory Usage: 88.8 MB, less than 97.93% of JavaScript online submissions for Delete Nodes From Linked List Present in Array.
 */
var modifiedList = function(nums, head) {
    
    let numSet = new Set()
    
    for (let i=0; i<nums.length; i++) numSet.add(nums[i])
    
    while(head && numSet.has(head.val))head = head.next
    
    let prev = head
    
    let node = head.next
    while(node){
        if (numSet.has(node.val)){
            prev.next = prev.next.next
            node = prev.next
        }
        else{
            prev = node
            node = node.next
        }
    }
    
    return head
    
};