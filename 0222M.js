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
 * Runtime: 98 ms, faster than 93.70% of JavaScript online submissions for Count Complete Tree Nodes.
 * Memory Usage: 60.8 MB, less than 99.30% of JavaScript online submissions for Count Complete Tree Nodes.
 */
 var countNodes = function(root) {
    
    function left(node, depth){
        if (node === null) return depth
        return left(node.left, depth+1)
    }
    function right(node, depth){
        if (node === null) return depth
        return right(node.right, depth+1)
    }
    
    let depth = left(root,0)
    let max = 2 ** depth -1
    let divide = (max+1) / 4
    
    traverse(root,divide)
    
    function traverse (node, div){
        if (depth-- === right(node,0))return
        if (div === 1){
            if (node.left === null) max -= 2
            else if (node.right === null) max --
            return
        }
        if (depth === right(node.left,0)) return traverse(node.right, div/2)
        else{
            max -= div
            return traverse(node.left, div/2)
        }
    }
    
    
    return max
};