/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 * Runtime: 61 ms, faster than 68.12% of JavaScript online submissions for Calculate Delayed Arrival Time.
 * Memory Usage: 41.9 MB, less than 89.22% of JavaScript online submissions for Calculate Delayed Arrival Time.
 */
var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
    
    return (arrivalTime + delayedTime) % 24
    
};