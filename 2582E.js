/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 * Runtime: 44 ms, faster than 92.68% of JavaScript online submissions for Pass the Pillow.
Memory Usage: 48.8 MB, less than 51.22% of JavaScript online submissions for Pass the Pillow.
 */
var passThePillow = function(n, time) {
    
    if (parseInt(time/(n-1)) % 2 == 0) return (time % (n-1)) + 1
    else return n - (time % (n-1))
};

/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 * Runtime: 47 ms, faster than 90.24% of JavaScript online submissions for Pass the Pillow.
 * Memory Usage: 48.3 MB, less than 95.12% of JavaScript online submissions for Pass the Pillow.
 */
var passThePillow = function(n, time) {
    
    if (Math.floor(time/(n-1)) % 2 == 0) return (time % (n-1)) + 1
    else return n - (time % (n-1))
};