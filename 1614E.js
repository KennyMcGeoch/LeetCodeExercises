/**
 * @param {string} s
 * @return {number}
 * Runtime: 48 ms, faster than 82.23% of JavaScript online submissions for Maximum Nesting Depth of the Parentheses.
 * Memory Usage: 48.5 MB, less than 86.82% of JavaScript online submissions for Maximum Nesting Depth of the Parentheses.
 */
var maxDepth = function(s) {
    
    let curr = 0
    let max = 0
    
    for (let i=0; i<s.length; i++){
        if (s[i] === "("){
            curr++
            max = Math.max(curr,max)
        }
        else if(s[i] === ")")curr--
    }
    return max
    
};