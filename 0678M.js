/**
 * @param {string} s
 * @return {boolean}
 * Runtime: 46 ms, faster than 84.84% of JavaScript online submissions for Valid Parenthesis String.
 * Memory Usage: 48.9 MB, less than 53.43% of JavaScript online submissions for Valid Parenthesis String.
 */
var checkValidString = function(s) {
    
    let left = 0
    let ast = 0
    
    for (let i=0; i<s.length; i++){
        if (s[i] === "(") left++
        else if (s[i] === "*") ast++
        else{
            if (left > 0)left--
            else if (ast > 0) ast--
            else return false
        }
    }
    
    if (left === 0) return true
    if (ast === 0) return false
    s = s.split("")
    for (let i=0; i<left; i++){
        s[s.lastIndexOf("*")] = ")"
    }
    s = s.join("")
    
    left = 0
    ast = 0
    
    for (let i=0; i<s.length; i++){
        if (s[i] === "(") left++
        else if (s[i] === "*")ast++
        else{
            if (left > 0)left--
            else if (ast > 0) ast--
            else return false
        }
    }
    
    return left === 0
    
};