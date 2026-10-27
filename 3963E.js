/**
 * @param {number} m
 * @param {number} n
 * @return {string[]}
 * Runtime 1ms Beats 100.00%
 * Memory 56.50MB Beats 75.00%
 */
var createGrid = function(m, n) {
    let ans = [".".repeat(n)]
    for (let i=1; i<m; i++) ans.push("#".repeat(n-1)+".")
    return ans
};