/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 * Runtime: 72 ms, faster than 64.26% of JavaScript online submissions for Delete Leaves With a Given Value.
 * Memory Usage: 53.3 MB, less than 85.53% of JavaScript online submissions for Delete Leaves With a Given Value.
 */
var removeLeafNodes = function(root, target) {
    
    trav(root)
    
    function trav(node){
        if (node === null) return
        let left = trav(node.left)
        let right = trav(node.right)
        if (left) node.left = null
        if (right) node.right = null
        if (node.left === null && node.right === null && node.val === target) return true
        return false
    }
    if (root.left === null && root.right === null && root.val === target) return null
    return root
    
};