/**
 * @param {number[][]} mat
 * @return {number[]}
 * Runtime 6ms Beats 54.02%
 * Memory 60.88MB Beats 94.83%
 */
var findDiagonalOrder = function(mat) {
    let target = mat[0].length * mat.length
    let ans = [mat[0][0]]
    let x = 0
    let y = 0

    while(ans.length < target){
        if (mat[x]  !== undefined && mat[x][y+1]  !== undefined){
            y++
            down()
        }
        else{
            x++
            down()
        }
        if (ans.length === target) return ans
        if (mat[x+1]  !== undefined && mat[x+1][y]  !== undefined){
            x++
            up()
        }
        else{
            y++
            up()
        }
    }


    function down(){
        while(mat[x] !== undefined && mat[x][y]  !== undefined){
            ans.push(mat[x][y])
            x++
            y--
        }
        x--
        y++
        return
    }
    function up(){
        while(mat[x]  !== undefined && mat[x][y]  !== undefined){
            ans.push(mat[x][y])
            x--
            y++
        }
        x++
        y--
        return
    }

    return ans
};

/**
 * @param {number[][]} mat
 * @return {number[]}
 * Runtime 4ms Beats 61.21%
 * Memory 62.38MB Beats 63.51%
 */
var findDiagonalOrder = function(mat) {
    let target = mat[0].length * mat.length
    let ans = [mat[0][0]]
    let x = 0
    let y = 0

    while(ans.length < target){
        if (mat[x]  !== undefined && mat[x][y+1]  !== undefined){
            y++
            while(mat[x] !== undefined && mat[x][y]  !== undefined){
            ans.push(mat[x][y])
            x++
            y--
            }
            x--
            y++
        }
        else{
            x++
            while(mat[x] !== undefined && mat[x][y]  !== undefined){
            ans.push(mat[x][y])
            x++
            y--
            }
            x--
            y++
        }
        if (ans.length === target) return ans
        if (mat[x+1]  !== undefined && mat[x+1][y]  !== undefined){
            x++
            while(mat[x]  !== undefined && mat[x][y]  !== undefined){
            ans.push(mat[x][y])
            x--
            y++
            }
            x++
            y--
        }
        else{
            y++
            while(mat[x]  !== undefined && mat[x][y]  !== undefined){
            ans.push(mat[x][y])
            x--
            y++
            }
            x++
            y--
        }
    }

    return ans
};