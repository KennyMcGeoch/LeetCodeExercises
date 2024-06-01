/**
 * @param {string} s
 * @return {number}
 * Runtime: 54 ms, faster than 85.81% of JavaScript online submissions for Score of a String.
 * Memory Usage: 49.3 MB, less than 94.11% of JavaScript online submissions for Score of a String.
 */
var scoreOfString = function(s) {
    
    let ans = 0
    for (let i=1; i<s.length; i++) ans += Math.abs(s.charCodeAt(i) - s.charCodeAt(i-1))
    return ans
    
};