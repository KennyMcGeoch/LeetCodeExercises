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
 * @return {TreeNode}
 * Runtime: 76 ms, faster than 100.00% of JavaScript online submissions for Cousins in Binary Tree II.
 * Memory Usage: 107.1 MB, less than 85.71% of JavaScript online submissions for Cousins in Binary Tree II.
 */
var replaceValueInTree = function(root) {
    
    let arr = []
    root.val = 0
    
    function fillArr(node, depth){
        if (node === null) return
        let temp = 0
        if (node.left) temp += node.left.val
        if (node.right) temp += node.right.val
        if (depth === arr.length) arr.push(temp)
        else arr[depth] += temp
        return fillArr(node.left, depth+1) + fillArr(node.right, depth+1)
    }
    
    function fillTree(node,depth){
        if (node === null) return
        let temp = 0
        if (node.left) temp += node.left.val
        if (node.right) temp += node.right.val
        temp = arr[depth] - temp
        if (node.left) node.left.val = temp
        if (node.right) node.right.val = temp
        return fillTree(node.left, depth+1) + fillTree(node.right, depth+1)
    }
    fillArr(root,0)
    fillTree(root,0)
    return root
};