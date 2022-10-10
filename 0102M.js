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
 * @return {number[][]}
 * Runtime: 80 ms, faster than 82.09% of JavaScript online submissions for Binary Tree Level Order Traversal.
 * Memory Usage: 44.3 MB, less than 42.98% of JavaScript online submissions for Binary Tree Level Order Traversal.
 */
 var levelOrder = function(root) {
     
    let maxDepth = 0

    let solution = []

    OrderTrav(root,0)

    function OrderTrav (currentNode, nodeDepth){
        if (maxDepth === nodeDepth){
            maxDepth++
            solution.push([])
        }
        if (currentNode === null) return 0
        if (solution[nodeDepth][0] === undefined){
            solution[nodeDepth][0] = currentNode.val
        }
        else{
            solution[nodeDepth].push(currentNode.val)
        }

        return OrderTrav(currentNode.left, nodeDepth + 1) + OrderTrav(currentNode.right, nodeDepth + 1)

    }
    solution.pop()
    return solution
};