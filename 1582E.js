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