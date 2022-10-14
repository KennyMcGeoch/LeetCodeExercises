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
 * Runtime: 66 ms, faster than 90.62% of JavaScript online submissions for Binary Tree Inorder Traversal.
 * Memory Usage: 42 MB, less than 68.93% of JavaScript online submissions for Binary Tree Inorder Traversal.
 */
 var inorderTraversal = function(root) {

    
    if (root === null)return []
    let solution = treeTraversal(root)

    function treeTraversal(node,row){
        if (node === null)return []

        return [...treeTraversal(node.left), node.val, ...treeTraversal(node.right)]
    }
    return solution
    
};