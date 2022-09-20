/**
 * @param {number[]} prices
 * @return {number}
 * Runtime: 135 ms, faster than 41.83% of JavaScript online submissions for Best Time to Buy and Sell Stock.
Memory Usage: 51.5 MB, less than 85.55% of JavaScript online submissions for Best Time to Buy and Sell Stock.
 */
 var maxProfit = function(prices) {
    let profit = 0;
    let smallestNum = 10000;
        for (i=0; i<prices.length; i++){
            if (prices[i] < smallestNum){
                smallestNum = prices[i]
            }
            if (prices[i] - smallestNum > profit){
                profit = prices[i] - smallestNum
            }
        }
    return profit
};

maxProfit([897,265,201,86,56,657,273,25,843,625,641]);
