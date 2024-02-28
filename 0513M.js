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
 * Runtime: 49 ms, faster than 97.66% of JavaScript online submissions for Find Bottom Left Tree Value.
 * Memory Usage: 52.2 MB, less than 61.99% of JavaScript online submissions for Find Bottom Left Tree Value.
 */
var findBottomLeftValue = function(root) {
    
    let maxDepth = -1
    let ans = null
    
    function trav(node,depth){
        if (node === null) return
        else if (node.left === null && node.right === null){
            if (depth > maxDepth){
                ans = node.val
                maxDepth = depth
            }
            return
        }
        trav(node.left, depth+1)
        trav(node.right, depth+1)
        return
    }
    trav(root,0)
    return ans
    
};