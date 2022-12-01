/**
 * @param {number} n
 * @return {boolean}
 * Runtime: 112 ms, faster than 56.93% of JavaScript online submissions for Power of Four.
 * Memory Usage: 43.7 MB, less than 44.71% of JavaScript online submissions for Power of Four.
 */
 var isPowerOfFour = function(n) {
    if ( n === 1) return true
    else if (n < 4) return false
    n = n.toString(4)
    if (n[0] !== "1") return false
    for (i=1; i<n.length; i++){
        if (n[i] !== "0")return false
    }
    return true    
};