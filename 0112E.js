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
 * @param {number} targetSum
 * @return {boolean}
 * Runtime: 122 ms, faster than 36.57% of JavaScript online submissions for Path Sum.
 * Memory Usage: 46.1 MB, less than 22.04% of JavaScript online submissions for Path Sum.
 */
 var hasPathSum = function(root, targetSum) {
    
    if (root === null)return false
    
    function treeAdd(node, target){
        if (node === null) return 0
        if (node.left === null && node.right === null && target + node.val === targetSum) {
            return 1}
        if (node.val === undefined) return 0
        if (target === undefined) return 0
        
        return treeAdd(node.left, target + node.val) + treeAdd(node.right,target + node.val)
    }  
    
    return treeAdd(root,0)
    
};