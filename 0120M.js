/**
 * @param {number[][]} triangle
 * @return {number}
 * Runtime: 39 ms, faster than 99.54% of JavaScript online submissions for Triangle.
 * Memory Usage: 49.6 MB, less than 9.18% of JavaScript online submissions for Triangle.
 */
var minimumTotal = function(triangle) {
    
    if (triangle.length === 1) return triangle[0][0]
    triangle[1][0] += triangle[0][0]
    triangle[1][1] += triangle[0][0]
    
    for (let i=2; i<triangle.length; i++){
        triangle[i][0] += triangle[i-1][0]
        for (let j=1; j<triangle[i].length-1; j++){
            triangle[i][j] += Math.min(triangle[i-1][j-1], triangle[i-1][j])
        }
        triangle[i][i] += triangle[i-1][i-1]
    }
    
    return Math.min(...triangle[triangle.length-1])
    
};