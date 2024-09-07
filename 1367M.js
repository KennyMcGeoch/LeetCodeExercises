/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 * Runtime: 66 ms, faster than 72.34% of JavaScript online submissions for Linked List in Binary Tree.
 * Memory Usage: 55.7 MB, less than 93.62% of JavaScript online submissions for Linked List in Binary Tree.
 */
var isSubPath = function(head, root) {
    
    let ans = false
    
    function trav(node){
        if (node === null) return
        else if (ans) return
        if (node.val === head.val) check(node, head)
        return trav(node.left) + trav(node.right)
    }
    
    function check(node, listNode){
        if (listNode === null){
            ans = true
            return
        }
        else if (node === null) return
        else if (node.val !== listNode.val) return
        return check(node.left, listNode.next) + check (node.right, listNode.next)
    }
    
    trav(root)
    
    return ans
    
};