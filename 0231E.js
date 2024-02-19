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

/**
 * @param {number} n
 * @return {boolean}
 * Runtime: 72 ms, faster than 51.88% of JavaScript online submissions for Power of Two.
 * Memory Usage: 51.8 MB, less than 49.47% of JavaScript online submissions for Power of Two.
 */
var isPowerOfTwo = function(n) {
        
    while (n > 1) n /= 2
    
    return n === 1
};

/**
 * @param {number} n
 * @return {boolean}
 * Runtime: 69 ms, faster than 60.52% of JavaScript online submissions for Power of Two.
 * Memory Usage: 53.2 MB, less than 21.25% of JavaScript online submissions for Power of Two.
 */

let powers = [
    1,          2,         4,
    8,         16,        32,
   64,        128,       256,
  512,       1024,      2048,
 4096,       8192,     16384,
32768,      65536,    131072,
262144,     524288,   1048576,
2097152,    4194304,   8388608,
16777216,   33554432,  67108864,
134217728,  268435456, 536870912,
1073741824, 2147483648
]
var isPowerOfTwo = function(n) {
 
return powers.includes(n)
};

/**
 * @param {number} n
 * @return {boolean}
 * Runtime: 64 ms, faster than 74.18% of JavaScript online submissions for Power of Two.
 * Memory Usage: 52.3 MB, less than 46.31% of JavaScript online submissions for Power of Two.
 */

var isPowerOfTwo = function(n) {
        
    return n > 0 && (1073741824 % n == 0); // smarter than log(n)/log(2)
};