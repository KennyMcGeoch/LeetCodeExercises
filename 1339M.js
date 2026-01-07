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
 * Runtime 14ms Beats 53.33%
 * Memory 80.74MB Beats 80.00%
 */
var maxProduct = function(root) {

    let ans = 0

    function sumTrees(node){
        if (node === null) return 0
        node.val += sumTrees(node.left) + sumTrees(node.right)
        return node.val
    }

    sumTrees(root)
    
    function trav(node, sum){
        if (node === null) return
        node.val += sum
        if (node.left && node.right){
            ans = Math.max((node.val - node.left.val) * node.left.val, (node.val - node.right.val) * node.right.val, ans)
            return trav(node.left, node.val - node.left.val) + trav(node.right, node.val - node.right.val)
        }
        else if (node.left){
            ans = Math.max((node.val - node.left.val) * node.left.val, ans)
            return trav(node.left, node.val - node.left.val)
        }
        else if (node.right){
            ans = Math.max((node.val - node.right.val) * node.right.val, ans)
            return trav(node.right, node.val - node.right.val)
        }
        else return
    }
    trav(root,0)
    return ans % 1000000007
    
};