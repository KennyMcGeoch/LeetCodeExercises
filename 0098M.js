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
 * Runtime: 126 ms, faster than 28.73% of JavaScript online submissions for Validate Binary Search Tree.
 * Memory Usage: 46.4 MB, less than 42.36% of JavaScript online submissions for Validate Binary Search Tree.
 */
 var isValidBST = function(root) {

    function ValidTree(node, minVal, maxVal){
        if (node === null)return 1
        if (node.left !== null){
            if (node.left.val >= node.val || node.left.val <= minVal) return 0
        }
        if (node.right !== null){
            if (node.right.val <= node.val || node.right.val >= maxVal) return 0
        }        
        return Math.min(ValidTree(node.left,minVal,node.val),ValidTree(node.right,node.val,maxVal))
    }
    return ValidTree(root,Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)    
};