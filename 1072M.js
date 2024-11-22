/**
 * @param {number[][]} matrix
 * @return {number}
 * Runtime: 71 ms, faster than 40.00% of JavaScript online submissions for Flip Columns For Maximum Number of Equal Rows.
 * Memory Usage: 58.1 MB, less than 80.95% of JavaScript online submissions for Flip Columns For Maximum Number of Equal Rows.
 */
var maxEqualRowsAfterFlips = function(matrix) {
    
    let hash = {}
    
    function flip(arr){
        for (let j=0; j<arr.length; j++){
            if (arr[j] === 1) arr[j] = 0
            else arr[j] = 1
        }
        return arr
    }
    
    for (let i=0; i<matrix.length; i++){
        if (matrix[i][0] === 0) matrix[i] = flip(matrix[i])
        hash[matrix[i]] = (hash[matrix[i]] || 0) + 1
    }
    
    return Math.max(...Object.values(hash))
};