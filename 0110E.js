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
 * Runtime: 133 ms, faster than 32.91% of JavaScript online submissions for Balanced Binary Tree.
 * Memory Usage: 47.6 MB, less than 34.55% of JavaScript online submissions for Balanced Binary Tree.
 */
 var isBalanced = function(root) {


    function checkTree(node){
        if (node === null) return 1
        if (Math.abs(checkMaxDepth(node.left, 0) - checkMaxDepth(node.right, 0)) > 1){
            return 0
        }
        return Math.min(checkTree(node.left),checkTree(node.right))
    }


    function checkMaxDepth(node, depth){

        if (node === null) return depth

        return Math.max(checkMaxDepth(node.left, depth+1),checkMaxDepth(node.right, depth+1))
        
    }
    return checkTree(root)
};