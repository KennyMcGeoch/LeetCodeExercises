/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 * Runtime: 104 ms, faster than 49.66% of JavaScript online submissions for Teemo Attacking.
Memory Usage: 45.6 MB, less than 43.96% of JavaScript online submissions for Teemo Attacking.
 */
 var findPoisonedDuration = function(timeSeries, duration) {

    let iterations = timeSeries.length - 1
    let damage = duration

    for (i=0; i<iterations; i++){
        if (timeSeries[i+1] - timeSeries[i] < duration){
            damage += timeSeries[i+1] - timeSeries[i]
        }
        else{
            damage += duration
        }
    }
    
    return damage
    
};