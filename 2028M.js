/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 * Runtime: 230 ms, faster than 72.92% of JavaScript online submissions for Find Missing Observations.
 * Memory Usage: 69.4 MB, less than 66.67% of JavaScript online submissions for Find Missing Observations.
 */
var missingRolls = function(rolls, mean, n) {
    let target = mean * (rolls.length + n)
    for (let i=0; i<rolls.length; i++) target -= rolls[i]
    if (target / n < 1 || target / n > 6) return []
    let ans = []
    for (let i=0; i<n; i++){
        let curr = Math.floor(target/(n-i))
        ans.push(curr)
        target -= curr
    }
    
    return ans
};

/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 * Runtime: 215 ms, faster than 95.83% of JavaScript online submissions for Find Missing Observations.
 * Memory Usage: 65.1 MB, less than 97.92% of JavaScript online submissions for Find Missing Observations.
 */
var missingRolls = function(rolls, mean, n) {
    let target = mean * (rolls.length + n)
    for (let i=0; i<rolls.length; i++) target -= rolls[i]
    if (target / n < 1 || target / n > 6) return []
    let ans = new Array(n).fill(1)
    let extra = target - n
    for (let i=0; i<n; i++){
        if (extra > 4){
            ans[i] = 6
            extra -=5
        }
        else if (extra > 0){
            ans[i] = extra + 1
            extra = 0
        }
        else return ans
    }
    
    return ans
};