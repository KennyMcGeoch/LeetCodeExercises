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
 * @return {TreeNode}
 * Runtime: 54 ms, faster than 52.22% of JavaScript online submissions for Binary Search Tree to Greater Sum Tree.
 * Memory Usage: 50.2 MB, less than 6.83% of JavaScript online submissions for Binary Search Tree to Greater Sum Tree.
 */
var bstToGst = function(root) {
    
    function trav(node){
        if (node === null) return []
        return [...trav(node.left), node.val, ...trav(node.right)]
    }
    
    let ans = trav(root)
    let digit = 0
    for (let i=ans.length-1; i>0; i--) ans[i-1] += ans[i]
    
    function fill(node){
        if (node === null) return
        fill(node.left)
        node.val = ans[digit++]
        return fill(node.right)
    }
    
    fill(root)
    
    return root
    
};