/**
 * @param {number[][]} points
 * @return {number}
 * Runtime: 110 ms, faster than 100.00% of JavaScript online submissions for Maximum Number of Points with Cost.
 * Memory Usage: 68.4 MB, less than 100.00% of JavaScript online submissions for Maximum Number of Points with Cost.
 */
var maxPoints = function(points) {
    let len = points[0].length
    if (len === 1){
        let ans = 0
        for (let i=0; i<points.length; i++) ans += points[i][0]
        return ans
    }
    
    for (let i=1; i<points.length; i++){
        let max = 0
        for (let j=0; j<len; j++){
            max = Math.max(max,points[i-1][j])
            points[i-1][j] = Math.max(max--, points[i-1][j])
            
        }
        max = 0
        for (let j=len-1; j>=0;j--){
            max = Math.max(max,points[i-1][j])
            points[i-1][j] = Math.max(max--, points[i-1][j])
        }
        for (let j=0; j<len; j++) points[i][j] += points[i-1][j]
    }
    return Math.max(...points[points.length-1])
        
    
};