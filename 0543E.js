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
 * Runtime: 182 ms, faster than 6.78% of JavaScript online submissions for Diameter of Binary Tree.
 * Memory Usage: 46.2 MB, less than 16.92% of JavaScript online submissions for Diameter of Binary Tree.
 */
 var diameterOfBinaryTree = function(root) {
    
    function calcDepth(node){
        if (node === null) return 0
        diameter = calcDiameter(node.left, 0) + calcDiameter(node.right, 0)
        return Math.max (diameter, calcDepth(node.left), calcDepth(node.right))

    }

    function calcDiameter(node, depth){
        if (node === null) return depth
        return Math.max(calcDiameter(node.left, depth+1), calcDiameter(node.right, depth+1))

        
    }

    return calcDepth(root)
};