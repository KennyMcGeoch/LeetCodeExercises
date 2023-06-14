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
 * Runtime: 84 ms, faster than 29.21% of JavaScript online submissions for Minimum Absolute Difference in BST.
 * Memory Usage: 49.8 MB, less than 14.59% of JavaScript online submissions for Minimum Absolute Difference in BST.
 */
var getMinimumDifference = function(root) {
    
    let solution = []
    check(root)
    
    function check(root){
        if (root === null)return
        solution.push(root.val)
        return check(root.left) + check(root.right)
    }
    solution.sort((a,b)=>a-b)
    let total = solution[1] - solution[0]
    for (i=2; i<solution.length; i++){
        let temp = solution[i]-solution[i-1]
        if (temp < total){
            total = temp
            if (total === 1)return total
        }
    }
    return total
    
};