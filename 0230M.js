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
 * Runtime: 83 ms, faster than 89.07% of JavaScript online submissions for Kth Smallest Element in a BST.
 * Memory Usage: 48.8 MB, less than 19.09% of JavaScript online submissions for Kth Smallest Element in a BST.
 */
 var kthSmallest = function(root, k) {
    
    let solutionArray = []
    
    function arrayAdd(node){
        if (node === null) return 0
        solutionArray.push(node.val)
        return arrayAdd(node.left) + arrayAdd(node.right)
    }
    arrayAdd(root)
    solutionArray.sort((a,b)=>a-b)
    return solutionArray[k-1]
};