/**
 * @param {string} s
 * @return {number}
 * Runtime: 45 ms, faster than 98.40% of JavaScript online submissions for Score of a String.
 * Memory Usage: 49.5 MB, less than 87.84% of JavaScript online submissions for Score of a String.
 */
var scoreOfString = function(s) {
    
    let ans = 0
    for (let i=1; i<s.length; i++) ans += Math.abs(s.charCodeAt(i) - s.charCodeAt(i-1))
    return ans
    
};

/**
 * @param {string} s
 * @return {number}
 * Runtime: 58 ms, faster than 71.09% of JavaScript online submissions for Score of a String.
 * Memory Usage: 50.8 MB, less than 25.80% of JavaScript online submissions for Score of a String.
 */
var scoreOfString = function(s) {
    
    let ans = 0
    let charCode = []
    for (let i=0; i<s.length; i++) charCode[i] = s.charCodeAt(i)
    for (let i=1; i<s.length; i++) ans += Math.abs(charCode[i] - charCode[i-1])
    return ans
    
};