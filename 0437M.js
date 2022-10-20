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
 * @return {number}
 * Runtime: 249 ms, faster than 19.69% of JavaScript online submissions for Path Sum III.
 * Memory Usage: 50.7 MB, less than 30.32% of JavaScript online submissions for Path Sum III.
 */
 var pathSum = function(root, targetSum) {
     
    let total = 0

    function validPath(node, currentSum){
       if (node === null)return 0
       currentSum += node.val
       if (currentSum === targetSum) total++
       return validPath(node.left,currentSum) + validPath(node.right,currentSum)
    }

    function totalPath(node){
       if (node === null)return 0
       validPath(node,0)
       return totalPath(node.left) + totalPath(node.right)
    }
    
    totalPath(root)

   return total
};