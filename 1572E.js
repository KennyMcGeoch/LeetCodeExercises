/**
 * @param {number[][]} mat
 * @return {number}
 * Runtime: 101 ms, faster than 44.98% of JavaScript online submissions for Matrix Diagonal Sum.
 * Memory Usage: 44.1 MB, less than 22.71% of JavaScript online submissions for Matrix Diagonal Sum.
 */
 var diagonalSum = function(mat) {

    let iterations = Math.min(mat.length, mat[0].length)
    let count = 0
    let maxVal = iterations-1

    if (mat.length === 1){
        return mat[0][0]
    }

    for (i=0; i<iterations; i++){
        count += mat[i][i]
    }
    for (i=0; maxVal-i >= 0; i++){
        count += mat[i][maxVal - i]
    }

    if (iterations % 2 === 1){
        duplicateVal = ((iterations+1)/2)-1
        count -= mat[duplicateVal][duplicateVal]
    }

    return count
    
};

diagonalSum([[1,2,3],
    [4,5,6],
    [7,8,9]])