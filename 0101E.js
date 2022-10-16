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
 * @return {boolean}
 * Runtime: 124 ms, faster than 26.54% of JavaScript online submissions for Symmetric Tree.
 * Memory Usage: 45.7 MB, less than 5.31% of JavaScript online submissions for Symmetric Tree.
 */
 var isSymmetric = function(root) {
    
    let leftArray = []
    let rightArray = []
    
    leftArray = getValsL(root.left,0)
    rightArray = getValsR(root.right,0)
    
    function getValsL (node, depth){
        if (node === null) return ["a" + depth]
        return [...getValsL(node.left, depth + 1), node.val, ...getValsL(node.right, depth + 1)]
    }
    function getValsR (node,depth){
        if (node === null) return ["a" + depth]
        return [...getValsR(node.right, depth + 1), node.val, ...getValsR(node.left, depth + 1)]
    }
    let length = rightArray.length
    if (leftArray.length !== length) return false
    
    for (i=0; i<length; i++){
        if (leftArray[i] !== rightArray[i]) return false
    }
    
    return true   
};