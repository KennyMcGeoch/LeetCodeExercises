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
 * Runtime: 111 ms, faster than 39.56% of JavaScript online submissions for Sum of Left Leaves.
 * Memory Usage: 44.5 MB, less than 41.17% of JavaScript online submissions for Sum of Left Leaves.
 */
 var sumOfLeftLeaves = function(root) {
    if (root === null) return 0
    let val = 0
    if (root.left && !root.left.left && !root.left.right) val = root.left.val
    return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right) + val
};

sumOfLeftLeaves({val:1, left:{val:2,left:null,right:null},right:null})