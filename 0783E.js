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
 * Runtime: 59 ms, faster than 67.83% of JavaScript online submissions for Minimum Distance Between BST Nodes.
 * Memory Usage: 43.1 MB, less than 93.10% of JavaScript online submissions for Minimum Distance Between BST Nodes.
 */
var minDiffInBST = function(root) {
    
    let solution = treeTraversal(root)

    function treeTraversal(node){
        if (node === null)return []

        return [...treeTraversal(node.left), node.val, ...treeTraversal(node.right)]
    }
    let total = solution[1] - solution[0]
    for (i=2; i<solution.length; i++){
        let temp = solution[i]-solution[i-1]
        if (temp < total){
            total = temp
            if (total === 1)return total
        }
    }
    return total
    
};