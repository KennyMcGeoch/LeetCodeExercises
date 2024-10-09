/**
 * @param {string} s
 * @return {number}
 * Runtime: 39 ms, faster than 99.32% of JavaScript online submissions for Minimum Add to Make Parentheses Valid.
 * Memory Usage: 48.8 MB, less than 82.88% of JavaScript online submissions for Minimum Add to Make Parentheses Valid.
 */
var minAddToMakeValid = function(s) {
    let left = 0
    let total = 0
    
    for (let i=0; i<s.length; i++){
        if (s[i] ==="(")left++
        else if (left-- === 0){
            total++
            left++
        }
    }
    
    return left + total
    
};