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
 * Runtime 6ms Beats 96.15%
 * Memory 65.26MB Beats 11.54%
 */
let hash
var FindElements = function(root) {
    hash = new Set()
    root.val = 0
    function recur(node){
         hash.add(node.val)

        if (node.left){
            node.left.val = (node.val * 2) + 1
            recur(node.left)
        }
        if (node.right){
            node.right.val = (node.val * 2) + 2
            recur(node.right)
        }
        return
    }
    recur(root)
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
    return hash.has(target)
};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */