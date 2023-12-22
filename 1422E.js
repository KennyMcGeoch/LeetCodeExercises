/**
 * @param {string} s
 * @return {number}
 * Runtime: 55 ms, faster than 76.36% of JavaScript online submissions for Maximum Score After Splitting a String.
 * Memory Usage: 41.7 MB, less than 100.00% of JavaScript online submissions for Maximum Score After Splitting a String.
 */
var maxScore = function(s) {
    
    let ones = 0
    let zeros = 0
    let max = 0
    for (let i=0; i<s.length; i++) ones += Number(s[i])
    
    let loops = s.length-1
    
    for (let i=0; i<loops; i++){
        if (s[i] === "0") zeros++
        else ones--
        max = Math.max(max, zeros+ones)
    }
    return max    
};

/**
 * @param {string} s
 * @return {number}
 * Runtime: 46 ms, faster than 96.36% of JavaScript online submissions for Maximum Score After Splitting a String.
 * Memory Usage: 41.6 MB, less than 100.00% of JavaScript online submissions for Maximum Score After Splitting a String.
 */
var maxScore = function(s) {
    
    let ones = 0
    let zeros = 0
    let max = 0
    for (let i=0; i<s.length; i++) if (s[i] === "1") ones++
    
    let loops = s.length-1
    
    for (let i=0; i<loops; i++){
        if (s[i] === "0") zeros++
        else ones--
        max = Math.max(max, zeros+ones)
    }
    return max    
};