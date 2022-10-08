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
 * Runtime: 83 ms, faster than 83.02% of JavaScript online submissions for Maximum Depth of Binary Tree.
 * Memory Usage: 44.2 MB, less than 99.20% of JavaScript online submissions for Maximum Depth of Binary Tree.
 */
 var maxDepth = function(root) {

    if (root === null) return 0
    return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1  
};