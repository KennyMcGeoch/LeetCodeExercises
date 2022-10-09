/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * Runtime: 96 ms, faster than 50.19% of JavaScript online submissions for Search a 2D Matrix.
 * Memory Usage: 42.7 MB, less than 11.86% of JavaScript online submissions for Search a 2D Matrix.
 */
 var searchMatrix = function(matrix, target) {
    
    return matrix.flat().includes(target)
    
};