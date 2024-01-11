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
 * Runtime: 49 ms, faster than 98.08% of JavaScript online submissions for Maximum Difference Between Node and Ancestor.
 * Memory Usage: 45.9 MB, less than 23.46% of JavaScript online submissions for Maximum Difference Between Node and Ancestor.
 */
var maxAncestorDiff = function(root) {
    
    let diff = 0
    
    trav(root)
    
    function trav(node){
        let temp = []
        if (node.left !== null){
            if (node.right !== null){
                temp.push(...trav(node.left), ...trav(node.right))
                let min = Math.min(temp[0], temp[2])
                let max = Math.max(temp[1], temp[3])
                diff = Math.max(diff, Math.abs(node.val-min), Math.abs(node.val-max))
                if (min > node.val) min = node.val
                if (max < node.val) max = node.val
                return [min, max]
            }
            else{ 
                temp.push(...trav(node.left))
                diff = Math.max(diff, Math.abs(node.val-temp[0]), Math.abs(node.val-temp[1]))
                if (temp[0] > node.val) temp[0] = node.val
                if (temp[1] < node.val) temp[1] = node.val
                return [temp[0], temp[1]]
            }
        }
        else if (node.right !== null){
            temp.push(...trav(node.right))
            diff = Math.max(diff, Math.abs(node.val-temp[0]), Math.abs(node.val-temp[1]))
            if (temp[0] > node.val) temp[0] = node.val
            if (temp[1] < node.val) temp[1] = node.val
            return [temp[0], temp[1]]
        }
        else return [node.val, node.val]
        
    }
    
    return diff
    
};