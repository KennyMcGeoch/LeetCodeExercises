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

/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 * Runtime: 72 ms, faster than 97.04% of JavaScript online submissions for Buy Two Chocolates.
 * Memory Usage: 46 MB, less than 80.00% of JavaScript online submissions for Buy Two Chocolates.
 */
var buyChoco = function(prices, money) {
    
    let min = prices[0]
    let minS
    
    if (prices[1] < prices[0]){
        minS = min
        min = prices[1]
    }
    else minS = prices[1]
    
    for (let i=2; i<prices.length; i++){
        if (prices[i] < minS){
            if (prices[i] < min){
                minS = min
                min = prices[i]
            }
            else minS = prices[i]
        }
    }
    if (money < min + minS) return money
    
    return money - min - minS
    
};