/**
 * @param {string} s
 * @return {string}
 * Runtime: 154 ms, faster than 39.79% of JavaScript online submissions for Remove All Adjacent Duplicates In String.
 * Memory Usage: 51.9 MB, less than 36.44% of JavaScript online submissions for Remove All Adjacent Duplicates In String.
 */
 var removeDuplicates = function(s) {

    let stack = []
    let iterations = s.length

    for (i=0; i<iterations; i++){
        if (stack.length){
            if (stack[stack.length-1] === s[i]) stack.pop()
            else stack.push(s[i])
        }
        else stack.push(s[i])
    }

    return stack.join("")    
};