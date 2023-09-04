/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 * Runtime: 37 ms, faster than 99.02% of JavaScript online submissions for Number of Common Factors.
 * Memory Usage: 41.8 MB, less than 73.04% of JavaScript online submissions for Number of Common Factors.
 */
var commonFactors = function(a, b) {
    
    let ans = 0
    let loops = Math.min(a,b) + 1
    
    for (let i=1; i<loops; i++){
        if (a%i === 0 && b%i === 0)ans++
    }
    
    return ans
    
};