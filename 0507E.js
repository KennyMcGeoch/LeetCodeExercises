/**
 * @param {number} num
 * @return {boolean}
 * Runtime: 49 ms, faster than 95.16% of JavaScript online submissions for Perfect Number.
 * Memory Usage: 48.6 MB, less than 87.62% of JavaScript online submissions for Perfect Number.
 */
var checkPerfectNumber = function(num) {
    
    if (num === 6 || num === 28 || num === 496 || num === 8128 || num === 33550336) return true
    else return false
    
};