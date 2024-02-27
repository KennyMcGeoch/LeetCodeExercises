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
 * Runtime: 182 ms, faster than 6.78% of JavaScript online submissions for Diameter of Binary Tree.
 * Memory Usage: 46.2 MB, less than 16.92% of JavaScript online submissions for Diameter of Binary Tree.
 * Runtime: 93 ms, faster than 10.66% of JavaScript online submissions for Diameter of Binary Tree.
 * Memory Usage: 51.9 MB, less than 35.77% of JavaScript online submissions for Diameter of Binary Tree.
 */
 var diameterOfBinaryTree = function(root) {
    
    function calcDepth(node){
        if (node === null) return 0
        diameter = calcDiameter(node.left, 0) + calcDiameter(node.right, 0)
        return Math.max (diameter, calcDepth(node.left), calcDepth(node.right))

    }

    function calcDiameter(node, depth){
        if (node === null) return depth
        return Math.max(calcDiameter(node.left, depth+1), calcDiameter(node.right, depth+1))

        
    }

    return calcDepth(root)
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
 * Runtime: 84 ms, faster than 13.99% of JavaScript online submissions for Diameter of Binary Tree.
 * Memory Usage: 52.4 MB, less than 16.16% of JavaScript online submissions for Diameter of Binary Tree.
 */
var diameterOfBinaryTree = function(root) {
    
    let ans = 0
     
    function calcDiameter(node){
        
        if (node === null)return
        let left = calcDepth(node.left, 0)
        let right = calcDepth(node.right, 0)
        ans = Math.max(ans, left + right)
        if (ans < left * 2) return calcDiameter(node.left)
        else if (ans < right * 2) return calcDiameter(node.right)
        return      

    }

    function calcDepth(node, depth){
        if (node === null) return depth
        return Math.max(calcDepth(node.left, depth+1), calcDepth(node.right, depth+1))

        
    }
     
    calcDiameter(root)

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
 * Runtime: 55 ms, faster than 88.02% of JavaScript online submissions for Diameter of Binary Tree.
 * Memory Usage: 51.1 MB, less than 61.77% of JavaScript online submissions for Diameter of Binary Tree.
 */
var diameterOfBinaryTree = function(root) {
    
    let ans = 0

    function calcDepth(node, depth){
        if (node === null) return depth
        node.val = Math.max(calcDepth(node.left, depth), calcDepth(node.right, depth)) + 1
        return node.val
    }
     
    function check(node){
        let left = 0, right = 0
        if (node.left !== null) left = node.left.val
        if (node.right !== null) right = node.right.val
        ans = Math.max(ans, left + right)
        if (left * 2 > ans) check(node.left)
        else if (right * 2 > ans) check(node.right)
    }
     
    calcDepth(root,0)
    check(root)

    return ans
};