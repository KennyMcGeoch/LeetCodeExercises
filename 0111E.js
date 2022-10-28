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
 * @return {number}
 * Runtime: 267 ms, faster than 84.82% of JavaScript online submissions for Minimum Depth of Binary Tree.
 * Memory Usage: 83.5 MB, less than 89.68% of JavaScript online submissions for Minimum Depth of Binary Tree.
 */
 var minDepth = function(root) {
    
    if (root === null)return 0
    
    function checkDepth(node,depth){
        if (node === null) return Infinity
        if (node.left === null && node.right === null)return depth
        return Math.min(checkDepth(node.left,depth+1),checkDepth(node.right,depth+1))
    }
    
    return checkDepth(root,1)    
};