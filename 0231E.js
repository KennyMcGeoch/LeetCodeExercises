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

/**
 * @param {number} n
 * @return {boolean}
 * Runtime: 69 ms, faster than 60.52% of JavaScript online submissions for Power of Two.
Memory Usage: 53.3 MB, less than 17.88% of JavaScript online submissions for Power of Two.
 */
var isPowerOfTwo = function(n) {
        
    return (Math.log(n) / Math.log(2)).toFixed(10) % 1 === 0
};

/**
 * @param {number} n
 * @return {boolean}
 * Runtime: 76 ms, faster than 39.73% of JavaScript online submissions for Power of Two.
 * Memory Usage: 53.8 MB, less than 6.08% of JavaScript online submissions for Power of Two.
 */
var isPowerOfTwo = function(n) {
        
    n = n.toString(2)
    for (let i = 1; i<n.length; i++) if (n[i] === "1") return false
    
    return n > 0
};