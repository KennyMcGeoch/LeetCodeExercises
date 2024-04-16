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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 * Runtime: 71 ms, faster than 82.89% of JavaScript online submissions for Add One Row to Tree.
 * Memory Usage: 55.6 MB, less than 38.16% of JavaScript online submissions for Add One Row to Tree.
 */
var addOneRow = function(root, val, depth) {
    
    if (depth === 1) return {val: val, left:root, right:null}
    
    let node = root
    
    function trav(node, dist){
        if (node === null)return
        else if (++dist === depth ){
            let tempLeft = node.left
            let tempRight = node.right
            node.left = {val:val, left:tempLeft,right:null}
            node.right = {val:val, left:null, right:tempRight}
        }
        else if (dist > depth) return
        return trav(node.left,dist) + trav(node.right,dist)
    }
    
    trav(node,1)
    
    return root
    
    
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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 * Runtime: 72 ms, faster than 78.95% of JavaScript online submissions for Add One Row to Tree.
 * Memory Usage: 55.1 MB, less than 71.05% of JavaScript online submissions for Add One Row to Tree.
 * Runtime: 80 ms, faster than 35.53% of JavaScript online submissions for Add One Row to Tree.
 * Memory Usage: 54.3 MB, less than 100.00% of JavaScript online submissions for Add One Row to Tree.
 */
var addOneRow = function(root, val, depth) {
    
    if (depth === 1) return {val: val, left:root, right:null}
    
    let node = root
    
    function trav(node, dist){
        if (node === null)return
        else if (++dist === depth ){
            let tempLeft = node.left
            let tempRight = node.right
            node.left = {val:val, left:tempLeft,right:null}
            node.right = {val:val, left:null, right:tempRight}
            return
        }
        return trav(node.left,dist) + trav(node.right,dist)
    }
    
    trav(node,1)
    
    return root
    
    
};