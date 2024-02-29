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
 * Runtime: 198 ms, faster than 52.63% of JavaScript online submissions for Even Odd Tree.
 * Memory Usage: 92.5 MB, less than 28.07% of JavaScript online submissions for Even Odd Tree.
 */
var isEvenOddTree = function(root) {
    
    let level = []
    let invalid = false
    
    check(root, 0)
    
    function check(node, depth){
        if (invalid) return
        if (node === null) return
        let odd = depth % 2
        if (node.val % 2 === odd){
            invalid = true
            return
        }
        if (depth === level.length) level.push(node.val)
        else if (odd){
            if (node.val < level[depth]) level[depth] = node.val
            else{
                invalid = true
                return
            }
        }
        else{
            if (node.val > level[depth]) level[depth] = node.val
            else{
                invalid = true
                return
            }
        }
        check(node.left, depth+1)
        check(node.right, depth+1)
        return
    }
    
    return !(invalid)
    
};