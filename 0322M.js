/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * Runtime: 425 ms, faster than 17.15% of JavaScript online submissions for Coin Change.
 * Memory Usage: 51.1 MB, less than 14.68% of JavaScript online submissions for Coin Change.
 */
 var coinChange = function(coins, amount) {
    
    let minCoin = {0:0}
    let iterations = amount + 1
    let iterationsC = coins.length
    coins.sort((a,b)=>b-a)

    for (i=1; i<iterations;i++){
        for (j=0; j<iterationsC; j++){
            if (minCoin[i-coins[j]] !== undefined){
                if (minCoin[i] === undefined){
                    minCoin[i] = minCoin[i-coins[j]] + 1
                }
                else{
                    minCoin[i] = Math.min(minCoin[i],minCoin[i-coins[j]] + 1)
                }

            }
        }
    }
    if (minCoin[amount] === undefined) return -1
    return minCoin[amount]
};