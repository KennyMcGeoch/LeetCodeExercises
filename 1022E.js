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
 * Runtime 1ms Beats 63.79%
 * Memory 57.50MB Beats 51.72%
 */
var sumRootToLeaf = function(root) {
    let ans = 0

    function trav(node, str){
        if (node === null) return
        if (node.left === null && node.right === null){
            calc(str + node.val)
            return
        }
        return trav(node.left, str + node.val) + trav(node.right, str+node.val)
    }

    function calc(str){
        let temp = 0
        for (let i=0; i<str.length; i++){
            temp *= 2
            temp += Number(str[i])
        }
        ans += temp
        return
    }

    trav(root, "")

    return ans
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
 * @param {TreeNode} root
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 56.57MB Beats 68.97%
 */
var sumRootToLeaf = function(root) {
    let ans = 0

    function trav(node, str){
        if (node === null) return
        if (node.left === null && node.right === null){
            ans += parseInt(str+node.val,2)
            return
        }
        return trav(node.left, str + node.val) + trav(node.right, str+node.val)
    }

    trav(root, "")

    return ans
};