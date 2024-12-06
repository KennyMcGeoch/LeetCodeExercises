/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 * Runtime: 44 ms, faster than 84.21% of JavaScript online submissions for Maximum Number of Integers to Choose From a Range I.
 * Memory Usage: 64.8 MB, less than 30.43% of JavaScript online submissions for Maximum Number of Integers to Choose From a Range I.
 */
var maxCount = function(banned, n, maxSum) {
    banned = new Set(banned)
    let ans = 0
    let curr = 0
    
    for (let i=1; i<=n; i++){
        if (banned.has(i))continue
        curr += i
        if (curr > maxSum) return ans
        if (curr === maxSum) return ans + 1
        ans++
    }
    return ans
};