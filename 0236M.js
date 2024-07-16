/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * Runtime: 57 ms, faster than 94.16% of JavaScript online submissions for Lowest Common Ancestor of a Binary Tree.
 * Memory Usage: 59.2 MB, less than 41.12% of JavaScript online submissions for Lowest Common Ancestor of a Binary Tree.
 */
var lowestCommonAncestor = function(root, p, q) {
    
    let pInd = ""
    let qInd = ""
    
    function trav(node, path){
        if (node === null) return
        if (pInd && qInd) return
        if (node === p) pInd = path
        if (node === q) qInd = path
        return trav(node.left, path + "L") + trav(node.right, path + "R")
    }
    
    function findNode(node, depth){
        if (pInd[depth] !== qInd[depth]) return node
        if (pInd[depth] === "L") return findNode(node.left, depth+1)
        return findNode(node.right, depth+1)
    }
    
    trav(root, "")
    return findNode(root,0)
    
};