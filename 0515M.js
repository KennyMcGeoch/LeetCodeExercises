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
 * Runtime: 62 ms, faster than 84.38% of JavaScript online submissions for Find Largest Value in Each Tree Row.
 * Memory Usage: 46.9 MB, less than 55.36% of JavaScript online submissions for Find Largest Value in Each Tree Row.
 */
var largestValues = function(root) {
    
    let solution = []
    nav(root,0)
    
    function nav(node, depth){
        if (node === null) return
        if (solution[depth] === undefined)solution[depth] = node.val
        else if (node.val > solution[depth]) solution[depth] = node.val
        return nav(node.left, ++depth) + nav(node.right, depth)
    }
    return solution
    
};

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
 * Runtime 0ms Beats100.00%
 * Memory 52.48MB Beats 94.41%
 */
var largestValues = function(root) {
    let ans = []
    
    function recur(node, depth){
        if (node === null) return 
        if (ans[depth] !== undefined) ans[depth] = Math.max(ans[depth],node.val)
        else ans[depth] = node.val
        return recur(node.left, depth+1) + recur(node.right, depth+1)
        }
    recur(root,0)
    return ans
};