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
 * Runtime: 65 ms, faster than 83.26% of JavaScript online submissions for Find Mode in Binary Search Tree.
 * Memory Usage: 50.8 MB, less than 36.40% of JavaScript online submissions for Find Mode in Binary Search Tree.
 */
var findMode = function(root) {
    
    let arr = trav(root)
    let ans = []
    let max = 0
    let curr = 0
    
    function trav(node){
        if (node === null) return []
        return [...trav(node.left), node.val, ...trav(node.right)]
    }
    for (let i=0; i<arr.length; i++){
        if (arr[i] === arr[i+1])curr++
        else{
            if (curr > max){
                max = curr
                ans = [arr[i]]
            }
            else if (curr === max){
                ans.push(arr[i])
            }
            curr = 0

        }
    }
    
    if (curr > max){
        max = curr
        ans = [arr[i]]
        }
    else if (curr === max && curr > 0){
        ans.push(arr[arr.length-1])
        }
    
    return ans
};