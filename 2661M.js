/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 * Runtime 65ms Beats 83.33%
 * Memory 79.87MB Beats 79.17%
 */
var firstCompleteIndex = function(arr, mat) {
    let rtarg = mat[0].length
    let ctarg = mat.length
    let row = new Array(ctarg+1).fill(0)
    let col = new Array(rtarg+1).fill(0)
    let hash = new Array(arr.length+1)

    for (let i=0; i<mat.length; i++){
        for (let j=0; j<mat[0].length; j++){
            hash[mat[i][j]] = [i,j]
        }
    }

    for (let i=0; i<arr.length; i++){
        if (++row[hash[arr[i]][0]] === rtarg) return i
        if (++col[hash[arr[i]][1]] === ctarg) return i
    }
};