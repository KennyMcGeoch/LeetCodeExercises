/**
 * @param {number} n
 * @return {boolean}
 * Runtime: 49 ms, faster than 95.58% of JavaScript online submissions for Power of Four.
 * Memory Usage: 43.3 MB, less than 63.19% of JavaScript online submissions for Power of Four.
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

/**
 * @param {number} n
 * @return {boolean}
 * Runtime: 54 ms, faster than 83.80% of JavaScript online submissions for Power of Four.
 * Memory Usage: 43.1 MB, less than 74.30% of JavaScript online submissions for Power of Four.
 */
var isPowerOfFour2 = function(n) {
    if (n === 1) return true
    while (n > 4) n /= 4
    return n === 4
};

/**
 * @param {number} n
 * @return {boolean}
 * Runtime: 56 ms, faster than 74.30% of JavaScript online submissions for Power of Four.
 * Memory Usage: 43.8 MB, less than 21.15% of JavaScript online submissions for Power of Four.
 */
var isPowerOfFour3 = function(n) {
    return Number.isInteger(Math.log(n)/Math.log(4))
};