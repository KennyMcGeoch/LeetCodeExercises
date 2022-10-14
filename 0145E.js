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
 * Runtime: 107 ms, faster than 21.25% of JavaScript online submissions for Binary Tree Postorder Traversal.
 * Memory Usage: 42 MB, less than 65.79% of JavaScript online submissions for Binary Tree Postorder Traversal.
 */
 var postorderTraversal = function(root) {   

    if (root === null)return []
    let solution = treeTraversal(root)

    function treeTraversal(node,row){
        if (node === null)return []

        return [...treeTraversal(node.left), ...treeTraversal(node.right),node.val]
    }
    return solution
    
};