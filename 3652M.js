/**
 * @param {number[]} prices
 * @param {number[]} strategy
 * @param {number} k
 * @return {number}
 * Runtime 7ms Beats 100.00%
 * Memory 78.25MB Beats 90.91%
 */
var maxProfit = function(prices, strategy, k) {
    let ans = 0

    for (let i=0; i<prices.length; i++) ans += (prices[i]*strategy[i])

    let curr = ans

    for (let i=0; i<k/2; i++) curr -= (prices[i]*strategy[i])
    for (let i=k/2; i<k; i++) curr += (prices[i] * (1-strategy[i]))
    ans = Math.max(ans,curr)
    for (let i=k; i<prices.length; i++){
        curr += (prices[i-k] * strategy[i-k])
        curr -= prices[i-(k/2)]
        curr += (prices[i] * (1-strategy[i]))
        ans = Math.max(ans,curr)
    }

    return ans
};