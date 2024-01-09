/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 * Runtime: 48 ms, faster than 95.05% of JavaScript online submissions for Leaf-Similar Trees.
 * Memory Usage: 44.4 MB, less than 63.47% of JavaScript online submissions for Leaf-Similar Trees.
 */
var leafSimilar = function(root1, root2) {
    
    let arr = []
    let arrTwo = []
    trav(root1)
    trave(root2)
    
    function trav(node){
        if (node === null) return
        if (node.left === null){
            if (node.right === null) return arr.push(node.val)
            else return trav(node.right)
        }
        else{
            return trav(node.left) + trav(node.right)
        }
    }
    function trave(node){
        if (node === null) return
        if (node.left === null){
            if (node.right === null) return arrTwo.push(node.val)
            else return trave(node.right)
        }
        else{
            return trave(node.left) + trave(node.right)
        }
    }
    if (arr.length !== arrTwo.length) return false
    for (let i=0; i<arr.length; i++) if (arr[i] !== arrTwo[i]) return false
    
    return true
    
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 * Runtime: 42 ms, faster than 98.97% of JavaScript online submissions for Leaf-Similar Trees.
 * Memory Usage: 44.9 MB, less than 18.68% of JavaScript online submissions for Leaf-Similar Trees.
 */
var leafSimilar = function(root1, root2) {
    
    let arr = []
    let val = 0
    let recursion = false
    trav(root1)
    trave(root2)
    
    function trav(node){
        if (node === null) return
        if (node.left === null){
            if (node.right === null) return arr.push(node.val)
            else return trav(node.right)
        }
        else{
            return trav(node.left) + trav(node.right)
        }
    }
    function trave(node){
        if (recursion) return
        if (node === null) return
        if (node.left === null){
            if (node.right === null){
                if (node.val !== arr[val++]) recursion = true
                return
            }
            else return trave(node.right)
        }
        else{
            return trave(node.left) + trave(node.right)
        }
    }
    if (recursion) return false
    if (val !== arr.length) return false
    
    return true
    
};