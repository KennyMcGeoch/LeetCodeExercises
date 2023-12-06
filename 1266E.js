/**
 * @param {number[][]} points
 * @return {number}
 * Runtime: 51 ms, faster than 79.01% of JavaScript online submissions for Minimum Time Visiting All Points.
 * Memory Usage: 43.8 MB, less than 58.56% of JavaScript online submissions for Minimum Time Visiting All Points.
 */
var minTimeToVisitAllPoints = function(points) {
    
    let ans = 0
    
    for (let i=1; i<points.length; i++)ans += Math.max(Math.abs(points[i][0]-points[i-1][0]),Math.abs(points[i][1]-points[i-1][1]))
    
    return ans
};