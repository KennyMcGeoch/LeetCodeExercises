/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 * Runtime: 147 ms, faster than 94.60% of JavaScript online submissions for Total Distance Traveled.
 * Memory Usage: 49.7 MB, less than 31.75% of JavaScript online submissions for Total Distance Traveled.
 */
var distanceTraveled = function(mainTank, additionalTank) {
    
    let usage = 0
    while (mainTank > 4){
        usage += 5
        mainTank -= 5
        if (additionalTank-- > 0)mainTank++
    }
    usage += mainTank
    return usage * 10
};