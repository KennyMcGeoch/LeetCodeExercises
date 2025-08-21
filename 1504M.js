/**
 * @param {number[][]} mat
 * @return {number}
 * Runtime 17ms Beats 50.00%
 * Memory 55.96MB Beats 96.43%
 */
var numSubmat = function(mat) {
    let ans = 0
    let max = 0
    let curr = 1
    let len = mat[0].length
    for (let i=0; i<mat.length; i++){
        for (let j=len-2; j>-1; j--){
            if (mat[i][j]) mat[i][j] += mat[i][j+1]
        }
    }
    for (let i=0; i<mat.length; i++){
        for (let j=0; j<len; j++){
            max = mat[i][j]
            ans += max
            curr = 1
            while (mat[i+curr] && mat[i+curr][j]){
                max = Math.min(max,mat[i+curr][j])
                ans += max
                curr++
            }
        }
    }
    return ans
};

/**
 * @param {number[][]} mat
 * @return {number}
 * Runtime 15ms Beats 57.14%
 * Memory 55.78MB Beats 96.43%
 */
var numSubmat = function(mat) {
    let ans = 0
    let max = 0
    let curr = 1
    let len = mat[0].length
    for (let i=0; i<mat.length; i++){
        for (let j=len-2; j>-1; j--){
            if (mat[i][j]) mat[i][j] += mat[i][j+1]
        }
    }
    for (let i=0; i<mat.length; i++){
        for (let j=0; j<len; j++){
            max = mat[i][j]
            ans += max
            curr = 1
            while (mat[i+curr] && max){
                max = Math.min(max,mat[i+curr][j])
                ans += max
                curr++
            }
        }
    }
    return ans
};