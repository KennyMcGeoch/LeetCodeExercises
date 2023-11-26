/**
 * @param {number[][]} matrix
 * @return {number}
 * Runtime: 109 ms, faster than 100.00% of JavaScript online submissions for Largest Submatrix With Rearrangements.
 * Memory Usage: 70.2 MB, less than 72.73% of JavaScript online submissions for Largest Submatrix With Rearrangements.
 */
var largestSubmatrix = function(matrix) {
    
    if (matrix.length === 1) return matrix[0].reduce((a,b)=> a+b,0)
    
    for (let i=1; i< matrix.length; i++){
        for (let j=0; j<matrix[i].length; j++){
            if (matrix[i][j] !== 0) matrix[i][j] = matrix[i-1][j] + 1
        }
    }
    
    let ans = 0
    
    for (let i=0; i< matrix.length; i++){
        matrix[i].sort((a,b)=>b-a)
        for (let j=0; j<matrix[i].length; j++){
            ans = Math.max(ans, matrix[i][j] * (j+1))
        }
    }
    return ans
    
};