/**
 * @param {string} s
 * @return {number}
 * Runtime 5ms Beats 100.00%
 * Memory 55.60MB Beats 100.00%
 */
var maxOperations = function(s) {
    let ans = 0
    let ones = 0
    let prev = false
    for (let i=0; i<s.length; i++){
        if (s[i] === "0"){
            if (prev) ans += ones
            prev = false
        }
        else{
            ones++
            prev = true
        }
    }
    return ans
};