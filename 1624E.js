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

/**
 * @param {string} s
 * @return {number}
 * Runtime: 56 ms, faster than 55.56% of JavaScript online submissions for Largest Substring Between Two Equal Characters.
 * Memory Usage: 42.3 MB, less than 72.22% of JavaScript online submissions for Largest Substring Between Two Equal Characters.
 */
var maxLengthBetweenEqualCharacters = function(s) {
    
    let first = {}
    let min = 0
    
    for (let i=0; i<s.length; i++){
        if (first[s[i]] !== undefined){
            min = Math.max(min, i - first[s[i]])
        }
        else first[s[i]] = i
    }
    
    return min - 1 
    
};