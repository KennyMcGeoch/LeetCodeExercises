/**
 * @param {number[][]} mat
 * @return {number}
 * Runtime: 55 ms, faster than 83.91% of JavaScript online submissions for Special Positions in a Binary Matrix.
 * Memory Usage: 44.2 MB, less than 85.06% of JavaScript online submissions for Special Positions in a Binary Matrix.
 */
var numSpecial = function(mat) {
    let row = {}
    let col = {}
    let ans = 0
    
    for (let i=0; i<mat.length; i++){
        row[i] = mat[i].reduce((a,b)=>a+b)
    }
    
    for (let i=0; i<mat.length; i++){
        if (row[i] !== 1)continue
        else{
            for (let j=0; j<mat[i].length; j++){
                if (mat[i][j] === 1){
                    check(j)
                    j = mat[i].length
                }
            }
        }
    }
    
    function check(num){
        if (col[num] == true) return
        else{
            let pres = false
            for (let i=0; i<mat.length; i++){
                if (mat[i][num] === 1){
                    if (pres) return col[num] = true
                    else pres = true
                }
            }
        }
        col[num] = true
        return ans++
    }
    return ans
};

/**
 * @param {number[][]} mat
 * @return {number}
 * Runtime 0ms Beats 100.00%
 * Memory 55.56MB Beats 93.48%
 */
var numSpecial = function(mat) {
    let col = new Array(mat[0].length).fill(0)
    let row = new Array(mat.length).fill(0)
    let ind = new Array(mat.length)
    let ans = 0

    for (let i=0; i<row.length; i++){
        for (let j=0; j<col.length; j++){
            if (mat[i][j]){
                col[j]++
                row[i]++
                ind[i] = j
            }
        }
    }

    for (let i=0; i<mat.length; i++){
        if (row[i] === 1){
            if (col[ind[i]] === 1) ans++
        }
    }

    return ans
};