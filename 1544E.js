/**
 * @param {string} s
 * @return {string}
 * Runtime: 152 ms, faster than 7.80% of JavaScript online submissions for Make The String Great.
 * Memory Usage: 44.2 MB, less than 67.38% of JavaScript online submissions for Make The String Great.
 */
 var makeGood = function(s) {

    let change = true

    while (change){
        change = false
        for (i=0; i<s.length-1; i++){
            if (Math.abs(s.charCodeAt(i) - s.charCodeAt(i+1)) === 32){
                s = s.slice(0,i) + s.slice(i+2)
                change = true
                break
            }
        }
    }

    return s
    
};

/**
 * @param {string} s
 * @return {string}
 * Runtime: 48 ms, faster than 95.27% of JavaScript online submissions for Make The String Great.
 * Memory Usage: 49.7 MB, less than 98.65% of JavaScript online submissions for Make The String Great.
 */
var makeGood = function(s) {

    let stack = []
    
    for (let i=0; i<s.length; i++){
        if (stack.length){
            if (Math.abs(stack[stack.length-1].charCodeAt(0) - s.charCodeAt(i))=== 32) stack.pop()
            else stack.push(s[i])
        }
        else stack.push(s[i])
    }

    return stack.join("")
    
};