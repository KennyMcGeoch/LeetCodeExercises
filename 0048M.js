/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * Runtime: 81 ms, faster than 77.87% of JavaScript online submissions for Rotate Image.
 * Memory Usage: 43.4 MB, less than 16.15% of JavaScript online submissions for Rotate Image.
 */
 var rotate = function(matrix) {

    matrix.reverse()
    let iterations = matrix.length
    let swapped = {}

    for (i=0; i<iterations; i++){
        for (j=0; j<iterations; j++){
            if (swapped[[i,j]] === undefined){
                val = matrix[i][j]
                matrix[i][j] = matrix[j][i]
                matrix[j][i] = val
                swapped[[j,i]] = true
            }
        }
    }
    return    
};