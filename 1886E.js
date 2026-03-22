/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 * Runtime 0ms Beats 100.00%
 * Memory 53.55MB Beats 87.72%
 */
var findRotation = function(mat, target) {
    function test(arr){
        for (let i=0; i<mat.length; i++){
            for (let j=0; j<mat.length; j++){
                if (arr[i][j] !== target[i][j]) return false
            }
        }
        return true
    }
    if (test(mat)) return true

    for (let i=0; i<mat.length; i++){
        mat[i].reverse()
    }
    mat.reverse()
    if (test(mat)) return true
    let copy = new Array(mat.length)
    for (let i=0; i<mat.length; i++){
        copy[i] = new Array(mat.length)
    }
    for (let i=0; i<mat.length; i++){
        for (let j=0; j<mat.length; j++){
            copy[j][mat.length - (i+1)] = mat[i][j]
        }
    }
    if (test(copy)) return true
    for (let i=0; i<mat.length; i++){
        copy[i].reverse()
    }
    copy.reverse()
    if (test(copy)) return true

    return false
};