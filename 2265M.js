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
 * Runtime: 58 ms, faster than 80.85% of JavaScript online submissions for Count Nodes Equal to Average of Subtree.
 * Memory Usage: 46.3 MB, less than 87.94% of JavaScript online submissions for Count Nodes Equal to Average of Subtree.
 */
var averageOfSubtree = function(root) {
    
    let total = 0
    
    trav(root)
    
    function trav(node){
        if (node === null) return [0,0]
        
        let left = trav(node.left)
        let right = trav(node.right)
        
        let sumNum = node.val + left[0] + right[0]
        let totalNum = (left[1]+right[1]+1)
        let temp = Math.floor(sumNum/totalNum)
        if (temp === node.val)total++
        
        return [sumNum, totalNum]
    }
    
    return total
    
};