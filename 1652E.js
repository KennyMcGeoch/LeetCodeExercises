/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 * Runtime: 2 ms, faster than 56.36% of JavaScript online submissions for Defuse the Bomb.
 * Memory Usage: 49.6 MB, less than 91.88% of JavaScript online submissions for Defuse the Bomb.
 */
var decrypt = function(code, k) {
    let ans = new Array(code.length).fill(0)
    if (k === 0) return ans
    
    if (k < 0){
        k *= -1
        for (let i=0; i<code.length; i++){
            let curr = 0
            for (let j=1; j<=k; j++){
                curr = i + j
                curr %= code.length
                ans[curr] += code[i]
            }
        }
    }
    else {
        for (let i=0; i<code.length; i++){
            let curr = 0
            for (let j=1; j<=k; j++){
                curr = i - j
                curr %= ans.length
                if (curr < 0) curr += ans.length
                ans[curr] += code[i]
            }
        }
    }
    return ans
};