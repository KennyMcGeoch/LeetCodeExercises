/**
 * @param {character[][]} matrix
 * @return {number}
 * Runtime 110ms Beats 5.34%
 * Memory 59.04MB Beats 63.11%

 */
var maximalRectangle = function(matrix) {
    let x = matrix.length
    let y = matrix[0].length
    let horiz = new Array(x)
    let ans = 0
    let height = 1
    let val = 0

    for (let i=0; i<x; i++){
        for (let j=0; j<y; j++){
            matrix[i][j] = Number(matrix[i][j])
        }
    }

    for (let i=0; i<x; i++){
        horiz[i] = new Array(y)
        horiz[i][y-1] = matrix[i][y-1]
        for (let j=y-2; j>-1; j--){
            if (matrix[i][j]){
                horiz[i][j] = horiz[i][j+1] + 1
            }
            else horiz[i][j] = 0
        }
    }

    for (let i=0; i<x; i++){
        for (let j=0; j<y; j++){
            if (matrix[i][j])check(i,j)
        }
    }

    function check(xCo, yCo){
        height = 1
        val = horiz[xCo][yCo]
        ans = Math.max(ans, val)
        while(++xCo < x){
            val = Math.min(val, horiz[xCo][yCo])
            ans = Math.max(ans, val* ++height)
        }
    }

    return ans
};

/**
 * @param {character[][]} matrix
 * @return {number}
 * Runtime 109ms Beats 5.34%
 * Memory 60.98MB Beats 27.19%
 */
var maximalRectangle = function(matrix) {
    let x = matrix.length
    let y = matrix[0].length
    let horiz = new Array(x)
    let ans = 0
    let height = 1
    let val = 0

    for (let i=0; i<x; i++){
        horiz[i] = new Array(y)
        horiz[i][y-1] = Number(matrix[i][y-1])
        for (let j=y-2; j>-1; j--){
            if (matrix[i][j] === "1"){
                horiz[i][j] = horiz[i][j+1] + 1
            }
            else horiz[i][j] = 0
        }
    }

    for (let i=0; i<x; i++){
        for (let j=0; j<y; j++){
            if (horiz[i][j])check(i,j)
        }
    }

    function check(xCo, yCo){
        height = 1
        val = horiz[xCo][yCo]
        ans = Math.max(ans, val)
        while(++xCo < x){
            val = Math.min(val, horiz[xCo][yCo])
            ans = Math.max(ans, val* ++height)
        }
    }

    return ans
};