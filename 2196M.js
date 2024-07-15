/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 * Runtime: 377 ms, faster than 31.43% of JavaScript online submissions for Create Binary Tree From Descriptions.
 * Memory Usage: 75.6 MB, less than 100.00% of JavaScript online submissions for Create Binary Tree From Descriptions.
 */
var createBinaryTree = function(descriptions) {
    
    let node = { null:null}
    let child = new Set()
    
    for (let i=0; i<descriptions.length; i++){
        node[descriptions[i][0]] = {val:descriptions[i][0], left : null, right : null}
        node[descriptions[i][1]] = {val:descriptions[i][1], left : null, right : null}
    }
    
    for (let i=0; i<descriptions.length; i++){
        child.add(descriptions[i][1])
        if (descriptions[i][2] === 0) node[descriptions[i][0]].right = {val :descriptions[i][1], left : null, right : null}
        else node[descriptions[i][0]].left = node[descriptions[i][0]].left = {val :descriptions[i][1], left : null, right : null}
    }
    
    function findRoot(arr){
        for (let i=0; i<arr.length; i++){
            if (child.has(arr[i][0]) === false) return arr[i][0]
        }
        return "root not found"
    }

    let root = node[findRoot(descriptions)]
    
    function recur(curNode){
        if (curNode === null) return
        if (curNode.left !== null){
            curNode.left = node[curNode.left.val]
            recur(curNode.left)
        }
        if (curNode.right !== null){
            curNode.right = node[curNode.right.val]
            recur(curNode.right)
        }
        return
    }
    
    recur(root)
    
    return root
    
};