/**
 * @param {string} s
 * @return {number}
 * Runtime: 200 ms, faster than 100.00% of JavaScript online submissions for Find the Longest Semi-Repetitive Substring.
 * Memory Usage: 52.1 MB, less than 100.00% of JavaScript online submissions for Find the Longest Semi-Repetitive Substring.
 */
var longestSemiRepetitiveSubstring = function(s) {
    
    let count = 0
    let totals = []
    
    for (i=0; i<s.length; i++){
        count++
        if (s[i] === s[i+1]){
            totals.push(count)
            count = 0
        }
    }
    totals.push(count)
    let max = totals[0]
    for (i=0; i<totals.length-1; i++){
        let temp = totals[i] + totals[i+1]
        if (temp > max)max = temp
    }
    return max
    
};