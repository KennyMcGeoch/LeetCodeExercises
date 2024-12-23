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
 * Runtime: 129 ms, faster than 100.00% of JavaScript online submissions for Minimum Number of Operations to Sort a Binary Tree by Level.
 * Memory Usage: 102.1 MB, less than 7.69% of JavaScript online submissions for Minimum Number of Operations to Sort a Binary Tree by Level.
 */
var minimumOperations = function(root) {
    let arr = [[]]
    let ans = 0
    
    function fillArr(node, depth){
        if (node === null) return
        if (arr[depth]) arr[depth].push(node.val)
        else arr.push([node.val])
        return fillArr(node.left, depth+1) + fillArr(node.right, depth+1)
    }
    fillArr(root,0)
    
    for (let i=0; i<arr.length; i++){
        let comp = []
        for (let j=0; j<arr[i].length; j++) comp[j] = j
        comp.sort((a,b)=> arr[i][a] - arr[i][b])
        let count = 0
        while(count < comp.length){
            while(count !== comp[count]){
                let temp = comp[comp[count]]
                comp[comp[count]] = comp[count]
                comp[count] = temp
                ans++
            }
            count++
        }
    }
    
    return ans
    
};