/**
 * @param {string} s
 * @return {number}
 * Runtime 4ms Beats 99.14%
 * Memory 57.08MB Beats 98.28%
 */
var countBinarySubstrings = function(s) {
    let curr = ""
    let currCount = 0
    let prevCount = 0
    let ans = 0

    for (let i=0; i<s.length; i++){
        if (s[i] === curr) currCount++
        else{
            ans += Math.min(currCount,prevCount)
            prevCount = currCount
            currCount = 1
            curr = s[i]
        }
    }
    ans += Math.min(currCount,prevCount)
    return ans
};