/**
 * @param {number[][]} matrix
 * @return {number[]}
 * Runtime: 45 ms, faster than 97.00% of JavaScript online submissions for Lucky Numbers in a Matrix.
Memory Usage: 52.3 MB, less than 25.00% of JavaScript online submissions for Lucky Numbers in a Matrix.
 */
var luckyNumbers  = function(matrix) {
    
    let row = []
    let ans = []
    
    for (let i=0; i<matrix.length; i++) row.push(Math.min(...matrix[i]))
    
    for (let i=0; i<matrix[0].length; i++){
        let maxVal = 0
        let ind = 0
        for (let j=0; j<matrix.length; j++){
            if (matrix[j][i] > maxVal){
                maxVal = matrix[j][i]
                ind = j
            }
        }
        if (row[ind] === maxVal) ans.push(row[ind])
    }
    
    return ans
    
};

/**
 * @param {number[][]} matrix
 * @return {number[]}
 * Runtime: 53 ms, faster than 83.00% of JavaScript online submissions for Lucky Numbers in a Matrix.
 * Memory Usage: 50.6 MB, less than 100.00% of JavaScript online submissions for Lucky Numbers in a Matrix.
 * Runtime: 41 ms, faster than 99.00% of JavaScript online submissions for Lucky Numbers in a Matrix.
 * Memory Usage: 51.2 MB, less than 77.00% of JavaScript online submissions for Lucky Numbers in a Matrix.
 */
var luckyNumbers  = function(matrix) {
    
    let ans = []
    
    for (let i=0; i<matrix[0].length; i++){
        let maxVal = 0
        let ind = 0
        for (let j=0; j<matrix.length; j++){
            if (matrix[j][i] > maxVal){
                maxVal = matrix[j][i]
                ind = j
            }
        }
        if (Math.min(...matrix[ind]) === maxVal) ans.push(maxVal)
    }
    
    return ans
    
};