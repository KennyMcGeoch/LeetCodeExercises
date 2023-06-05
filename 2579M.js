/**
 * @param {number} n
 * @return {number}
 * Runtime: 52 ms, faster than 100.00% of JavaScript online submissions for Count Total Number of Colored Cells.
 * Memory Usage: 41.9 MB, less than 72.97% of JavaScript online submissions for Count Total Number of Colored Cells.
 */
var coloredCells = function(n) {
    return n ** 2 + (n-1) ** 2    
};