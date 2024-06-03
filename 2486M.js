/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 * Runtime: 53 ms, faster than 82.76% of JavaScript online submissions for Append Characters to String to Make Subsequence.
 * Memory Usage: 53.6 MB, less than 11.49% of JavaScript online submissions for Append Characters to String to Make Subsequence.
 */
var appendCharacters = function(s, t) {
    
    let count = 0
    for (let i=0; i<s.length; i++){
        if (s[i] === t[count]){
            count++
            if (count === t.length) return 0
        }
    }
    
    return t.length - count
    
};

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 * Runtime: 53 ms, faster than 82.76% of JavaScript online submissions for Append Characters to String to Make Subsequence.
 * Memory Usage: 52.2 MB, less than 66.67% of JavaScript online submissions for Append Characters to String to Make Subsequence.
 */
var appendCharacters = function(s, t) {
    
    let count = 0
    for (let i=0; i<s.length; i++){
        if (s[i] === t[count]) count++
    }
    return t.length - count
    
};