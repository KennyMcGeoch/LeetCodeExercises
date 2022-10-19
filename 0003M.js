/**
 * @param {string} s
 * @return {number}
 * Runtime: 157 ms, faster than 53.93% of JavaScript online submissions for Longest Substring Without Repeating Characters.
 * Memory Usage: 45.2 MB, less than 89.01% of JavaScript online submissions for Longest Substring Without Repeating Characters.
 */
 var lengthOfLongestSubstring = function(s) {

    let count = 0
    let stack = []
    let iterations = s.length

    for (i=0; i<iterations; i++){
        if (stack.includes(s[i]) === false){
            stack.push(s[i])
            if (stack.length > count){
                count = stack.length
            }
        }
        else{
            while(stack.includes(s[i])){
                stack.shift()
            }
            stack.push(s[i])
        }
    }
    return count
    
};