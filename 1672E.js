/**
 * @param {number[][]} accounts
 * @return {number}
 * Runtime: 88 ms, faster than 54.60% of JavaScript online submissions for Richest Customer Wealth.
Memory Usage: 42.4 MB, less than 40.52% of JavaScript online submissions for Richest Customer Wealth.
 */
 var maximumWealth = function(accounts) {
    maxWealth = 0;
    let sum = 0
    for (i=0; i<accounts.length; i++){
        sum = accounts[i].reduce(function(acc, val) { return acc + val; }, 0)
        if (sum > maxWealth){
            maxWealth = sum
        }

    }
    return maxWealth
    
};

maximumWealth([[1,2,3],[2,3,4]])