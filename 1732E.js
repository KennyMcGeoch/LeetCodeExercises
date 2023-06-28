/**
 * @param {number[]} gain
 * @return {number}
 * Runtime: 51 ms, faster than 90.10% of JavaScript online submissions for Find the Highest Altitude.
 * Memory Usage: 41.3 MB, less than 94.79% of JavaScript online submissions for Find the Highest Altitude.
 */
var largestAltitude = function(gain) {
    
    let max = 0
    let curr = 0
    
    for (i=0; i<gain.length; i++){
        curr += gain[i]
        if (curr > max) max = curr
    }
    
    return max
    
};