/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 * Runtime: 36 ms, faster than 99.15% of JavaScript online submissions for Water Bottles.
 * Memory Usage: 48.8 MB, less than 28.81% of JavaScript online submissions for Water Bottles.
 */
var numWaterBottles = function(numBottles, numExchange) {
    
    let ans = numBottles
    let empty = numBottles
    
    while (empty >= numExchange){
        ans += Math.floor(empty/numExchange)
        empty = (empty % numExchange) + Math.floor(empty/numExchange)
    }
    
    return ans
    
};

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 * Runtime: 41 ms, faster than 96.61% of JavaScript online submissions for Water Bottles.
 * Memory Usage: 48.7 MB, less than 55.93% of JavaScript online submissions for Water Bottles.
 */
var numWaterBottles = function(numBottles, numExchange) {
    
    let ans = numBottles
    
    while (numBottles >= numExchange){
        ans += Math.floor(numBottles/numExchange)
        numBottles = (numBottles % numExchange) + Math.floor(numBottles/numExchange)
    }
    
    return ans
    
};