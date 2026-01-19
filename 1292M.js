/**
 * @param {number[][]} mat
 * @param {number} threshold
 * @return {number}
 * Runtime 24ms Beats 18.18%
 * Memory 63.11MB Beats 27.27%
 */
var maxSideLength = function(mat, threshold) {
    let hash = []
    let loop = mat[0].length
    let ans = 0
    let total = 0
    for (let i=0; i<mat.length; i++) hash[i] = new Array(mat[i].length)
    for (let i=0; i<mat.length; i++){
        hash[i][0] = 0
        for (let j=0; j<loop; j++){
            hash[i][j+1] = mat[i][j] + hash[i][j]
        }
    }

    function calcSq(x,y,len){
        total = 0
        for (let i=0; i<len; i++){
            total += (hash[x+i][y+len] - hash[x+i][y])
        }
        if (total > threshold) return false
        return true
    }

    for (let i=0; i<mat.length; i++){
        for (let j=0; j<loop; j++){
            let cand = ans+1
            while(i + cand <= mat.length && j+cand <= loop && calcSq(i,j,cand)){
                ans = cand++
            }
        }
    }
    return ans
};