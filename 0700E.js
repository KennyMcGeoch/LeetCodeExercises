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
 * @param {number} val
 * @return {TreeNode}
 * Runtime: 124 ms, faster than 62.26% of JavaScript online submissions for Search in a Binary Search Tree.
 * Memory Usage: 49.7 MB, less than 7.17% of JavaScript online submissions for Search in a Binary Search Tree.
 */
 var searchBST = function(root, val) {   
    
    function searchTree(node){
        
        if (node === null) return null
        else if (node.val === val)return node
        else if (node.val > val) return searchTree(node.left)
        else return searchTree(node.right)                
    }
    
    return searchTree(root)
};