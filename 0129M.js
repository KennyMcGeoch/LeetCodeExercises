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
 * Runtime: 33 ms, faster than 99.85% of JavaScript online submissions for Sum Root to Leaf Numbers.
 * Memory Usage: 49.2 MB, less than 89.89% of JavaScript online submissions for Sum Root to Leaf Numbers.
 */
var sumNumbers = function(root) {
    
    let ans = 0
    let node = root
    
    function trav(node, curr){
        if (node === null) return
        curr += node.val
        if (node.left === null && node.right === null) return ans += Number(curr)
        return trav(node.left, curr) + trav(node.right,curr)
    }
    trav(node,"")
    return ans
    
};