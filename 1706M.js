/**
 * @param {number[][]} grid
 * @return {number[]}
 * Runtime: 65 ms, faster than 97.54% of JavaScript online submissions for Where Will the Ball Fall.
 * Memory Usage: 44.8 MB, less than 36.56% of JavaScript online submissions for Where Will the Ball Fall.
 */
 var findBall = function(grid) {

    let maxwidth = grid[0].length
    let maxheight = grid.length

    let solution = []

    for (i=0; i<maxwidth; i++){
        solution.push(dropBall(i,0))
    }  

    function dropBall(column,depth){
        if (column === maxwidth || column < 0)return -1
        if (depth === maxheight)return column
        if (grid[depth][column] === 1){
            if (column + 1 === maxwidth)return -1
            if (grid[depth][column+1] === -1){
                return -1
            }
            else{
                return dropBall(column+1,depth+1)
            }
        }
        else{
            if (column === 0)return -1
            if (grid[depth][column-1] === 1){
                return -1
            }
            else{
                return dropBall(column-1,depth+1)
            }
        }
    }
    return solution    
};