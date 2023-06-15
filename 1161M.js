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
 * Runtime: 155 ms, faster than 75.61% of JavaScript online submissions for Maximum Level Sum of a Binary Tree.
 * Memory Usage: 74.4 MB, less than 41.46% of JavaScript online submissions for Maximum Level Sum of a Binary Tree.
 */
var maxLevelSum = function(root) {
    
    let arr = []
    
    check(root,0)
    
    function check (node,level){
        if (node === null)return
        if (arr[level] === undefined)arr.push(node.val)
        else arr[level] += node.val
        return check(node.left, ++level) + check(node.right,level)
    }
    let max = arr[0]
    let index = 0
    for (i=1; i<arr.length; i++){
        if (arr[i] > max){
            max = arr[i]
            index = i
        }
    }
    
    return index+1
    
    
    
};