/**
 * @param {number} n
 * @return {number}
 * Runtime: 63 ms, faster than 24.59% of JavaScript online submissions for Minimum Cuts to Divide a Circle.
 * Memory Usage: 42 MB, less than 32.79% of JavaScript online submissions for Minimum Cuts to Divide a Circle.
 */
var numberOfCuts = function(n) {
    if (n === 1) return 0
    return n / ((n + 1) % 2 +1)
};

/**
 * @param {number} n
 * @return {number}
 * Runtime: 56 ms, faster than 60.66% of JavaScript online submissions for Minimum Cuts to Divide a Circle.
 * Memory Usage: 41.7 MB, less than 67.21% of JavaScript online submissions for Minimum Cuts to Divide a Circle.
 */
var numberOfCutsTwo = function(n) {
    if (n % 2 === 0) return n / 2
    else if (n === 1) return 0
    else return n
};

