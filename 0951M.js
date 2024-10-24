/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 * Runtime: 0 ms, faster than 100.00% of JavaScript online submissions for Flip Equivalent Binary Trees.
 * Memory Usage: 51.1 MB, less than 80.39% of JavaScript online submissions for Flip Equivalent Binary Trees.
 */
var flipEquiv = function(node1, node2) {

    if(node1 === null && node2 === null) return 1
    if(node1 === null || node2 === null) return 0
    if (node1.val !== node2.val) return 0
    if (node1.left && node2.left){
        if (node1.left.val === node2.left.val){
            return Math.min(flipEquiv(node1.left, node2.left),flipEquiv(node1.right, node2.right))
        }
        else return Math.min(flipEquiv(node1.left, node2.right),flipEquiv(node1.right, node2.left))
    }
    if (node1.right && node2.right){
        if (node1.right.val === node2.right.val){
            return Math.min(flipEquiv(node1.left, node2.left),flipEquiv(node1.right, node2.right))
        }
        else return Math.min(flipEquiv(node1.left, node2.right),flipEquiv(node1.right, node2.left))
    }
    else return Math.max(Math.min(flipEquiv(node1.left, node2.left)),flipEquiv(node1.right, node2.right)),Math.min(flipEquiv(node1.left, node2.right),flipEquiv(node1.right, node2.left))
    return 
};