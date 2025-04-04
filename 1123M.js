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
 * Runtime 1ms Beats 93.41%
 * Memory 58.71MB Beats 61.68%
 */
var lcaDeepestLeaves = function(root) {
    let arr = []
    let ans = 0

    fillArr(root,0)
    let target = arr[arr.length-1]
    recur(root,0)
    
    function fillArr(node,depth){
        if (node === null) return
        if (depth === arr.length) arr[depth] = 1
        else arr[depth]++
        return fillArr(node.left,depth+1) + fillArr(node.right, depth+1)
    }

    function recur(node, depth){
        if (node === null) return 0
        let total = 0
        if (depth === arr.length-1) total++
        total += recur(node.left,depth+1) + recur(node.right,depth+1)
        if (ans) return 0
        if (total === target) ans = node
        return total
    }

    return ans
};  