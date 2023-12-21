/**
 * @param {number[][]} points
 * @return {number}
 * Runtime: 136 ms, faster than 80.28% of JavaScript online submissions for Widest Vertical Area Between Two Points Containing No Points.
 * Memory Usage: 61.7 MB, less than 83.10% of JavaScript online submissions for Widest Vertical Area Between Two Points Containing No Points.
 */
var maxWidthOfVerticalArea = function(points) {
    
    points.sort((a,b)=> a[0] - b[0])
    
    let max = 0
    
    for (let i=1; i<points.length; i++){
        max = Math.max(max, points[i][0] - points[i-1][0])
    }
    
    return max
};