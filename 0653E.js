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
 * Runtime: 165 ms, faster than 38.29% of JavaScript online submissions for Two Sum IV - Input is a BST.
 * Memory Usage: 52.1 MB, less than 39.59% of JavaScript online submissions for Two Sum IV - Input is a BST.
 */
 var findTarget = function(root, k) {

    let valueHash = {}

    if (checkTarget(root)===1) return true

    function checkTarget(node){
        if (node === null) return 0
        if (valueHash[(k-node.val)])return 1
        else {valueHash[node.val] = true}
        return Math.max(checkTarget(node.left),checkTarget(node.right))
    }

    return false    
};