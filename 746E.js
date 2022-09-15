/**
 * @param {number[]} cost
 * @return {number}
 * Runtime: 130 ms, faster than 10.61% of JavaScript online submissions for Min Cost Climbing Stairs.
Memory Usage: 43.7 MB, less than 53.21% of JavaScript online submissions for Min Cost Climbing Stairs.
 */
 var minCostClimbingStairs = function(cost) {
    cost.unshift(0,0);

    let minCostCalc = 0;
 
        for (i=2; i<cost.length; i++){
            minCostCalc = parseInt(Math.min(cost[i-1], cost[i-2]) + cost[i]);
            cost[i] = minCostCalc
            console.log(minCostCalc)
        } 
    return Math.min(cost[cost.length-1], cost[cost.length-2])  
};

minCostClimbingStairs([841,462,566,398,243,248,238,650,989,576,361,126,334,729,446,897,953,38,195])