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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 * Runtime: 64 ms, faster than 98.71% of JavaScript online submissions for Delete Nodes And Return Forest.
 * Memory Usage: 56.2 MB, less than 87.55% of JavaScript online submissions for Delete Nodes And Return Forest.
 */
var delNodes = function(root, to_delete) {
    
    let ans = []
    
    function startTrav(node){
        if (node === null) return
        if (to_delete.includes(node.val)) return startTrav(node.left) + startTrav(node.right)
        trav(node)
        ans.push(node)
        return
        
    }
    
    function trav(node){
        if (node === null) return
        if (node.left && to_delete.includes(node.left.val)){
            startTrav(node.left.left)
            startTrav(node.left.right)
            node.left = null
        }
        if (node.right && to_delete.includes(node.right.val)){
            startTrav(node.right.left)
            startTrav(node.right.right)
            node.right = null
        }
        return trav(node.left) + trav(node.right)
    }
    
    startTrav(root)
    return ans
};