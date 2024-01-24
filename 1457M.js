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
 * Runtime: 446 ms, faster than 12.50% of JavaScript online submissions for Pseudo-Palindromic Paths in a Binary Tree.
 * Memory Usage: 97.2 MB, less than 100.00% of JavaScript online submissions for Pseudo-Palindromic Paths in a Binary Tree.
 */
var pseudoPalindromicPaths  = function(root) {
    
    let arrSum = new Array(10).fill(0)
    let ans = 0
    
    function trav(node, arr){
        let newArr = [...arr]
        if (node === null) return

        if (newArr[node.val] === 1) newArr[node.val]--
        else newArr[node.val]++

        if (node.left === null && node.right === null){
            if (newArr.reduce((a,b)=>(a+b)) < 2) ans++
            return
        }
        
        return trav(node.left, newArr) + trav(node.right, newArr)
    }
    
    trav(root, arrSum)
    
    return ans
    
};