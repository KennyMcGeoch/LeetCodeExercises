/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 * Runtime: 99 ms, faster than 80.78% of JavaScript online submissions for Reshape the Matrix.
 * Memory Usage: 44.8 MB, less than 90.82% of JavaScript online submissions for Reshape the Matrix.
 */
 var matrixReshape = function(mat, r, c) {

    let flatArray = mat.flat()
    let iterations = flatArray.length / c
    if (iterations % 1 !== 0){
        return mat
    }
    if (iterations !== r){
        return mat
    }
    let solution = []

    for(i=0; i<iterations; i++){
        solution[i] = flatArray.slice((i*c),((i+1)*c))
    }
    return solution
    
};

matrixReshape([[1,2],[3,4],[5,6],[7,8]], r = 2, c = 4)