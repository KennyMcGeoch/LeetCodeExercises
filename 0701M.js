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
 * @return {TreeNode}
 * Runtime: 207 ms, faster than 26.07% of JavaScript online submissions for Insert into a Binary Search Tree.
 * Memory Usage: 52.7 MB, less than 52.81% of JavaScript online submissions for Insert into a Binary Search Tree.
 */
 var insertIntoBST = function(root, val) {
    
    if (root === null)return {val:val, left:null, right:null}
    
    traverseTree(root)    
    
    function traverseTree(node){
        
        if (node === null){
            return
        }
        else if (node.val > val){  
            if (node.left === null){
                node.left = {val:val, left:null, right:null}
                return
            }
            return traverseTree(node.left)            
        } 
        else{  
            if (node.right === null){
                node.right = {val:val, left:null, right:null}
                return
            }
            return traverseTree(node.right)            
        }         
    }    
    return root    
};