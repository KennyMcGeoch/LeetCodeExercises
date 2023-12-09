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
 * @return {string}
 * Runtime: 53 ms, faster than 95.39% of JavaScript online submissions for Construct String from Binary Tree.
 * Memory Usage: 46.4 MB, less than 92.76% of JavaScript online submissions for Construct String from Binary Tree.
 */
var tree2str = function(root) {
    
    let str = ""
    
    trav(root)
    
    function trav(node){
        if (node === null) return str += "()"
        str += node.val
        if (node.left === null && node.right === null) return
        else str += "("
        if (node.left === null){
            str += ")("
            trav(node.right)
        }
        else if (node.right === null) trav(node.left)
        else {
            trav(node.left) 
            str += ")("
            trav(node.right)
        }
        str += ")"
        
        return 
    }
        
        return str
    
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
 * @return {string}
 * Runtime: 52 ms, faster than 96.64% of JavaScript online submissions for Construct String from Binary Tree.
 * Memory Usage: 47.3 MB, less than 37.58% of JavaScript online submissions for Construct String from Binary Tree.
 */
var tree2str = function(root) {
    
    let str = ""
    
    trav(root)
    
    function trav(node){
        if (node === null) return str += "()"
        str += node.val
        if (node.left === null){
            if (node.right === null) return
            str += "()("
            trav(node.right)
        }
        else if (node.right === null){
            str += "("
            trav(node.left)
        }
        else {
            str += "("
            trav(node.left) 
            str += ")("
            trav(node.right)
        }
        str += ")"
        
        return 
    }
        
        return str
    
};