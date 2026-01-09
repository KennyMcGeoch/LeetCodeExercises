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
 * @return {TreeNode}
 * Runtime 0ms Beats 100.00%
 * Memory 55.92MB Beat 97.78%
 */
var subtreeWithAllDeepest = function(root) {
    let hash = new Array(501)

    function depth(node, val){
        if (node === null) return 0
        val = Math.max(val, depth(node.left,val+1), depth(node.right, val+1))
        hash[node.val] = val
        return val
    }

    let ans

    function trav(node){
        if (node.left && node.right){
            if (hash[node.left.val] === hash[node.right.val]){
                ans = node
                return
            }
            else if (hash[node.left.val] > hash[node.right.val]) return trav(node.left)
            else return trav(node.right)
        }
        if (node.left) return trav(node.left)
        if (node.right) return trav(node.right)
        ans = node
        return
    }

    depth(root,0)
    trav(root)
    return ans
};