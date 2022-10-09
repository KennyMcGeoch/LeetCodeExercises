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
 * @param {number} k
 * @return {boolean}
 * Runtime: 236 ms, faster than 6.86% of JavaScript online submissions for Two Sum IV - Input is a BST.
 * Memory Usage: 52.2 MB, less than 28.85% of JavaScript online submissions for Two Sum IV - Input is a BST.
 */
 var findTarget = function(root, k) {

    let valueArray = []

    if (checkTarget(root)===1) return true

    function checkTarget(node){
        if (node === null) return 0
        if (valueArray.includes(k-node.val))return 1
        valueArray.push(node.val)
        return Math.max(checkTarget(node.left),checkTarget(node.right))
    }

    return false    
};