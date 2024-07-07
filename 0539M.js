/**
 * @param {string[]} timePoints
 * @return {number}
 * Runtime: 44 ms, faster than 98.04% of JavaScript online submissions for Minimum Time Difference.
 * Memory Usage: 51.5 MB, less than 79.41% of JavaScript online submissions for Minimum Time Difference.
 */
var findMinDifference = function(timePoints) {
    
    for (let i=0; i<timePoints.length; i++){
        timePoints[i] = conv(timePoints[i])
    }
    
    function conv(str){
        let num = 0
        num += (Number(str.slice(0,2)) * 60)
        num += Number(str.slice(3,5))
        return num
    }
    
    timePoints.sort((a,b)=>a-b)
    timePoints.push(timePoints[0] + 1440)
    
    let min = timePoints[1] - timePoints[0]
    for (let i=2; i<timePoints.length; i++) min = Math.min(min, timePoints[i] - timePoints[i-1])
    
    return min
};