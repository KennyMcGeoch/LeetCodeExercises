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
 * @return {TreeNode}
 * Runtime: 87 ms, faster than 65.97% of JavaScript online submissions for Invert Binary Tree.
 * Memory Usage: 42.6 MB, less than 29.31% of JavaScript online submissions for Invert Binary Tree.
 */
 var invertTree = function(root) {
    
    let leftVal
    
    let node = root
    
    invert(node)
    
    function invert(node){
        
        if (node === null) return 0
        
        leftVal = node.left
        
        node.left = node.right
        node.right = leftVal
        
        return invert(node.left) + invert(node.right)
        
    }
    
    return root
    
};