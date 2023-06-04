/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * Runtime: 74 ms, faster than 87.04% of JavaScript online submissions for Set Matrix Zeroes.
 * Memory Usage: 44.9 MB, less than 58.26% of JavaScript online submissions for Set Matrix Zeroes.
 */
var setZeroes = function(matrix) {
    
    let xZero = new Set()
    let yZero = new Set()
    
    let xLen = matrix.length
    let yLen = matrix[0].length
    
    for (let i=0; i<xLen; i++){
        for (let j=0; j<yLen; j++){
            if (matrix[i][j] === 0){
                xZero.add(i)
                yZero.add(j)
            }
            
        }
    }
    
    for (let i=0; i<xLen; i++){
        for (let j=0; j<yLen; j++){
            if (xZero.has(i) || yZero.has(j)){
                matrix[i][j] = 0
            }
            
        }
    }
    return
    
};