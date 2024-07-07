/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 * Runtime: 55 ms, faster than 91.11% of JavaScript online submissions for Water Bottles II.
Memory Usage: 51.4 MB, less than 24.44% of JavaScript online submissions for Water Bottles II.
 */
var maxBottlesDrunk = function(numBottles, numExchange) {
    let ans = numBottles
    
    while (numBottles >= numExchange){
        ans++
        numBottles -= (numExchange++ - 1)
    }
    return ans
    
};