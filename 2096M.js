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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 * Runtime: 275 ms, faster than 61.63% of JavaScript online submissions for Step-By-Step Directions From a Binary Tree Node to Another.
 * Memory Usage: 94.2 MB, less than 63.95% of JavaScript online submissions for Step-By-Step Directions From a Binary Tree Node to Another.
 * Runtime: 281 ms, faster than 58.14% of JavaScript online submissions for Step-By-Step Directions From a Binary Tree Node to Another.
 * Memory Usage: 90.7 MB, less than 96.51% of JavaScript online submissions for Step-By-Step Directions From a Binary Tree Node to Another.
 */
var getDirections = function(root, startValue, destValue) {
    
    let start = ""
    let dest = ""
    
    function trav(node, path){
        if (start && dest) return
        if (node === null) return
        if (node.val === startValue) start = path
        if (node.val === destValue) dest = path
        return trav(node.left, path + "L") + trav(node.right, path + "R")
    }
    
    trav(root,"")
    
    let mutAnc = 0
    while (start[mutAnc] === dest[mutAnc]) mutAnc++
    
    let ans = ""
    for (let i=mutAnc; i<start.length; i++) ans += "U"
    ans += dest.slice(mutAnc)
    
    return ans
    
};