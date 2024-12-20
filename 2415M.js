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
 * Runtime: 26 ms, faster than 42.42% of JavaScript online submissions for Reverse Odd Levels of Binary Tree.
 * Memory Usage: 73.5 MB, less than 95.45% of JavaScript online submissions for Reverse Odd Levels of Binary Tree.
 */
var reverseOddLevels = function(root) {
    
    let arr = []
    
    function fill(node,depth){
        if (node === null) return
        if (arr[depth]) arr[depth].push(node.val)
        else arr.push([node.val])
        return fill(node.left, depth+1) + fill(node.right, depth+1)
    }
    
    function empty(node,depth){
        if (node === null) return
        node.val = arr[depth].pop()
        return empty(node.left, depth+1) + empty(node.right, depth+1)
    }
    
    fill(root,0)
    for (let i=2; i<arr.length; i++){
        if (i % 2 === 0) arr[i].reverse()
    }
    empty(root,0)
    return root
    
};