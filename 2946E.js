/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 * Runtime 0ms Beats 100.00%
 * Memory 54.82MB Beats 93.55%
 */
var areSimilar = function(mat, k) {
    let len = mat[0].length
    for (let i=0; i<mat.length; i++){
        for (let j=0; j<len; j++){
            if (mat[i][j] !== mat[i][(j+k) % len]) return false
        }
    }
    return true
};