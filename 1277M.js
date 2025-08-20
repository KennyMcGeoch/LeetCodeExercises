/**
 * @param {number[][]} matrix
 * @return {number}
 * Runtime 10ms Beats 68.06%
 * Memory 57.91MB Beats 81.94%
 */
var countSquares = function(matrix) {
    let ans = 0
    let max = 0
    for (let i=0; i<matrix.length; i++){
        for (let j=matrix[i].length-2; j>-1; j--){
            if (matrix[i][j]) matrix[i][j] += matrix[i][j+1]
        }
    }
    for (let i=0; i<matrix.length; i++){
        for (let j=0; j<matrix[0].length; j++){
            max = matrix[i][j]
            if (matrix[i][j]){
                for (let k=1; k<max; k++){
                    if (i+k === matrix.length){
                        max = k
                    }
                    else max = Math.max(Math.min(max, matrix[i+k][j]),k)
                }
            }
            ans += max
        }
    }
    return ans
};

/**
 * @param {number[][]} matrix
 * @return {number}
 * Runtime 9ms Beats 73.61%
 * Memory 57.86MB Beats 84.72%
 */
var countSquares = function(matrix) {
    let ans = 0
    let max = 0
    let len = matrix[0].length
    for (let i=0; i<matrix.length; i++){
        for (let j=len-2; j>-1; j--){
            if (matrix[i][j]) matrix[i][j] += matrix[i][j+1]
        }
    }
    for (let i=0; i<matrix.length; i++){
        for (let j=0; j<len; j++){
            max = matrix[i][j]
            if (matrix[i][j]){
                for (let k=1; k<max; k++){
                    if (i+k === matrix.length){
                        max = k
                    }
                    else max = Math.max(Math.min(max, matrix[i+k][j]),k)
                }
            }
            ans += max
        }
    }
    return ans
};