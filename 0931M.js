/**
 * @param {number[][]} matrix
 * @return {number}
 * Runtime: 52 ms, faster than 88.54% of JavaScript online submissions for Minimum Falling Path Sum.
 * Memory Usage: 51.7 MB, less than 5.73% of JavaScript online submissions for Minimum Falling Path Sum.
 */
var minFallingPathSum = function(matrix) {
    
    if (matrix[0].length === 1){
        let sum = 0
        for (let i=0; i<matrix.length; i++)sum += matrix[i][0]
        return sum
    }
    let loops = matrix[0].length - 1
    
    function edge(val, x, y){
        return val + Math.min(matrix[x][y] , matrix[x][y+1])
    }
    
    function mid(val, x, y){
        return val + Math.min(matrix[x][y] , matrix[x][y+1], matrix[x][y-1])
    }
    
    for (let i=1; i<matrix.length; i++){
        matrix[i][0] = edge(matrix[i][0], i-1, 0)
        for (let j=1; j<loops; j++){
            matrix[i][j] = mid(matrix[i][j],i-1,j)
        }
        matrix[i][loops] = edge (matrix[i][loops],i-1,loops-1)
    }
    return Math.min(...matrix[matrix.length-1])
    
};

/**
 * @param {number[][]} matrix
 * @return {number}
 * Runtime: 55 ms, faster than 82.80% of JavaScript online submissions for Minimum Falling Path Sum.
 * Memory Usage: 50.7 MB, less than 12.10% of JavaScript online submissions for Minimum Falling Path Sum.
 */
var minFallingPathSum = function(matrix) {
    
    if (matrix[0].length === 1){
        let sum = 0
        for (let i=0; i<matrix.length; i++)sum += matrix[i][0]
        return sum
    }
    let loops = matrix[0].length - 1
    
    
    for (let i=1; i<matrix.length; i++){
        matrix[i][0] += Math.min(matrix[i-1][0], matrix[i-1][1])
        for (let j=1; j<loops; j++){
            matrix[i][j] += Math.min(matrix[i-1][j-1] , matrix[i-1][j], matrix[i-1][j+1])
        }
        matrix[i][loops] += Math.min(matrix[i-1][loops], matrix[i-1][loops-1])
    }
    return Math.min(...matrix[matrix.length-1])
    
};