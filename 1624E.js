/**
 * @param {string} s
 * @return {number}
 * Runtime: 63 ms, faster than 23.33% of JavaScript online submissions for Largest Substring Between Two Equal Characters.
 * Memory Usage: 42.6 MB, less than 52.22% of JavaScript online submissions for Largest Substring Between Two Equal Characters.
 */
var maxLengthBetweenEqualCharacters = function(s) {
    
    let first = {}
    let last = {}
    
    for (let i=0; i<s.length; i++){
        if (first[s[i]] !== undefined) last[s[i]] = i
        else first[s[i]] = i
    }
    
    let min = 0

    for (x in last){
        min = Math.max(min, last[x] - first[x])
    }
    
    return min - 1 
    
};