/**
 * @param {number} n
 * @return {boolean}
 * Runtime: 109 ms, faster than 65.84% of JavaScript online submissions for Power of Two.
 * Memory Usage: 43.4 MB, less than 75.19% of JavaScript online submissions for Power of Two.
 */
 var isPowerOfTwo = function(n) {
    if (n < 1) return false
    n = n.toString(2)
    for (i=1; i<n.length; i++){
        if (n[i] === "1")return false
    }
    return true
};