/**
 * @param {number} n
 * @return {boolean}
 * Runtime: 319 ms, faster than 78.53% of JavaScript online submissions for Power of Three.
 * Memory Usage: 51.2 MB, less than 58.86% of JavaScript online submissions for Power of Three.
 */
 var isPowerOfThree = function(n) {
    if ( n === 1) return true
    else if (n < 3) return false
    n = n.toString(3)
    if (n[0] !== "1") return false
    for (i=1; i<n.length; i++){
        if (n[i] !== "0")return false
    }
    return true
};