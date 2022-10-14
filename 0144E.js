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
 * Runtime: 64 ms, faster than 92.95% of JavaScript online submissions for Binary Tree Preorder Traversal.
 * Memory Usage: 42 MB, less than 80.23% of JavaScript online submissions for Binary Tree Preorder Traversal.
 */
 var preorderTraversal = function(root) {
    
    let solution = []
    treeTraversal(root)

    function treeTraversal(node){
        if (node === null)return 0
        solution.push(node.val)
        return treeTraversal(node.left) + treeTraversal(node.right)
    }

    return solution    
};