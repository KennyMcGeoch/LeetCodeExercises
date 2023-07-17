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
 * Runtime: 211 ms, faster than 83.62% of JavaScript online submissions for Minimum Depth of Binary Tree.
Memory Usage: 100.3 MB, less than 10.46% of JavaScript online submissions for Minimum Depth of Binary Tree.
 */
var minDepth = function(root) {
    
    if (root === null)return 0
    let minDepth = Infinity
    
    checkDepth(root,1)
    
    function checkDepth(node,depth){
        if (depth > minDepth) return
        if (node === null) return
        if (node.left === null && node.right === null){
            minDepth = Math.min(minDepth, depth)
            return
        }
        return checkDepth(node.left,depth+1) + checkDepth(node.right,depth+1)
    }
    
    return minDepth  
};