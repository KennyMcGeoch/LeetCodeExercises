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

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 * Runtime: 57 ms, faster than 83.16% of JavaScript online submissions for Transpose Matrix.
 * Memory Usage: 44.3 MB, less than 74.06% of JavaScript online submissions for Transpose Matrix.
 */
var transpose = function(matrix) {
    
    if (matrix.length === matrix[0].length){
        for (let i=0; i<matrix.length; i++){
            for (let j=i+1; j<matrix.length; j++){
                let temp = matrix[i][j]
                matrix[i][j] = matrix[j][i]
                matrix[j][i] = temp
            }
        }
        return matrix
    }
    
    let ans = []
    
    for (let i=0; i<matrix[0].length; i++){
        ans.push([])
        for (let j=0; j<matrix.length; j++){
            ans[i].push(matrix[j][i]) 
        }
    }
    
    return ans
    
};