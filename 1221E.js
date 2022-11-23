/**
 * @param {string} s
 * @return {number}
 * Runtime: 58 ms, faster than 98.11% of JavaScript online submissions for Split a String in Balanced Strings.
 * Memory Usage: 41.6 MB, less than 94.71% of JavaScript online submissions for Split a String in Balanced Strings.
 */
 var balancedStringSplit = function(s) {
    
    let count = 0
    let iterations = s.length
    let total = 0
    
    for (i=0; i<iterations; i++){
        if (s[i] === "L")count++
        else count--
        if (count === 0)total++        
    }
    return total
};