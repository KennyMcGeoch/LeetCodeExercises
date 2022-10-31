/**
 * @param {number[][]} matrix
 * @return {boolean}
 * Runtime: 66 ms, faster than 96.62% of JavaScript online submissions for Toeplitz Matrix.
 * Memory Usage: 43.4 MB, less than 98.87% of JavaScript online submissions for Toeplitz Matrix.
 */
 var isToeplitzMatrix = function(matrix) {

    let iterationsX = matrix[0].length - 1
    let iterationsY = matrix.length - 1
    
    if (iterationsX === 0 || iterationsY === 0)return true

    for (i=0; i<iterationsX; i++){
        if (checkDiagonal(0,i,matrix[0][i]) === 1) return false
    }
    if (iterationsY > 1){
        for (i=1; i<iterationsY; i++){
        if (checkDiagonal(i,0,matrix[i][0]) === 1) return false
        }         
    }

    function checkDiagonal(y,x,val){
        if (x > iterationsX || y > iterationsY ) return 0
        if (matrix[y][x] !== val) return 1
        return checkDiagonal(y+1,x+1,val)
    }

    return true
    
};