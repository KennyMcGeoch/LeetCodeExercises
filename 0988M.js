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
 * Runtime: 65 ms, faster than 76.47% of JavaScript online submissions for Smallest String Starting From Leaf.
 * Memory Usage: 53.1 MB, less than 97.06% of JavaScript online submissions for Smallest String Starting From Leaf.
 */
var smallestFromLeaf = function(root) {
    
    let ans = []
    
    function trav(node,str){
        if (node === null) return ""
        let char = String.fromCharCode(node.val + 97) + str
        if (node.left === null){
            if (node.right === null){
                return ans.push(char)
            }
            else return trav(node.right,char)
        }
        if (node.right === null)return trav(node.left,char)
        return trav(node.right,char) + trav(node.left,char)
    }
    trav(root,"")
    return ans.sort()[0]
    
};