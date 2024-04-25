/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * Runtime: 131 ms, faster than 100.00% of JavaScript online submissions for Longest Ideal Subsequence.
 * Memory Usage: 52.6 MB, less than 100.00% of JavaScript online submissions for Longest Ideal Subsequence.
 */
var longestIdealString = function(s, k) {
    
    let arr = new Array(26).fill(0)
    
    function conv(str){
        return str.charCodeAt(0) - 97
    }
    
    for (let i=0; i<s.length; i++){
        let temp = conv(s[i])
        let min = Math.max(0, temp-k)
        let max = Math.min(25, temp+k)
        let best = 0
        for (let j=min; j<=max; j++){
            best = Math.max(best, arr[j])
        }
        arr[temp] = best + 1
    } 
    
    return Math.max(...arr)
    
};