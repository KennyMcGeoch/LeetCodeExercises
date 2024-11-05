/**
 * @param {string} s
 * @return {number}
 * Runtime: 0 ms, faster than 100.00% of JavaScript online submissions for Minimum Number of Changes to Make Binary String Beautiful.
 * Memory Usage: 51.1 MB, less than 100.00% of JavaScript online submissions for Minimum Number of Changes to Make Binary String Beautiful.
 */
var minChanges = function(s) {
    let ans = 0
    
    for (let i=0; i<s.length; i += 2){
        if (s[i] !== s[i+1])ans++
    }
    return ans
};