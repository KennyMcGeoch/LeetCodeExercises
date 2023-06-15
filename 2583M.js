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
 * @param {number} k
 * @return {number}
 * Runtime: 316 ms, faster than 97.62% of JavaScript online submissions for Kth Largest Sum in a Binary Tree.
 * Memory Usage: 116.3 MB, less than 28.57% of JavaScript online submissions for Kth Largest Sum in a Binary Tree.
 */
var kthLargestLevelSum = function(root, k) {
    
    let arr = []
    check(root, 0)
    
    function check(node, level){
        if (node === null)return 
        if (arr[level] === undefined)arr.push(node.val)
        else arr[level] += node.val
        return check(node.left, ++level) + check(node.right, level)
    }
    if (k > arr.length)return -1
    arr.sort((a,b)=>a-b)
    return arr[arr.length-k]
};