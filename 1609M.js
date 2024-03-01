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
 * Runtime: 234 ms, faster than 24.56% of JavaScript online submissions for Even Odd Tree.
 * Memory Usage: 95.7 MB, less than 21.05% of JavaScript online submissions for Even Odd Tree.
 */
var isEvenOddTree = function(root) {
    
    let level = [[]]
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
        if (depth === level.length) level.push([node.val])
        else level[depth].push(node.val)
        
        check(node.left, depth+1)
        check(node.right, depth+1)
        return
    }
    
    for (let i=2; i<level.length; i += 2){
        for (let j=1; j<level[i].length; j++){
            if (level[i][j] <= level[i][j-1])return false
        }
    }
    for (let i=1; i<level.length; i += 2){
        for (let j=1; j<level[i].length; j++){
            if (level[i][j] >= level[i][j-1])return false
        }
    }
    
    return !(invalid)
    
};