/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 54.49MB Beats 93.39%
 */
var findClosest = function(x, y, z) {
    if (Math.abs(x-z) > Math.abs(y-z)) return 2
    else if (Math.abs(x-z) < Math.abs(y-z)) return 1
    else return 0
};