/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 * Runtime: 102 ms, faster than 33.91% of JavaScript online submissions for Same Tree.
 * Memory Usage: 42.1 MB, less than 69.20% of JavaScript online submissions for Same Tree.
 */
 var isSameTree = function(p, q) {
    
    let a1 = []
    let a2 = []
    
    function insertToArrayA(node){
        if (node === null){
            a1.push(null)
            return 0
        }
        a1.push(node.val)
        return insertToArrayA(node.left) + insertToArrayA(node.right)
    }
    function insertToArrayB(node){
        if (node === null){
            a2.push(null)
            return 0
        }
        a2.push(node.val)
        return insertToArrayB(node.left) + insertToArrayB(node.right)
    }
    insertToArrayA(p)
    insertToArrayB(q)
    
    
    return JSON.stringify(a1)==JSON.stringify(a2)
    
};