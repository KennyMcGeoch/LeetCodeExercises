/**
 * @param {number} cost1
 * @param {number} cost2
 * @param {number} costBoth
 * @param {number} need1
 * @param {number} need2
 * @return {number}
 * Runtime 1ms Beats 100.00%
 * Memory 63.45MB Beats-%
 */
var minimumCost = function(cost1, cost2, costBoth, need1, need2) {

    if (costBoth <= cost1 + cost2){
        let ans = 0
        let common = Math.min(need1,need2)
        ans += (common*costBoth)
        need1 -= common
        need2 -= common
        return ans + (need1*Math.min(costBoth,cost1)) + (need2*Math.min(costBoth,cost2))        
    }

    return (need1*cost1) + (need2*cost2)  
};

/**
 * @param {number} cost1
 * @param {number} cost2
 * @param {number} costBoth
 * @param {number} need1
 * @param {number} need2
 * @return {number}
 * Runtime 1ms Beats 100.00%
 * Memory 59.26MB Beats-%
 */
var minimumCost = function(cost1, cost2, costBoth, need1, need2) {

    if (costBoth <= cost1 + cost2){
        let ans = 0
        let common = Math.min(need1,need2)
        ans += (common*costBoth)
        need1 -= common
        need2 -= common
        if (need1) ans += need1*Math.min(costBoth,cost1)
        else ans += need2*Math.min(costBoth,cost2)  
        return ans      
    }

    return (need1*cost1) + (need2*cost2)  
};