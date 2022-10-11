/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * Runtime: 148 ms, faster than 17.08% of JavaScript online submissions for Remove Linked List Elements.
 * Memory Usage: 46.5 MB, less than 65.69% of JavaScript online submissions for Remove Linked List Elements.
 */
 var removeElements = function(head, val) {

    while (head && head.val === val){
        head = head.next
    }
    if (head === null) return head

    let node = head
    while (node.next){
        if (node.next.val === val){
            node.next = node.next.next
        }
        else{
            node = node.next
        }
    }
    return head

    
};

removeElements({val:2, next: {val:1, next:{val:3, next:null}}},1)