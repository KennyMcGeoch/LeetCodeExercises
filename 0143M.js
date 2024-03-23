/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 * Runtime: 115 ms, faster than 10.78% of JavaScript online submissions for Reorder List.
 * Memory Usage: 59 MB, less than 24.49% of JavaScript online submissions for Reorder List.
 */
var reorderList = function(head) {
    let arr = []
    let node = head
    while (node !== null){
        arr.push(node)
        node = node.next
    }
    node = head
    while(arr.length){
        node.next = arr.shift()
        node = node.next
        if (arr.length){
            node.next = arr.pop()
            node = node.next
        }
    }
    node.next = null
};