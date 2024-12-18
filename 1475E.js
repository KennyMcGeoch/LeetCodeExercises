/**
 * @param {number[]} prices
 * @return {number[]}
 * Runtime: 0 ms, faster than 100.00% of JavaScript online submissions for Final Prices With a Special Discount in a Shop.
 * Memory Usage: 52.1 MB, less than 48.11% of JavaScript online submissions for Final Prices With a Special Discount in a Shop.
 */
var finalPrices = function(prices) {
    let stack = []
    
    for (let i=0; i<prices.length; i++){
        while (stack && prices[i] <= prices[stack[stack.length-1]]){
            prices[stack[stack.length-1]] -= prices[i]
            stack.pop()
        }
        stack.push(i)
    }
    return prices
};