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
 * @return {boolean}
 * Runtime: 46 ms, faster than 100.00% of JavaScript online submissions for Evaluate Boolean Binary Tree.
 * Memory Usage: 55.8 MB, less than 35.98% of JavaScript online submissions for Evaluate Boolean Binary Tree.
 */
var evaluateTree = function(root) {
    
    if (root.val === 0 || root.val === 1) return root.val
    else if (root.val === 2) return evaluateTree(root.left) || evaluateTree(root.right)
    else return evaluateTree(root.left) && evaluateTree(root.right)
    
};

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
 * @return {boolean}
 * Runtime: 54 ms, faster than 90.48% of JavaScript online submissions for Evaluate Boolean Binary Tree.
 * Memory Usage: 55.2 MB, less than 79.37% of JavaScript online submissions for Evaluate Boolean Binary Tree.
 */
var evaluateTree = function(root) {
    
    if (root.val < 2) return root.val
    else if (root.val === 2) return evaluateTree(root.left) || evaluateTree(root.right)
    else return evaluateTree(root.left) && evaluateTree(root.right)
    
};