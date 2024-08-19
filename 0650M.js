/**
 * @param {number} n
 * @return {number}
 * Runtime: 92 ms, faster than 17.28% of JavaScript online submissions for 2 Keys Keyboard.
 * Memory Usage: 47.8 MB, less than 100.00% of JavaScript online submissions for 2 Keys Keyboard.
 */
var minSteps = function(n) {
    
    if (n === 1) return 0
    
    let ans = Infinity
    
    function recur(len, add, ops){
        if (len === n){
            ans = Math.min(ans, ops)
            return
        }
        else if (len > n) return
        if (ops > ans) return
        recur(len * 2, len , ops + 2)
        recur(len + add, add, ops + 1)
    }
    recur(1,1,1)
    
    return ans
    
};