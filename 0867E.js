/**
 * @param {number[][]} matrix
 * @return {number[][]}
 * Runtime: 56 ms, faster than 87.17% of JavaScript online submissions for Transpose Matrix.
 * Memory Usage: 44.4 MB, less than 57.49% of JavaScript online submissions for Transpose Matrix.
 */
var transpose = function(matrix) {
    let ans = []
    
    for (let i=0; i<matrix[0].length; i++){
        ans.push([])
        for (let j=0; j<matrix.length; j++){
            ans[i].push(matrix[j][i]) 
        }
    }
    
    return ans
    
};