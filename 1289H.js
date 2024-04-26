/**
 * @param {number[][]} grid
 * @return {number}
 * Runtime: 48 ms, faster than 100.00% of JavaScript online submissions for Minimum Falling Path Sum II.
 * Memory Usage: 52.5 MB, less than 85.71% of JavaScript online submissions for Minimum Falling Path Sum II.
 */
var minFallingPathSum = function(grid) {
        
    for (let i=0; i<grid.length-1; i++){
        let min = grid[i][0]
        let minTwo = Infinity
        let ind = 0
        for (let j=1; j<grid.length; j++){
            if (grid[i][j] < min){
                minTwo = min
                min = grid[i][j]
                ind = j                
            }
            else if (grid[i][j] < minTwo) minTwo = grid[i][j]
        }
        for (let j=0; j<grid.length; j++){
            if (j !== ind) grid[i+1][j] += min
            else grid[i+1][j] += minTwo
        }
    }
    return Math.min(...grid[grid.length-1])
    
};