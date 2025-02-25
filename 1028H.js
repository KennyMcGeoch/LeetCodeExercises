/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 * Runtime 13ms Beats 35.00%
 * Memory 62.04MB Beats 25.00%
 */
var recoverFromPreorder = function(traversal) {
    let vals = []
    let count = 0
    let curr = ""
    for (let i=0; i<traversal.length; i++){
        if (traversal[i] === "-"){
            if (curr.length){
                vals.push([Number(curr), count])
                curr = ""
                count = 1
            }
            else count++
        }
        else curr += traversal[i]
    }
    if (curr.length) vals.push([Number(curr), count])
    let root = { val:vals[0][0], left:null , right:null }
    let depth = [root]
    for (let i=1; i<vals.length; i++){
        if (depth[vals[i][1]-1].left === null){
            depth[vals[i][1]-1].left = { val:vals[i][0], left:null , right:null }
            depth[vals[i][1]] = depth[vals[i][1]-1].left
        }
        else{
            depth[vals[i][1]-1].right = { val:vals[i][0], left:null , right:null }
            depth[vals[i][1]] = depth[vals[i][1]-1].right
        }
    }
    return root
};