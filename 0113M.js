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
 * @param {number} targetSum
 * @return {number[][]}
 * Runtime: 61 ms, faster than 86.61% of JavaScript online submissions for Path Sum II.
 * Memory Usage: 60.1 MB, less than 23.50% of JavaScript online submissions for Path Sum II.
 */
var pathSum = function(root, targetSum) {
    
    let ans = []
    
    function trav(node, total, arr){
        if (node === null) return
        arr = [...arr]
        arr.push(node.val)
        total += node.val
        if (node.left === null && node.right === null && total === targetSum){
            ans.push(arr)
            return
        }
        return trav(node.left, total, arr) + trav(node.right, total, arr)
    }
    
    trav(root,0,[])
    return ans
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
 * @param {number} targetSum
 * @return {number[][]}
 * Runtime: 72 ms, faster than 44.81% of JavaScript online submissions for Path Sum II.
 * Memory Usage: 51.5 MB, less than 98.22% of JavaScript online submissions for Path Sum II.
 * Runtime: 50 ms, faster than 99.04% of JavaScript online submissions for Path Sum II.
 * Memory Usage: 53.2 MB, less than 46.86% of JavaScript online submissions for Path Sum II.
 */
var pathSum = function(root, targetSum) {
    
    let ans = []
    
    function trav(node, total, arr){
        if (node === null) return
        arr += node.val
        arr += ","
        total += node.val
        if (node.left === null && node.right === null && total === targetSum){
            let temp = arr.split(",").filter((a)=> a !== "")
            //for (let i=0; i<temp.length; i++) temp[i] = Number(temp[i])
            ans.push(temp)
            return
        }
        return trav(node.left, total, arr) + trav(node.right, total, arr)
    }
    
    trav(root,0,",")
    return ans
};