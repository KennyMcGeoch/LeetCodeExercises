/**
 * @param {number[]} prices
 * @return {number}
 * Runtime 3ms Beats 80.00%
 * Memory 65.49MB Beats 85.00%
 */
var getDescentPeriods = function(prices) {
    let ans = 1
    let curr = 1

    for (let i=1; i<prices.length; i++){
        if (prices[i] === prices[i-1] - 1) curr++
        else curr = 1
        ans += curr
    }

    return ans
};

/**
 * @param {number[]} prices
 * @return {number}
 * Runtime 4ms Beats70.00%
 * Memory 65.82MB Beats 75.00%
 */
var getDescentPeriods = function(prices) {
    let ans = prices.length
    let curr = 0

    for (let i=1; i<prices.length; i++){
        if (prices[i] === prices[i-1] - 1) curr++
        else curr = 0
        if (curr) ans += curr
    }

    return ans
};