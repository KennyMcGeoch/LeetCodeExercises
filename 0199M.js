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
 * @return {number[]}
 * Runtime: 91 ms, faster than 73.74% of JavaScript online submissions for Binary Tree Right Side View.
 * Memory Usage: 43.8 MB, less than 48.13% of JavaScript online submissions for Binary Tree Right Side View.
 */
 var rightSideView = function(root) {
    
    let solution = []
    
    function addRight(node,depth) {
        if (node === null) return
        if (solution[depth] === undefined){
            solution[depth] = node.val
        }
        return addRight(node.right, depth+1) + addRight(node.left, depth+1)
    }
    
    addRight(root,0)
    
    return solution    
};