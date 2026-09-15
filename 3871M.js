/**
 * @param {number} n
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 55.47MB Beats 79.73%
 */
var countCommas = function(n) {
    return Math.max(0, n-999, (2*n) - 1000998, (3*n)-1001000997, (4*n)-1001001000996, (5*n) - 1001001001000995)
};