/**
 * @param {number[][]} matrix
 * @return {number}
 * Runtime: 9 ms, faster than 28.57% of JavaScript online submissions for Maximum Matrix Sum.
 * Memory Usage: 59.5 MB, less than 30.00% of JavaScript online submissions for Maximum Matrix Sum.
 */
var maxMatrixSum = function(matrix) {
    
    let ans = 0
    let neg = 1
    let min = Infinity
    
    for (let i=0; i<matrix.length; i++){
        for (let j=0; j<matrix[i].length; j++){
            if (matrix[i][j] < 0){
                matrix[i][j] *= -1
                neg *= -1
            }
            ans += matrix[i][j]
            min = Math.min(matrix[i][j],min)
        }
    }
    
    if (neg > 0) return ans
    return ans - (min *2)
    
};

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
    
    let ans = 0
    let neg = 1
    let min = Infinity
    
    for (let i=0; i<matrix.length; i++){
        for (let j=0; j<matrix[i].length; j++){
            if (matrix[i][j] < 0){
                ans += (matrix[i][j] * -1)
                min = Math.min(matrix[i][j] * -1,min)
                neg *= -1
            }
            else{
                ans += matrix[i][j]
                min = Math.min(matrix[i][j],min)
            }
        }
    }
    
    if (neg > 0) return ans
    return ans - (min *2)
    
};