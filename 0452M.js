/**
 * @param {number[][]} points
 * @return {number}
 * Runtime: 174 ms, faster than 99.56% of JavaScript online submissions for Minimum Number of Arrows to Burst Balloons.
 * Memory Usage: 72.2 MB, less than 88.31% of JavaScript online submissions for Minimum Number of Arrows to Burst Balloons.
 */
var findMinArrowShots = function(points) {
    
    points.sort((a,b)=>a[1]-b[1])
    let ans = 0
    
    for (let i=0; i<points.length; i++){
        ans++
        let target = points[i][1]
        
        while(i < points.length-1 && points[i+1][0] <= target)i++
    }
    
    return ans
    
};