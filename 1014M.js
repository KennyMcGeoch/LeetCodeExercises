/**
 * @param {number[]} values
 * @return {number}
 * Runtime 2ms Beats 81.25%
 * Memory 53.54MB Beats 100.00%
 */
var maxScoreSightseeingPair = function(values) {
    let ans = 0
    let curr = values[0] - 1

    for (let i=1; i<values.length; i++){
        ans = Math.max(curr + values[i], ans)
        curr = Math.max(curr, values[i])
        curr--
    }

    return ans
};