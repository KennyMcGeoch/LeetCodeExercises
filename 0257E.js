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
 * @return {string[]}
 * Runtime: 107 ms, faster than 43.99% of JavaScript online submissions for Binary Tree Paths.
 * Memory Usage: 44 MB, less than 25.72% of JavaScript online submissions for Binary Tree Paths.
 */
 var binaryTreePaths = function(root) {
    
    let solution = []
    
    if (root.left === null && root.right === null)return [root.val.toString()]
    
    path(root.left, root.val)
    path(root.right, root.val)
    
    function path(node,str){
        if (node === null)return 0
        let newStr = str + "->" + node.val
        if (node.left === null && node.right === null){
            solution.push(newStr)
            return
        }
        return path(node.left, newStr) + path(node.right, newStr)
    }
    return solution    
};