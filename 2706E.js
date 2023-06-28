/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 * Runtime: 105 ms, faster than 46.80% of JavaScript online submissions for Buy Two Chocolates.
 * Memory Usage: 47.1 MB, less than 26.68% of JavaScript online submissions for Buy Two Chocolates.
 */
var buyChoco = function(prices, money) {
    
    prices.sort((a,b)=>a-b)
    let cost = prices[0] + prices[1]
    
    if (cost > money) return money
    
    return money - cost
    
};