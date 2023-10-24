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
 * Runtime: 62 ms, faster than 84.38% of JavaScript online submissions for Find Largest Value in Each Tree Row.
 * Memory Usage: 46.9 MB, less than 55.36% of JavaScript online submissions for Find Largest Value in Each Tree Row.
 */
var largestValues = function(root) {
    
    let solution = []
    nav(root,0)
    
    function nav(node, depth){
        if (node === null) return
        if (solution[depth] === undefined)solution[depth] = node.val
        else if (node.val > solution[depth]) solution[depth] = node.val
        return nav(node.left, ++depth) + nav(node.right, depth)
    }
    return solution
    
};