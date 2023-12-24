/**
 * @param {string} s
 * @return {number}
 * Runtime: 54 ms, faster than 70.69% of JavaScript online submissions for Minimum Changes To Make Alternating Binary String.
 * Memory Usage: 42.2 MB, less than 82.76% of JavaScript online submissions for Minimum Changes To Make Alternating Binary String.
 */
var minOperations = function(s) {
    
    let count = 0
    
    for (let i=0; i<s.length; i++) if (i%2 == s[i]) count++
    
    return Math.min(count, s.length-count)    
};