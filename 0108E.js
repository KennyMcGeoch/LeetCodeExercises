/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 * Runtime: 137 ms, faster than 21.52% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
 * Memory Usage: 45 MB, less than 14.52% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
 */
 var sortedArrayToBST = function(nums) {

    let node = {val:null, left:null, right:null}
    
    function createTree(node, arr){
        if (arr.length === 0){
            node = null
            return 
        }
        else if (arr.length === 1){
            node.val = arr[0]
            return
        }
        initialElem = parseInt(arr.length/2)
        node.val = arr[initialElem]
        let left = arr.slice(0,initialElem)
        let right = arr.slice(initialElem+1, arr.length)
        if (right.length > 0){
            node.right = {val:null, left:null, right:null}
            createTree(node.right, right) 
            
        }
        else {node.right = null}
                if (left.length > 0){
            node.left = {val:null, left:null, right:null}
            createTree(node.left, left) 
            
        }
        else {node.left = null}

        return 
    }
    createTree(node,nums)
    return node
};