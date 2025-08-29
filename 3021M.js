/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 53.05MB Beats 100.00%
 */
var flowerGame = function(n, m) {
    return (Math.ceil(n/2)*Math.floor(m/2)) + (Math.floor(n/2)*Math.ceil(m/2))
};