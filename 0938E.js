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
 * @param {number} low
 * @param {number} high
 * @return {number}
 * Runtime: 103 ms, faster than 98.28% of JavaScript online submissions for Range Sum of BST.
 * Memory Usage: 97.2 MB, less than 17.45% of JavaScript online submissions for Range Sum of BST.
 */
var rangeSumBST = function(root, low, high) {
    
    let ans = 0
    
    function trav(node){
        if (node === null) return
        
        if (node.val >= low){
            trav(node.left)
            if (node.val <= high){
                ans += node.val
                trav(node.right)
            }            
        }
        else trav(node.right)
    }
    
    trav(root)
    
    return ans
    
};