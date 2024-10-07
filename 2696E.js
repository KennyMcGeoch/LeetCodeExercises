/**
 * @param {string} s
 * @return {number}
 * Runtime: 78 ms, faster than 89.93% of JavaScript online submissions for Minimum String Length After Removing Substrings.
 * Memory Usage: 53 MB, less than 89.93% of JavaScript online submissions for Minimum String Length After Removing Substrings.
 */
var minLength = function(s) {
    
    let stack = []
    
    for (let i=0; i<s.length; i++){
        if (stack.length === 0) stack.push(s[i])
        else if (stack[stack.length-1] === "A" && s[i] === "B") stack.pop()
        else if (stack[stack.length-1] === "C" && s[i] === "D") stack.pop()
        else stack.push(s[i])
    }
    
    return stack.length
    
};