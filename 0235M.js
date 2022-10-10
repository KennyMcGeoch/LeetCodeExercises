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
 * Runtime: 119 ms, faster than 66.72% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
 * Memory Usage: 52.4 MB, less than 29.47% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
 */
 var lowestCommonAncestor = function(root, p, q) {

    if (root === p || root === q)return root
    if (p.val > q.val){
        return treeTraversal(root,p.val,q.val)
    }
    else{
        return treeTraversal(root,q.val,p.val)
    }


    function treeTraversal(root,p,q){
        if (root === null)return
        if (root.val >= q && root.val <= p)return root
        if (root.val >= q && root.val >= p){
            return treeTraversal(root.left,p,q)
        }
        else{
            return treeTraversal(root.right,p,q)
        }
    }
    return
};