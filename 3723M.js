/**
 * @param {number} num
 * @param {number} sum
 * @return {string}
 * Runtime 405ms Beats 16.67%
 * Memory 78.18MB Beats 25.00%
 */
var maxSumOfSquares = function(num, sum) {
    if (sum > num * 9) return ""

    let ans = ""

    for (let i=0; i<num; i++){
        ans += Math.min(sum, 9)
        sum -= Math.min(sum, 9)
    }

    return ans
};

/**
 * @param {number} num
 * @param {number} sum
 * @return {string}
 * Runtime 1ms Beats 75.00%
 * Memory 60.91MB Beats 91.67%
 */
var maxSumOfSquares = function(num, sum) {
    if (sum > num * 9) return ""

    let ans = ""

    ans += "9".repeat(Math.floor(sum/9))
    if (ans.length < num)ans += sum%9
    if (ans.length < num)ans += "0".repeat(num - ans.length)

    return ans
};