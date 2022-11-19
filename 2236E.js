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
 * Runtime: 87 ms, faster than 74.27% of JavaScript online submissions for Root Equals Sum of Children.
 * Memory Usage: 43.6 MB, less than 37.82% of JavaScript online submissions for Root Equals Sum of Children.
 */
 var checkTree = function(root) {
    return root.val === root.left.val + root.right.val
};